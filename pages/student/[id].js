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
    console.log(student);
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
                            Roll No: {handlePrivate(student.roll_no)}
                            <button onClick={() => setPrivateStatus(!privateStatus)} className="text-sm bg-slate-200">View</button>
                        </div>
                        <p>Email: {student.email}</p>
                        {student.phone.map(phone => <p>Phone: {phone.number}</p>)}
                    </div>
                </div>
                <hr/>
                <div className="py-3">
                    <h4 className="text-sm pb-2">Personal Info</h4>
                    <div className="grid grid-cols-2 gap-3">
                        <p >Gender: {student.gender}</p>
                        <p>Address: {student.address}</p>
                        <p>Nationality: {student.nationality}</p>
                        <p>School: {student.school}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}