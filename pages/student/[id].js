// Libraries
import prisma from "../../lib/prisma"

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
    return (
        <div>
            <h2>{student.full_name}</h2>
            <hr/>
            <h4>Primary Info</h4>
            <p>{student.roll_no}</p>
            <p>{student.email}</p>
            {student.phone.map(phone => <p>{phone.number}</p>)}
            <hr/>
            <h4>Personal Info</h4>
            <p>{student.gender}</p>
            <p>{student.address}</p>
            <p>{student.nationality}</p>
            <p>{student.school}</p>
        </div>
    )
}