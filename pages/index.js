// Libraries

// Components
import StudentCard from "../components/StudentCard"
import Layout from "../components/Layout"

// Sample Data
const students = [
  {
    name: 'Akash NP',
    email: 'akashnp1998@gmail.com',
    phone: '8075680338',
  },
  {
    name: 'Adarsh NP',
    email: 'npadarsh77@gmail.com',
    phone: '7994380580',
  }
]


// Page Component
export default function Home() {
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
