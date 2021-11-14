import getStripe from './initializeStripe';
import { db } from "../firebase/firebaseClient";
import { addDoc, collection, doc, onSnapshot, setDoc } from "@firebase/firestore";
import initializeStripe from './initializeStripe';

export async function createCheckoutSession(uid: string) {

    // create a new checkout sesion in subcollection inside this users document 

    const checkoutSessionRef = await addDoc(collection(db, "users", uid, "checkout_sessions"), {
        price: "price_1JvMjCEQJlw2UrNlPU0EI6dE",
        success_url: window.location.origin,
        cancel_url: window.location.origin
    })

    onSnapshot(checkoutSessionRef, async (doc) => {
        const { sessionId } = doc.data()
        if (sessionId) {
            const stripe = await initializeStripe()
            stripe.redirectToCheckout({ sessionId })
        }
    })
}