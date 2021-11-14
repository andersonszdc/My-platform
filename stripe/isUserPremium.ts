import { getAuth } from "firebase/auth";

export default async function isUserPremium() {
    const auth = getAuth()
    await auth.currentUser?.getIdToken(true)
    const decodedToken = await auth.currentUser?.getIdTokenResult()

    return decodedToken?.claims.stripeRole ? true : false
}