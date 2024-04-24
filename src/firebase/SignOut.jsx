import React from 'react'
import { auth } from './firebase'

export default function SignOut() {
    return auth.currentUser && (
        <div className='sign-out-div'>
        <button className="sign-out" onClick={() => auth.signOut()}>Sign Out</button>
        </div>
    )
}