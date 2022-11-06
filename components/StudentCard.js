// Libraries
import Router from "next/router";

export default function StudentCard({student}) {
    return (
        <div 
            className="bg-white	rounded p-5 my-2 hover:cursor-pointer"
            onClick={() => Router.push("/student/[id]", `/student/${student.id}`)}
        >
            <h4 className="text-lg pb-3">{student.full_name}</h4>
            <p className="text-sm">{student.roll_no}</p>
        </div>
    );
}