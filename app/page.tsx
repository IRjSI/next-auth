"use client"
import { SessionProvider, signIn, signOut, useSession } from "next-auth/react";

export default function Home() {
  return (
    <SessionProvider>
      <Home2 />
    </SessionProvider>
  );
}

function Home2() {
  const session = useSession();

  return <div>
      {session.status === 'authenticated' ? (<button onClick={() => signOut()}>Logout</button>) : (<button onClick={() => signIn()}>Signin</button>)}
    </div>
  
}