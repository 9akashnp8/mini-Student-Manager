import Link from "next/link";

export default function Header() {
    return (
        <nav className="flex items-center gap-10 py-5">
            <h2 className="text-3xl font-bold">Student Manager</h2>
            <Link href='/'>
                Students
            </Link>
        </nav>
    )
}