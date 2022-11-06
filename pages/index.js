// Libraries
import prisma from "../lib/prisma";
import { useRouter } from "next/router";
import Head from "next/head";

// Components
import StudentCard from "../components/StudentCard";
import Navigation from "../components/Navigation";

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
      <Navigation path='/student/create'>
        Create New Student
      </Navigation>
      {students.map((student) => {
        return (
          <StudentCard
            key={student.id}
            student={student}
          />
        )
      })}
    </div>
  )
}
