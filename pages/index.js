// Libraries
import prisma from "../lib/prisma";
import { useRouter } from "next/router";
import Head from "next/head";

// Components
import StudentCard from "../components/StudentCard";

// Data Fetching
export async function getServerSideProps() {
  const students = await prisma.student.findMany({
    include: {
      phone: true,
    }
  });
  return {
    props: {
      students: JSON.parse(JSON.stringify(students))
    }
  }
}


// Page Component
export default function Home({students}) {
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>mini-SM | Students</title>
      </Head>
      <div className="flex justify-between items-center py-3">
        <button
          className="bg-slate-600 text-white p-2 rounded"
          onClick={() => router.push("/student/create")}
        >
          Create New Student
        </button>
      </div>
      {students.map((student) => {
        return (
          <StudentCard
            student={student}
          />
        )
      })}
    </div>
  )
}
