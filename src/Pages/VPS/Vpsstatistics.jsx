import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getServer } from "../../Redux/Actions/actions";
import { SCRIPT_URL } from "../../Services/contactService";
import http from "../../Services/httpService";
import { AiOutlineAreaChart } from "react-icons/ai"
import { Box, FormControl, InputLabel, MenuItem, Paper, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Toolbar, Typography } from "@mui/material";

const Vpsstatistics = () => {
    const [processes, setProcesses] = useState([]);
    const [serverId, setServerId] = useState();
    const dispatch = useDispatch();
    const server = useSelector(state => state.server);

    useEffect(() => {
        try {
            const fetchData = async () => {
                dispatch(getServer());
            }
            fetchData()
        } catch (e) {
            console.log(e);
        }
    }, []);
    useEffect(() => {
        async function fetchdata() {
            let processes = await http.get(`${SCRIPT_URL}/vps/statistics/server/${serverId? serverId : server[0]?.serid}`)
            setProcesses(processes.data)
        }
        fetchdata()
    }, [serverId, server])
    return (<>
        <Toolbar disableGutters>
            <AiOutlineAreaChart style={{ width: "1.5rem", height: "1.5rem", }} />
            <Typography variant='h6' sx={{ ml: 1 }}>
                آمار VPS
            </Typography>
        </Toolbar>
        <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
            <FormControl sx={{ minWidth: 80, }}>
                <InputLabel id="serverId">انتخاب سرور</InputLabel>
                <Select
                    size="small"
                    name="serverId"
                    labelId="serverId"
                    id="serverId"
                    label="انتخاب سرور"
                    onChange={e => setServerId(e.target.value)}
                    value={serverId ? serverId : Number(server[0]?.serid)}
                    sx={{ minWidth: { xs: 330, sm: 330, md: 400 } }}
                >
                    {server.map((data) => (
                        <MenuItem value={data.serid}>
                            {data.serverName} ({data.ip})
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Box>

        <TableContainer sx={{ width: { md: "100%", xs: "88vw", sm: "100%" }, mt: 4 }} component={Paper}>
            <Table sx={{ minWidth: { xs: "1200px", md: 650, sm: 650 } }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>VPS ID</TableCell>
                        <TableCell>سرور</TableCell>
                        <TableCell>نام میزبان</TableCell>
                        <TableCell>پردازنده</TableCell>
                        <TableCell>رم</TableCell>
                        <TableCell>دیسک</TableCell>
                        <TableCell>پهنای باند</TableCell>

                    </TableRow>
                </TableHead>
                <TableBody>
                    {processes.map(data =>
                        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <TableCell>{data.vpsid}</TableCell>
                            <TableCell>{data.server}</TableCell>
                            <TableCell>{data.hostname}</TableCell>
                            <TableCell>{data.cpu}</TableCell>
                            <TableCell>{data.ram}</TableCell>
                            <TableCell>{data.disk}</TableCell>
                            <TableCell>{data.bandwidth}</TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </TableContainer>
    </>);
}

export default Vpsstatistics;