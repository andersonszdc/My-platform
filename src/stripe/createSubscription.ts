import { doc, getDoc } from "@firebase/firestore"
import { db } from "../firebase/firebaseClient"

const createSubscription = async (uid: string) => {
    const userRef = doc(db, "users", uid)
    const userSnap = await getDoc(userRef)
    const { stripeId } = userSnap.data()

    return fetch('/api/create-subscription', {
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({customerId: stripeId, priceId: 'price_1JvMjCEQJlw2UrNlPU0EI6dE'})
    })
    .then((res) => res.json())
}

export default createSubscription