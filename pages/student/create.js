// Libraries
import { useRouter } from "next/router";
import { useState } from "react";
import Head from 'next/head';

// Components

// Helpers
async function createStudent(body) {
    let createdStudent;
    const id = await fetch('/api/student/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
    })
    .then(data => data.json())
    .then(res => createdStudent = res );
    return createdStudent;
}

// Page component
export default function CreateStudent() {
    const router = useRouter();

    const [ rollNo, setRollNo ] = useState("");
    const [ fullName, setFullName ] = useState("");
    const [ gender, setGender ] = useState("");
    const [ address, setAddress ] = useState("");
    const [ nationality, setNationality ] = useState("");
    const [ school, setSchool ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ phone, setPhone ] = useState("");
    const [ owner, setOwner ] = useState("");

    async function handleCreateStudent(event) {
        event.preventDefault();

        const body = {
            rollNo: event.target.rollNo.value,
            fullName: event.target.fullName.value,
            gender: event.target.gender.value,
            dob: '',
            address: event.target.address.value,
            nationality: event.target.nationality.value,
            school: event.target.school.value,
            email: event.target.email.value,
            phone: event.target.phone.value,
            owner: event.target.owner.value,
        }

        let createdStudent;
        await fetch('/api/student/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
        })
        .then(data => data.json())
        .then(res => createdStudent = res.id );

        router.push(`/student/${createdStudent}`);
    }

    return (
        <div>
            <Head>
                <title>mini-SM | Create Student</title>
            </Head>
            <form 
                onSubmit={handleCreateStudent}
                className="flex flex-col gap-5 items-start"
            >
                <div className="">
                    <label htmlFor="rollNo">Roll No:</label>
                    <input
                        required
                        id="rollNo"
                        type="text"
                        value={rollNo}
                        onChange={e => setRollNo(e.target.value)}
                        className="ml-5 rounded"
                    />
                </div>
                <div className="">
                    <label htmlFor="fullName">Full Name:</label>
                    <input
                        required
                        id="fullName"
                        type="text"
                        value={fullName}
                        onChange={e => setFullName(e.target.value)}
                        className="ml-5 rounded"
                    />
                </div>
                <div className="">
                    <label htmlFor="gender">Gender:</label>
                    <select id="gender" value={gender} onChange={e => setGender(e.target.value)} className="ml-5 rounded">
                        <option value={0}>Select Gender</option>
                        <option value={1}>Male</option>
                        <option value={2}>Female</option>
                        <option value={3}>Others</option>
                    </select>
                </div>
                <div className="">
                    <label htmlFor="nationality">Nationality:</label>
                    <select id="nationality" value={nationality} onChange={e => setNationality(e.target.value)} className="ml-5 rounded">
                        <option value={0}>Select Nationality</option>
                        <option value={1}>Indian</option>
                        <option value={2}>NRI</option>
                    </select>
                </div>
                <div className="">
                    <label htmlFor="school">School Name:</label>
                    <input
                        id="school"
                        type="text"
                        value={school}
                        onChange={e => setSchool(e.target.value)}
                        className="ml-5 rounded"
                    />
                </div>
                <div className="">
                    <label htmlFor="email">Email:</label>
                    <input
                        required
                        id="email"
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        className="ml-5 rounded"
                    />
                </div>
                <div className="">
                    <label htmlFor="phone">Phone:</label>
                    <input
                        id="phone"
                        type="tel"
                        value={phone}
                        onChange={e => setPhone(e.target.value)}
                        className="ml-5 rounded"
                    />
                </div>
                <div className="">
                    <label htmlFor="address">Address:</label>
                    <textarea
                        id="address"
                        rows={4}
                        cols={30}
                        value={address}
                        onChange={e => setAddress(e.target.value)}
                        className="ml-5 rounded"
                    />
                </div>
                <div className="">
                    <label htmlFor="owner">Owner:</label>
                    <select required id="owner" value={owner} onChange={e => setOwner(e.target.value)} className="ml-5 rounded">
                        <option value={0}>Select Owner</option>
                        <option value={1}>Safna CB</option>
                        <option value={2}>Immanuel P</option>
                    </select>
                </div>
                <input type="submit" className="bg-slate-600 p-3 rounded text-white hover:cursor-pointer"/>
            </form>
        </div>
    )
}