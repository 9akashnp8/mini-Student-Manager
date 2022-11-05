import Link from "next/link";

export default function Header() {
    return (
        <nav>
            <h2>Student Manager</h2>
            <Link href='/'>
                Students
            </Link>
        </nav>
    )
}