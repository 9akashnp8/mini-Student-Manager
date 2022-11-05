// Libraries
import Router from "next/router";

export default function StudentCard({student}) {
    return (
        <div onClick={() => Router.push("/student/[id]", `/student/${student.id}`)}>
            <h3>{student.full_name}</h3>
            {student.phone.map((phone) => <p>{phone.number}</p>)}
            <p>{student.email}</p>
        </div>
    );
}