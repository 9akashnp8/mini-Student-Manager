import Head from "next/head";

import Header from "./Header";

export default function Layout({children}) {
    return (
        <div className="bg-slate-200 h-screen">
            <div className="max-w-6xl mx-auto">
                <Header/>
                {children}
            </div>
        </div>
    );
}