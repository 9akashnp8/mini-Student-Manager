// Libraries
import prisma from "../../lib/prisma"
import { useRouter } from "next/router";
import { useState } from "react";

// Components

// Data fetching
export async function getServerSideProps({params}) {
    const student = await prisma.student.findUnique({
        where: {
            id: +params.id,
        },
        include: {
            phone: true,
        },
    });
    return {
        props: { student: JSON.parse(JSON.stringify(student)) }
    }
}

// Page Component
export default function StudentDetailPage({student}) {
    const [ privateStatus, setPrivateStatus ] = useState(true);
    const router = useRouter();

    function handlePrivate(data)  {
        if (privateStatus) {
            return "**********"
        } else {
            return data;
        }
    }

    return (
        <div>
            <div className="flex justify-between items-center py-3">
                <div>{router.asPath}</div>
                <button
                    className="bg-slate-600 text-white p-2 rounded"
                    onClick={() => router.push("/create")}
                >
                    Create New Student
                </button>
            </div>
            <div className="bg-white p-5 rounded">
                <h2 className="text-2xl pb-3">{student.full_name}</h2>
                <hr/>
                <div className="py-3">
                    <h4 className="text-sm pb-2">Primary Info</h4>
                    <div className="grid grid-cols-2 gap-3">
                        <div>
                            Roll No: {student.roll_no}
                        </div>
                    </div>
                </div>
                <hr/>
                <div className="py-3">
                    <h4 className="flex items-center gap-2 text-sm pb-2">
                        Personal Info
                        <button onClick={() => setPrivateStatus(!privateStatus)}>{privateStatus ? (
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-eye-fill" viewBox="0 0 16 16">
                                <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
                                <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-eye-slash-fill" viewBox="0 0 16 16">
                                <path d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 0 0 2.79-.588zM5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.089z"/>
                                <path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12-.708.708z"/>
                            </svg>
                        )}</button>
                    </h4>
                    <div className="grid grid-cols-2 gap-3">
                        <p>Email: {handlePrivate(student.email)}</p>
                        {student.phone.map(phone => <p key={phone.id}>Phone: {handlePrivate(phone.number)}</p>)}
                        <p >Gender: {handlePrivate(student.gender)}</p>
                        <p>Address: {handlePrivate(student.address)}</p>
                        <p>Nationality: {handlePrivate(student.nationality)}</p>
                        <p>School: {handlePrivate(student.school)}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}