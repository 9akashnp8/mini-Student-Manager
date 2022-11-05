// Libraries

// Components

// Data fetching
export async function getServerSideProps({params}) {
    return {
        props: {result: 'Hello'}
    }
}

// Page Component
export default function StudentDetailPage() {
    return (
        <p>This is a student detail page</p>
    )
}