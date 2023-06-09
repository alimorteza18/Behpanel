import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Toolbar, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { VscTasklist } from "react-icons/vsc"
import { SCRIPT_URL } from "../../Services/contactService";
import http from "../../Services/httpService";
const Logs = () => {
    const [res, setres] = useState([]);
    useEffect(() => {
        try {
            async function fetchdata() {
                let res = await http.get(`${SCRIPT_URL}/logs`)
                setres(res.data)
            }
            fetchdata()

        } catch (e) {
            console.log(e);
        }

    }, []);
    return (<>
        <Toolbar disableGutters>
            <VscTasklist style={{ width: "1.5rem", height: "1.5rem", }} />
            <Typography variant='h6' sx={{ ml: 1 }}>
                Logs
            </Typography>
        </Toolbar>
        <TableContainer sx={{ width: { md: "100%", xs: "88vw", sm: "100%" }, mt: 4 }} component={Paper}>
            <Table sx={{ minWidth: { xs: "1200px", md: 650, sm: 650 } }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>کاربر</TableCell>
                        <TableCell>VPS ID</TableCell>
                        <TableCell>تاریخ</TableCell>
                        <TableCell>Act ID</TableCell>
                        <TableCell>فعالیت</TableCell>
                        <TableCell>وضعیت</TableCell>
                        <TableCell>IP</TableCell>

                    </TableRow>
                </TableHead>
                <TableBody>
                    {res.map(data =>
                        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <TableCell>{data.userName}</TableCell>
                            <TableCell>{data.vpsID}</TableCell>
                            <TableCell>{data.date}</TableCell>
                            <TableCell>{data.actID}</TableCell>
                            <TableCell>{data.action}</TableCell>
                            <TableCell>{data.status}</TableCell>
                            <TableCell>{data.ip}</TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </TableContainer>
    </>);
}

export default Logs;