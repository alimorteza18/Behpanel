import { Box, CircularProgress, FormControl, InputLabel, MenuItem, Paper, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getServer } from "../../Redux/Actions/actions";
import { SCRIPT_URL } from "../../Services/contactService";
import http from "../../Services/httpService";
const Bottom = () => {
    const [id, setId] = useState();
    const dispatch = useDispatch();
    const [progress, setProgress] = useState([]);
    const server = useSelector(state => state.server);
    useEffect(() => {
        async function fetchdata() {
            let progress = await http.get(`${SCRIPT_URL}/system/serverinfo/${id? id : server[0]?.serid}`)
            setProgress(progress.data)
        }
        fetchdata()
    }, [id, server])
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

    function CircularProgressWithLabel(props) {
        return (
            <Box sx={{ position: 'relative', display: 'inline-flex' }}>
                <CircularProgress size='20vh' variant="determinate" {...props} />
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
                        flexDirection: "column"
                    }}
                >
                    <Typography variant="caption" component="div" color="text.secondary">
                        {`${props.value}%`}
                    </Typography>
                    <Typography variant="caption" component="div" color="text.secondary">
                        در حال استفاده
                    </Typography>
                </Box>
            </Box>
        );
    }

    return (
        <Box sx={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Box sx={{
                width: "100%",
                height: 30,
                backgroundColor: "rgb(44 , 48 , 52)",
                display: "flex",
                alignItems: "center",
                padding: 1,
                boxSizing: "border-box",
                borderRadius: "4px",


            }}>
                <Typography sx={{ color: "white" }}>
                    آمار سرور
                </Typography>
            </Box>
            <Box sx={{ mt: 3 }}>
                <FormControl sx={{ minWidth: 80, mt: 1 }}>
                    <InputLabel id="id">برای نمایش سرور مورد نظر را انتخاب کنید</InputLabel>
                    <Select
                        size="small"
                        name="id"
                        labelId="id"
                        label="برای نمایش سرور مورد نظر را انتخاب کنید"
                        sx={{ width: { md: 570, xs: 365, sm: 550 } }}
                        value={id ? id : Number(server[0]?.serid)}
                        onChange={e => setId(e.target.value)}
                    >

                        {server.map((data) => (
                            <MenuItem value={data.serid}>
                                {data.serverName} ({data.ip})
                            </MenuItem>
                        ))}


                    </Select>
                </FormControl>
            </Box>
            <Box sx={{
                width: "100%",
                display: "flex",
                flexWrap: "wrap",
                flexDirection: { md: "row", sm: "row", xs: "column" },
                border: "1px solid grey",
                mt: 3,
                alignItems: "center",
                justifyContent: "space-evenly",
                paddingBottom: 5

            }}>
                <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <Typography sx={{ mt: 2, fontWeight: "bold" }}>
                        پهنای باند
                    </Typography>
                    <CircularProgressWithLabel value={progress.bandwidthUtilization} sx={{ mt: 2 }} />
                    <Typography sx={{ mt: 2, fontWeight: "bold" }}>
                        {progress.totalBandWidth} / {progress.bandwidthUtilised} GB
                    </Typography>
                </Box>
                <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <Typography sx={{ mt: 2, fontWeight: "bold" }}>
                        حافظه
                    </Typography>
                    <CircularProgressWithLabel value={progress.diskUtilization} sx={{ mt: 2 }} />
                    <Typography sx={{ mt: 2, fontWeight: "bold" }}>
                        {progress.totalDisk} / {progress.diskUtilised} GB
                    </Typography>
                </Box>
                <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <Typography sx={{ mt: 2, fontWeight: "bold" }}>
                        رم
                    </Typography>
                    <CircularProgressWithLabel value={progress.ramUtilization} sx={{ mt: 2 }} />
                    <Typography sx={{ mt: 2, fontWeight: "bold" }}>
                        {progress.totalRam} /{progress.ramUtilised} MB
                    </Typography>
                </Box>
                <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <Typography sx={{ mt: 2, fontWeight: "bold" }}>
                        پردازنده
                    </Typography>
                    <CircularProgressWithLabel value={progress.cpuUtilization} sx={{ mt: 2 }} />
                    <Typography sx={{ mt: 2, fontWeight: "bold" }}>
                        {progress.cpuUtilization}%
                    </Typography>
                </Box>
            </Box>
            <Box sx={{
                width: "100%",
                display: "flex",
                flexWrap: "wrap",
                flexDirection: { md: "row", sm: "row", xs: "column" },
                border: "1px solid grey",
                alignItems: "center",
                justifyContent: "space-evenly",

            }}>
                <TableContainer component={Paper}>
                    <Table size="small" aria-label="simple table">
                        <TableHead>
                            <TableRow>

                                <TableCell sx={{ fontWeight: "bold" }}>زمان کارکرد</TableCell>
                                <TableCell sx={{ fontWeight: "bold" }}>سیستم عامل</TableCell>
                                <TableCell sx={{ fontWeight: "bold" }}>مدل پردازنده </TableCell>
                                <TableCell sx={{ fontWeight: "bold" }}>هسته</TableCell>

                            </TableRow>
                        </TableHead>
                        <TableBody>
                          
                                <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                    <TableCell>{progress.operatingTime}</TableCell>
                                    <TableCell>{progress.osName}</TableCell>
                                    <TableCell>{progress.cpuInformation}</TableCell>
                                    <TableCell>{progress.cpuCore}</TableCell>
                                </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </Box>
    );
}

export default Bottom;