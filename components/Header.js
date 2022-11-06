import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";

function Authentication() {

    if (session) {
        return (
            <>
                Signed in as {session.user.email} <br/>
                <button onClick={() => signOut()}>Sign Out</button>
            </>
        )
    }

    return (
        <>
            Not Signed In <br/>
            <button onClick={() => signIn()}>Sign In</button>
        </>
    )
}

export default function Header() {
    const { data: session } = useSession();

    return (
        <nav className="flex items-center gap-10 pt-8">
            <h2 className="text-3xl font-bold">Student Manager</h2>
            {(session) ? (
                <div className="ml-auto">
                    <span className="text-xs italic">Signed in as {session.user.email}</span> | <button className="bg-slate-600 p-1 rounded text-white" onClick={() => signOut()}>Sign Out</button>
                </div>
            ) : (
                <div className="ml-auto">
                    <span className="text-xs italic">Not Signed In</span> | <button className="bg-slate-600 p-1 rounded text-white" onClick={() => signIn()}>Sign In</button>
                </div>
            )} 
        </nav>
    )
}