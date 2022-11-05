// Libraries
import prisma from "../lib/prisma";
import Link from "next/link";

// Components
import StudentCard from "../components/StudentCard";
import Layout from "../components/Layout";

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
  console.log(students)
  return (
    <Layout>
      {students.map((student) => {
        return (
          <StudentCard
            student={student}
          />
        )
      })}
    </Layout>
  )
}
