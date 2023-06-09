import { CircularProgress, FormControl, InputLabel, MenuItem, Select, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getServer } from '../../Redux/Actions/actions'
import { BsSpeedometer2 } from "react-icons/bs"
import { SCRIPT_URL } from "../../Services/contactService";
import Bandwidthchart from '../../Components/Charts/Bandwidthchart'
import http from "../../Services/httpService";
import axios from "axios";
const Bandwidth = () => {
    const dispatch = useDispatch();
    const server = useSelector(state => state.server);
    const [serverId, setServerId] = useState();
    const [bandwidth, setBandwidth] = useState([]);
    const [data, setData] = useState({
        labels: ['0', '5', '10', '15', '20', '25', '30'],

        datasets: [
            {
                label: 'Out',
                data: [],
                borderColor: 'rgb(44 , 48 , 52)',
                backgroundColor: 'rgb(44 , 48 , 52)',
            },
            {
                label: 'In',
                data: [],
                borderColor: 'crimson',
                backgroundColor: 'crimson',
            },
        ],
    });
    useEffect(() => {
        let setin = []
        let setout = []
        async function fetchdata() {
            let bandwidth = await http.get(`${SCRIPT_URL}/system/serverinfo/${serverId ? serverId : server[0]?.serid}`)
            setBandwidth(bandwidth.data);
            await axios.get(`${SCRIPT_URL}/dashboard/bandwidthchart/${serverId ? serverId : server[0]?.serid}`)
                .then(res => {
                    console.log(res);
                    for (const dataObj of res.data) {
                        setin.push(parseInt(dataObj.in));
                        setout.push(parseInt(dataObj.out));
                    }
                    setData({
                        labels: ['0', '5', '10', '15', '20', '25', '30'],

                        datasets: [
                            {
                                label: 'Out',
                                data: setout,
                                borderColor: 'rgb(44 , 48 , 52)',
                                backgroundColor: 'rgb(44 , 48 , 52)',
                            },
                            {
                                label: 'In',
                                data: setin,
                                borderColor: 'crimson',
                                backgroundColor: 'crimson',
                            },
                        ],

                    })
                })
        }
        fetchdata()
    }, [serverId])
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
                        {`${Math.round(props.value)}%`}
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
            <BsSpeedometer2 style={{ width: "1.5rem", height: "1.5rem", }} />
            <Typography variant='h6' sx={{ ml: 1 }}>
                Bandwidth
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
                    sx={{ minWidth: { xs: 330, sm: 330, md: 400 } }}
                    value={serverId ? serverId : Number(server[0]?.serid)}
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
                        میزان استفاده از پهنای باند
                    </Typography>
                </Box>
                <Box sx={{ mt: 4, width: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <CircularProgressWithLabel value={bandwidth.bandwidthUtilization} />
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
                        مشخصات پهنای باند
                    </Typography>
                </Box>
                <Box sx={{ width: "100%", border: "1px solid black", display: "flex", alignItems: "center" }}>
                    <Box sx={{ padding: 2, backgroundColor: "rgb(238,238,240)", width: 200 }}>
                        <Typography>
                            پهنای باند کل :
                        </Typography>
                    </Box>
                    <Typography sx={{ ml: 2 }}>
                        {bandwidth.totalBandWidth} گیگابایت
                    </Typography>

                </Box>
                <Box sx={{ width: "100%", border: "1px solid black", display: "flex", alignItems: "center" }}>
                    <Box sx={{ padding: 2, backgroundColor: "rgb(238,238,240)", width: 200 }}>
                        <Typography>
                            پهنای باند در :
                        </Typography>
                    </Box>
                    <Typography sx={{ ml: 2 }}>
                        {bandwidth.bandwidthIn} گیگابایت
                    </Typography>

                </Box>
                <Box sx={{ width: "100%", border: "1px solid black", display: "flex", alignItems: "center" }}>
                    <Box sx={{ padding: 2, backgroundColor: "rgb(238,238,240)", width: 200 }}>
                        <Typography>
                            پهنای باند خارج :
                        </Typography>
                    </Box>
                    <Typography sx={{ ml: 2 }}>
                        {bandwidth.bandwidthOut} گیگابایت
                    </Typography>

                </Box>
                <Box sx={{ width: "100%", border: "1px solid black", display: "flex", alignItems: "center" }}>
                    <Box sx={{ padding: 2, backgroundColor: "rgb(238,238,240)", width: 200 }}>
                        <Typography>
                            در حال استفاده :
                        </Typography>
                    </Box>
                    <Typography sx={{ ml: 2 }}>
                        {bandwidth.bandwidthUtilised} گیگابایت
                    </Typography>

                </Box>
                <Box sx={{ width: "100%", border: "1px solid black", display: "flex", alignItems: "center" }}>
                    <Box sx={{ padding: 2, backgroundColor: "rgb(238,238,240)", width: 200 }}>
                        <Typography>
                            استفاده :
                        </Typography>
                    </Box>
                    <Typography sx={{ ml: 2 }}>
                        {bandwidth.bandwidthUtilization}%
                    </Typography>

                </Box>
            </Box>
        </Box>
        <Box sx={{ width: "100%", display: "flex", justifyContent: "center", mt: 3 }}>
            <Box sx={{ width: { md: 700, sm: 500, xs: "100%" } }}>
                <Bandwidthchart id={serverId} data={data} />
            </Box>
        </Box>
    </>);
}

export default Bandwidth;