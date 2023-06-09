import { CircularProgress, FormControl, InputLabel, MenuItem, Select, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getServer } from '../../Redux/Actions/actions'
import { BsCpu } from "react-icons/bs"
import { SCRIPT_URL } from "../../Services/contactService";
import http from "../../Services/httpService";
const Cpu = () => {
    const dispatch = useDispatch();
    const server = useSelector(state => state.server);
    const [serverId, setServerId] = useState();
    const [cpu, setCpu] = useState([]);
    useEffect(() => {
        async function fetchdata() {
            let cpu = await http.get(`${SCRIPT_URL}/system/serverinfo/${serverId ? serverId : server[0]?.serid}`)
            setCpu(cpu.data)
        }
        fetchdata()
    }, [serverId, server])
    function CircularProgressWithLabel(props) {
        return (
            <Box sx={{ position: 'relative', display: 'inline-flex' }}>
                <CircularProgress size="20vh" variant="determinate" {...props} />
                <Box
                    sx={{
                        top: 0,
                        left: 0,
                        bottom: 0,
                        right: 0,
                        position: 'absolute',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <Typography sx={{ fontSize: "20px" }} variant="caption" component="div" color="text.secondary">
                        {`${props.value}%`}
                    </Typography>
                </Box>
            </Box>
        );
    }
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
    return (<>
        <Toolbar disableGutters>
            <BsCpu style={{ width: "1.5rem", height: "1.5rem", }} />
            <Typography variant='h6' sx={{ ml: 1 }}>
                CPU
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
                    value={serverId ? serverId : Number(server[0]?.serid)}
                    onChange={e => setServerId(e.target.value)}
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
        <Box sx={{ width: "100%", display: "flex", flexWrap: "wrap", mt: 5, justifyContent: "space-between" }}>
            <Box sx={{ width: { md: "100%", sm: "100%", xs: "100%", lg: "45%" } }}>
                <Box sx={{
                    width: "100%",
                    height: 30,
                    backgroundColor: "rgb(44 , 48 , 52)",
                    display: "flex",
                    alignItems: "center",
                    padding: 1,
                    boxSizing: "border-box",

                }}>
                    <Typography sx={{ color: "white", fontWight: "bold" }}>
                        میزان استفاده از CPU
                    </Typography>
                </Box>
                <Box sx={{ mt: 4, width: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <CircularProgressWithLabel value={cpu.cpuUtilization} />
                </Box>
            </Box>



            <Box sx={{ width: { md: "100%", sm: "100%", xs: "100%", lg: "45%" } }}>
                <Box sx={{
                    width: "100%",
                    height: 30,
                    backgroundColor: "rgb(44 , 48 , 52)",
                    display: "flex",
                    alignItems: "center",
                    padding: 1,
                    boxSizing: "border-box",

                }}>
                    <Typography sx={{ color: "white", fontWight: "bold" }}>
                        مشخصات CPU
                    </Typography>
                </Box>
                <Box sx={{ width: "100%", border: "1px solid black", display: "flex", alignItems: "center" }}>
                    <Box sx={{ padding: 2, backgroundColor: "rgb(238,238,240)", width: 200 }}>
                        <Typography>
                            مشخصات پردازنده :
                        </Typography>
                    </Box>
                    <Typography sx={{ ml: 2 }}>
                        {cpu.cpuInformation}
                    </Typography>

                </Box>
                <Box sx={{ width: "100%", border: "1px solid black", display: "flex", alignItems: "center" }}>
                    <Box sx={{ padding: 2, backgroundColor: "rgb(238,238,240)", width: 200 }}>
                        <Typography>
                            در حال استفاده :
                        </Typography>
                    </Box>
                    <Typography sx={{ ml: 2 }}>
                        {cpu.cpuUtilization}%
                    </Typography>

                </Box>
                <Box sx={{ width: "100%", border: "1px solid black", display: "flex", alignItems: "center" }}>
                    <Box sx={{ padding: 2, backgroundColor: "rgb(238,238,240)", width: 200 }}>
                        <Typography>
                            پشتیبانی شده توسط :
                        </Typography>
                    </Box>
                    <Typography sx={{ ml: 2 }}>
                        {cpu.cpuInformation}
                    </Typography>

                </Box>
            </Box>
        </Box>
    </>);
}

export default Cpu;