import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Toolbar, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { GiServerRack } from "react-icons/gi";
import { SERVER_URL } from "../../Services/contactService";
import http from "../../Services/httpService";

const Ippool = () => {
    const [ippool, setIppool] = useState([]);
    useEffect(() => {
        try {
            async function fetchdata() {
                let ippool = await http.get(`${SERVER_URL}/ippool`)
                setIppool(ippool.data.dataList)
            }
            fetchdata()

        } catch (e) {
            console.log(e);
        }

    }, []);
    return (<>
        <Toolbar disableGutters>
            <GiServerRack style={{ width: "1.5rem", height: "1.5rem", }} />
            <Typography variant='h6' sx={{ ml: 1 }}>
                استخر IP
            </Typography>
        </Toolbar>
        <TableContainer sx={{ width: { md: "100%", xs: "88vw", sm: "100%" }, mt: 4 }} component={Paper}>
            <Table sx={{ minWidth: { xs: "1200px", md: 650, sm: 650 } }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>نام </TableCell>
                        <TableCell>رنج آی پی</TableCell>
                        <TableCell>NetMask</TableCell>
                        <TableCell>Gateway</TableCell>

                    </TableRow>
                </TableHead>
                <TableBody>
                    {ippool.map(data =>
                        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <TableCell>{data.id}</TableCell>
                            <TableCell>{data.ippoolName}</TableCell>
                            <TableCell>{data.range}</TableCell>
                            <TableCell>{data.netmask}</TableCell>
                            <TableCell>{data.gateway}</TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </TableContainer>
    </>);
}

export default Ippool;