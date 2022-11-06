import { useRouter } from "next/router"

export default function Navigation({path, children}) {
    const router = useRouter();

    return (
        <div className="flex justify-between items-center py-6">
            <button
                className="bg-slate-600 text-white p-2 rounded"
                onClick={() => router.push(path)}
            >
                {children}
            </button>
        </div>
    )
}