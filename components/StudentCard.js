export default function StudentCard({student}) {
    return (
        <div>
            <h3>{student.name}</h3>
            <p>{student.phone}</p>
            <p>{student.email}</p>
        </div>
    );
}