export default function StudentCard({student}) {
    return (
        <div>
            <h3>{student.full_name}</h3>
            {student.phone.map((phone) => <p>{phone.number}</p>)}
            <p>{student.email}</p>
        </div>
    );
}