'use client'

import {
    TableContainer,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    tableCellClasses,
    Paper
} from "@mui/material";

export default function MyTable() {
    return (
        <TableContainer
            sx={{
                [`& .${tableCellClasses.root}`]: {
                    border: 'none',
                    boxShadow: 'none',
                    color: 'gray',
                    fontWeight: 'bold',
                    maxWidth: '50rem'
                }
            }}
            className="rounded-xl border-none" component={Paper}>
            <Table
                sx={{
                    [`& .${tableCellClasses.root}`]: {
                        color: 'gray',
                        fontWeight: 'bold'
                    }
                }}
                aria-label="Simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>NAME</TableCell>
                        <TableCell>TECH</TableCell>
                        <TableCell>GENDER</TableCell>
                        <TableCell>PROGRESS</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody sx={{
                    [`& .${tableCellClasses.root}`]: {
                        borderBottom: "none",
                        color: 'black',
                        fontWeight: 'bold'
                    }
                }}>
                    {
                        TableData.map((row) => (
                            <TableRow
                                key={row.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 'none' } }}
                            >
                                <TableCell>{`${row.first_name} ${row.last_name}`}</TableCell>
                                <TableCell>{row.tech}</TableCell>
                                <TableCell>{row.gender}</TableCell>
                                <TableCell>{row.progress}</TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </TableContainer>
    )
};


const TableData = [{
    "id": 1,
    "first_name": "Juliann",
    "last_name": "Verbruggen",
    "progress": "jverbruggen0@tiny.cc",
    "gender": "Female",
    "tech": "135.152.30.143"
}, {
    "id": 2,
    "first_name": "Eugine",
    "last_name": "Bradane",
    "progress": "ebradane1@usa.gov",
    "gender": "Female",
    "tech": "210.127.251.47"
}, {
    "id": 3,
    "first_name": "Betty",
    "last_name": "Jahnke",
    "progress": "bjahnke2@taobao.com",
    "gender": "Female",
    "tech": "225.102.170.154"
}, {
    "id": 4,
    "first_name": "Hartwell",
    "last_name": "Warsap",
    "progress": "hwarsap3@samsung.com",
    "gender": "Male",
    "tech": "28.162.242.84"
}, {
    "id": 5,
    "first_name": "Chester",
    "last_name": "Hallatt",
    "progress": "challatt4@vk.com",
    "gender": "Male",
    "tech": "50.185.240.213"
}, {
    "id": 6,
    "first_name": "Dante",
    "last_name": "Kemwall",
    "progress": "dkemwall5@answers.com",
    "gender": "Male",
    "tech": "37.137.225.150"
}, {
    "id": 7,
    "first_name": "Amil",
    "last_name": "Mower",
    "progress": "amower6@domainmarket.com",
    "gender": "Female",
    "tech": "3.189.214.218"
}, {
    "id": 8,
    "first_name": "Jimmie",
    "last_name": "Basindale",
    "progress": "jbasindale7@addthis.com",
    "gender": "Male",
    "tech": "116.208.28.255"
}, {
    "id": 9,
    "first_name": "Aldric",
    "last_name": "Lysaght",
    "progress": "alysaght8@hhs.gov",
    "gender": "Male",
    "tech": "164.54.81.112"
}, {
    "id": 10,
    "first_name": "Cece",
    "last_name": "Verbruggen",
    "progress": "cverbruggen9@google.pl",
    "gender": "Male",
    "tech": "242.52.182.206"
}]