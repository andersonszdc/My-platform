import Login from '../components/Login'
import styles from '../styles/Home.module.css'
import firebaseApp from '../firebase/firebaseClient'
import { useAuthState } from 'react-firebase-hooks/auth'
import { createCheckoutSession } from '../stripe/createCheckoutSession'
import usePremiumStatus from '../stripe/usePremiumStatus'
import { getAuth, signOut } from '@firebase/auth'

export default function Home() {

  const [user, userLoading] = useAuthState(getAuth())
  const userIsPremium = usePremiumStatus(user)

  return (
    <div className={styles.container}>
      {!user && userLoading && <h1>Loading...</h1>}
      {!user && !userLoading && <Login />}
      {user && !userLoading && (
        <div>
          <h1>Hello, {user.displayName}</h1>
          <button onClick={() => signOut(getAuth())}>Sign out</button>
          {!userIsPremium? (
            <button onClick={() => createCheckoutSession(user.uid)}>Upgrade to premium!</button>
          ):(
            <h2>Have a cookie Premium customer!</h2>
          )}
        </div>
      )}
    </div>
  )
}
