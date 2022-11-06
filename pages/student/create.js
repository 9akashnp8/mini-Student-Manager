// Libraries
import { useState } from "react"

// Components

// Page component

export default function CreateStudent() {
    const [ fullName, setFullName ] = useState("");
    const [ gender, setGender ] = useState("");
    const [ address, setAddress ] = useState("");
    const [ nationality, setNationality ] = useState("");
    const [ school, setSchool ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ phone, setPhone ] = useState("");
    const [ owner, setOwner ] = useState("");
    const [ rollNo, setRollNo ] = useState("");

    function createStudent(event) {
        event.preventDefault();
        // To do
    }

    return (
        <div>
            <form 
                onSubmit={createStudent}
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
                    <select id="owner" value={owner} onChange={e => setOwner(e.target.value)} className="ml-5 rounded">
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