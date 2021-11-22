import { collection, doc, getDoc, getDocs, query, where } from "@firebase/firestore"
import { db } from "../firebase/firebaseClient"

const cancelSubscription = async (uid: string) => {
    let subId = ''
    const ref = collection(db, "users", uid, "subscriptions")
    const q = query(ref, where("status", "==", "active"))
    const querySnapShot = await getDocs(q)
    querySnapShot.forEach((doc) => {
        subId = doc.id
    })

    return fetch('/api/cancel-subscription', {
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({subId})
    })
    .then((res) => res.json())
}

export default cancelSubscription