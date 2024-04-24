import React from 'react'
import firebase from 'firebase/compat/app'
import { auth } from './firebase';
import { Google } from '@mui/icons-material';

export default function SignIn() {
    const signInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider);
    }
  return (
    <div className='sign-in-div'>
      <button className="sign-in" onClick={signInWithGoogle}><Google/>Sign in with Google</button>
      <p>Sign In to browse everything about movies and series.</p>
    </div>
  )
}