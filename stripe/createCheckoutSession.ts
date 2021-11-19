import { db } from "../firebase/firebaseClient";
import { addDoc, collection } from "@firebase/firestore";

export async function createCheckoutSession(uid: string) {

    await addDoc(collection(db, "users", uid, "checkout_sessions"), {
        price: "price_1JvMjCEQJlw2UrNlPU0EI6dE",
        success_url: window.location.origin,
        cancel_url: window.location.origin
    })
}

export default createCheckoutSession