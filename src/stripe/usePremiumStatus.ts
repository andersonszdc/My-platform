import { FirebaseApp } from "@firebase/app";
import { useState, useEffect } from "react";
import firebaseApp from "../firebase/firebaseClient";
import isUserPremium from "./isUserPremium";

export default function usePremiumStatus(user) {

    const [premiumStatus, setPremiumStatus] = useState<boolean>(false)

    useEffect(() => {
        if (user) {
            const checkPremiumStatus = async function () {
                setPremiumStatus(await isUserPremium())
            }
            checkPremiumStatus()
        }
    },[user])

    return premiumStatus
}