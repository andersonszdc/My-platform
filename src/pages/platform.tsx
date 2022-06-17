import { getAuth, signOut } from "@firebase/auth";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { LayoutNavBar } from "../layouts/NavBarLayout";
import createSubscription from "../stripe/createSubscription";
import usePremiumStatus from "../stripe/usePremiumStatus";
import HeaderPlatform from "../components/HeaderPlatform";
import CustomButton from "../components/CustomButton";
import MainBanner from "../components/MainBanner";
import Classes from "../sections/Classes";

const Platform = () => {
  const router = useRouter();
  const [user] = useAuthState(getAuth());
  const userIsPremium = usePremiumStatus(user);
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    !user && router.push("/");
  }, [router, user]);

  const goToCheckout = (e: any) => {
    e.preventDefault();
    createSubscription(user.uid).then((res) => {
      setClientSecret(res.latest_invoice.payment_intent.client_secret);
    });
  };

  if (clientSecret) {
    router.push(
      {
        pathname: "checkout",
        query: { clientSecret },
      },
      "/checkout"
    );
  }

  return (
    user && (
      <div>
        <HeaderPlatform user={user} />
        {/* {!userIsPremium ? (
          <CustomButton onClick={goToCheckout}>
            Upgrade to Premium!
          </CustomButton>
        ) : (
          <h2>You{`'`}re a Premium customer!</h2>
        )} */}
        <MainBanner />
        <Classes />
      </div>
    )
  );
};

Platform.layout = LayoutNavBar;

export default Platform;
