import { Box, FormControl, InputLabel, MenuItem, Paper, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { FaServer, FaTasks, FaUsers } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { getServer, getTask } from "../../Redux/Actions/actions";
import { getAllDashboardInfo, SCRIPT_URL } from "../../Services/contactService";
import Chart from '../../Components/Charts/Chart'

const Left = () => {
    const [dashboard, setDashboard] = useState([]);
    const [chartId, setChartId] = useState();
    const dispatch = useDispatch();
    const server = useSelector(state => state.server);
    const task = useSelector(state => state.task);
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
        try {
            const fetchData = async () => {
                const dashboard = await getAllDashboardInfo();
                setDashboard(dashboard.data)
                dispatch(getServer());
                dispatch(getTask());
                
            }
            fetchData()
        } catch (e) {
            console.log(e);
        }
    }, []);

    useEffect(() => {
        
        async function setChart() {
            let setin = []
            let setout = []
            await axios.get(`${SCRIPT_URL}/dashboard/bandwidthchart/${chartId? chartId : server[0]?.serid}`)
                .then(res => {
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
        setChart()
    }, [chartId, server])

    return (<Box sx={{ flexDirection: "column", display: "flex",width: { md: "100%", xs: "100%", sm: "100%", lg:"47%" } }}>
        <Box sx={{ display: "flex", flexWrap: "wrap", flexDirection: { md: "row", sm: "row", xs: "column" }, justifyContent: "space-between", }}>
            <Box className="shadow" sx={{
                width: { md: "47%", xs: "100%", sm: "100%" },
                height: "110px",
                display: "flex",
                alignItems: "center",
                flexDirection: "column"

            }}>
                <Box sx={{
                    borderBottom: "1px solid black",
                    width: "90%",
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: "28px",
                    paddingBottom: "8px"
                }}>
                    <FaUsers style={{ width: "20%", height: "30px", color: "rgb(44 , 48 , 52)" }} />
                    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", }}>
                        <Typography sx={{ fontWeight: "bold" }} >
                            کاربر ها
                        </Typography>
                        <Typography>{dashboard.userCount}</Typography>
                    </Box>
                </Box>
                <Box sx={{ width: "90%" }}>
                    <Typography sx={{ fontSize: "13px" }}>معلق 1/1</Typography>
                </Box>
            </Box>
            <Box className="shadow" sx={{
                width: { md: "47%", xs: "100%", sm: "100%" },
                height: "110px",
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                mt: { md: 0, sm: 3, xs: 3 }

            }}>
                <Box sx={{
                    borderBottom: "1px solid black",
                    width: "90%",
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: "28px",
                    paddingBottom: "8px"
                }}>
                    <FaServer style={{ width: "20%", height: "30px", color: "rgb(44 , 48 , 52)" }} />
                    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", }}>
                        <Typography sx={{ fontWeight: "bold" }} >
                            VPS
                        </Typography>
                        <Typography>{dashboard.vpsCount}</Typography>
                    </Box>
                </Box>
                <Box sx={{ width: "90%" }}>
                    <Typography sx={{ fontSize: "13px" }}>معلق 1/1</Typography>
                </Box>
            </Box>
        </Box>
        <Box sx={{
            display: "flex",
            flexDirection: "column",
            width: { md: "100%", xs: "100%", sm: "100%" },
            mt: 3,
        }}>
            <Box sx={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
                <Typography sx={{ fontSize: "18px", color: "GrayText" }}>
                    پهنای باند
                </Typography>
                <FormControl sx={{ minWidth: "100%", mt: 1 }}>
                    <InputLabel id="chartId">برای نمایش سرور مورد نظر را انتخاب کنید</InputLabel>
                    <Select
                        size="small"
                        name="chartId"
                        labelId="chartId"
                        label="برای نمایش سرور مورد نظر را انتخاب کنید"
                        sx={{ width: { md: "100%", xs: "100%", sm: "100%" }, }}
                        value={chartId ? chartId : Number(server[0]?.serid)}
                        onChange={e => setChartId(e.target.value)}
                    >
                        {server.map((data) => (
                            <MenuItem value={data.serid}>
                                {data.serverName} ({data.ip})
                            </MenuItem>
                        ))}

                    </Select>
                </FormControl>
                <Box sx={{ width: { md: "100%", xs: "100%", sm: "100%" }, mt: 2 }}>
                    <Chart data={data} />
                </Box>
            </Box>
            
           
        </Box>
        <Box sx={{
                display: "flex",
                flexDirection: "column",
                width: { md: "100%", xs: "100%", sm: "100%" },
                mt: 3,
                height: 300,
            }}>
                <Box sx={{
                    width: "100%",
                    height: 30,
                    backgroundColor: "rgb(44 , 48 , 52)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: 1,
                    boxSizing: "border-box",
                    borderRadius: "4px",


                }}>
                    <Typography sx={{ color: "white" }}>
                        وضعیت سرور
                    </Typography>
                    <FaServer style={{ color: "white" }} />
                </Box>
                <TableContainer sx={{ width: { md: "100%", xs: "100%", sm: "100%" }, }} component={Paper}>
                    <Table size="small" aria-label="simple table">
                        <TableHead>
                            <TableRow>

                                <TableCell sx={{ fontWeight: "bold" }}>سرور</TableCell>
                                <TableCell sx={{ fontWeight: "bold" }}>VPS</TableCell>
                                <TableCell sx={{ fontWeight: "bold" }}>نسخه</TableCell>
                                <TableCell sx={{ fontWeight: "bold" }}>مجوز</TableCell>

                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {server.map(data =>
                                <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                    <TableCell>{data.serverName}</TableCell>
                                    <TableCell>{data.vpscount}</TableCell>
                                    <TableCell>Null</TableCell>
                                    <TableCell>Null</TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        <Box sx={{
                display: "flex",
                flexDirection: "column",
                width: { md: "100%", xs: "100%", sm: "100%" },
                mt: 3,
                paddingBottom:4,
                height: 300,
            }}>
                <Box sx={{
                    width: "100%",
                    height: 30,
                    backgroundColor: "rgb(44 , 48 , 52)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: 1,
                    boxSizing: "border-box",
                    borderRadius: "4px",


                }}>
                    <Typography sx={{ color: "white" }}>
                        وظایف اخیر
                    </Typography>
                    <FaTasks style={{ color: "white" }} />
                </Box>
                <TableContainer sx={{ width: { md: "100%", xs: "100%", sm: "100%" }, }} component={Paper}>
                    <Table size="small" aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell sx={{ fontWeight: "bold" }}>کاربر</TableCell>
                                <TableCell sx={{ fontWeight: "bold" }}>فعالیت</TableCell>
                                <TableCell sx={{ fontWeight: "bold" }}>Logs</TableCell>                               
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {task.map(data =>
                                <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                    <TableCell>{data.username}</TableCell>
                                    <TableCell>{data.action}</TableCell>
                                    <TableCell>Null</TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
         

    </Box>);
}

export default Left;