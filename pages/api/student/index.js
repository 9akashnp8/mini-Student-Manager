// Libraries
import prisma from "../../../lib/prisma"
import Router from "next/router";

export default async function handler(req, res) {
    const body = req.body;

    const result = await prisma.student.create({
        data: {
            roll_no: body.rollNo,
            full_name: body.fullName,
            gender: body.gender,
            dob: null,
            address: body.address,
            nationality: body.nationality,
            school: body.school,
            email: body.email,
            phone: undefined,
            owner: { connect: { id: parseInt(body.owner) }},
        }
    });
    
    const newStudent = await prisma.student.findUnique({
        where: {
            roll_no: body.rollNo
        }
    })
    
    res.json(newStudent);
}