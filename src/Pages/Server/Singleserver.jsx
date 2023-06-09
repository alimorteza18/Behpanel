import { Box, CircularProgress, Toolbar, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { BsServer } from "react-icons/bs";
import { useParams } from "react-router";
import { SCRIPT_URL, SERVER_URL } from "../../Services/contactService";
import http from "../../Services/httpService";

const Singleserver = () => {
    const { id } = useParams();
    const [res, setres] = useState([]);
    const [res1, setres1] = useState([]);
    useEffect(() => {
        try {
            async function fetchdata() {
                let res = await http.get(`${SERVER_URL}/server/${id}`)
                let res1 = await http.get(`${SCRIPT_URL}/system/serverinfo/${id}`)
                setres(res.data)
                setres1(res1.data)
            }
            fetchdata()
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
    return (<>
        <Toolbar disableGutters>
            <BsServer style={{ width: "1.5rem", height: "1.5rem", }} />
            <Typography variant='h6' sx={{ ml: 1 }}>
                مدیریت سرور
            </Typography>
        </Toolbar>
        <Box sx={{
            width: "100%",
            height: 37,
            backgroundColor: "rgb(44 , 48 , 52)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 2,
            boxSizing: "border-box",
            borderRadius: "4px",
            mt: 8


        }}>
            <Typography sx={{ color: "white" }}>
                آمار سرور
            </Typography>
        </Box>
        <Box sx={{ display: "flex", flexWrap: "wrap", flexDirection: { md: "row", sm: "row", xs: "column", width: "100%", justifyContent: "space-between" } }}>
            <Box sx={{ width: { md: "45%", sm: "45%", xs: "100%", } }}>
                <Box sx={{ width: "100%", border: "1px solid black", display: "flex", alignItems: "center", mt: 5 }}>
                    <Box sx={{ padding: 2, backgroundColor: "rgb(238,238,240)", width: 200, }}>
                        <Typography>
                            نام سرور:
                        </Typography>
                    </Box>
                    <Typography sx={{ ml: 2 }}>
                        {res.serverName}
                    </Typography>

                </Box>
                <Box sx={{ width: "100%", border: "1px solid black", display: "flex", alignItems: "center" }}>
                    <Box sx={{ padding: 2, backgroundColor: "rgb(238,238,240)", width: 200 }}>
                        <Typography>
                            آدرس IP:
                        </Typography>
                    </Box>
                    <Typography sx={{ ml: 2 }}>
                        {res.ip}
                    </Typography>

                </Box>
                <Box sx={{ width: "100%", border: "1px solid black", display: "flex", alignItems: "center" }}>
                    <Box sx={{ padding: 2, backgroundColor: "rgb(238,238,240)", width: 200 }}>
                        <Typography>
                            تعداد VPS:
                        </Typography>
                    </Box>
                    <Typography sx={{ ml: 2 }}>
                        {res.vpscount}
                    </Typography>

                </Box>
                <Box sx={{ width: "100%", border: "1px solid black", display: "flex", alignItems: "center" }}>
                    <Box sx={{ padding: 2, backgroundColor: "rgb(238,238,240)", width: 200 }}>
                        <Typography>
                            پردازنده اختصاص داده شده:
                        </Typography>
                    </Box>
                    <Typography sx={{ ml: 2 }}>
                        {res.allocatedCpu}
                    </Typography>

                </Box>
                <Box sx={{ width: "100%", border: "1px solid black", display: "flex", alignItems: "center" }}>
                    <Box sx={{ padding: 2, backgroundColor: "rgb(238,238,240)", width: 200 }}>
                        <Typography>
                            فضای اختصاص داده شده:
                        </Typography>
                    </Box>
                    <Typography sx={{ ml: 2 }}>
                        {res.allocatedSpace}
                    </Typography>

                </Box>
            </Box>



            <Box sx={{ width: { md: "45%", sm: "45%", xs: "100%", } }}>
                <Box sx={{ width: "100%", border: "1px solid black", display: "flex", alignItems: "center", mt: 5 }}>
                    <Box sx={{ padding: 2, backgroundColor: "rgb(238,238,240)", width: 200, }}>
                        <Typography>
                            سیستم عامل نصب شده:
                        </Typography>
                    </Box>
                    <Typography sx={{ ml: 2 }}>
                        {res.osName}
                    </Typography>

                </Box>
                <Box sx={{ width: "100%", border: "1px solid black", display: "flex", alignItems: "center" }}>
                    <Box sx={{ padding: 2, backgroundColor: "rgb(238,238,240)", width: 200 }}>
                        <Typography>
                            رم اختصاص داده شده:
                        </Typography>
                    </Box>
                    <Typography sx={{ ml: 2 }}>
                        {res.allocatedRam} مگابایت
                    </Typography>

                </Box>
                <Box sx={{ width: "100%", border: "1px solid black", display: "flex", alignItems: "center" }}>
                    <Box sx={{ padding: 2, backgroundColor: "rgb(238,238,240)", width: 200 }}>
                        <Typography>
                            وضعیت:
                        </Typography>
                    </Box>
                    <Typography sx={{ ml: 2 }}>
                        {res.status}
                    </Typography>

                </Box>
                <Box sx={{ width: "100%", border: "1px solid black", display: "flex", alignItems: "center" }}>
                    <Box sx={{ padding: 2, backgroundColor: "rgb(238,238,240)", width: 200 }}>
                        <Typography>
                            پهنای باند اختصاص داده شده:
                        </Typography>
                    </Box>
                    <Typography sx={{ ml: 2 }}>
                        {res.allocatedBandwidt}
                    </Typography>

                </Box>
                <Box sx={{ width: "100%", border: "1px solid black", display: "flex", alignItems: "center" }}>
                    <Box sx={{ padding: 2, backgroundColor: "rgb(238,238,240)", width: 200 }}>
                        <Typography>
                            حافظه اختصاص داده شده:
                        </Typography>
                    </Box>
                    <Typography sx={{ ml: 2 }}>
                        {res.allocatedSpace}
                    </Typography>

                </Box>
            </Box>
        </Box>
        <Box sx={{
            width: "100%",
            height: 37,
            backgroundColor: "rgb(44 , 48 , 52)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 2,
            boxSizing: "border-box",
            borderRadius: "4px",
            mt: 8


        }}>
            <Typography sx={{ color: "white" }}>
                منبع سرور
            </Typography>
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
                <CircularProgressWithLabel value={res1.bandwidthUtilization} sx={{ mt: 2 }} />
                <Typography sx={{ mt: 2, fontWeight: "bold" }}>
                    {res1.totalBandWidth} / {res1.bandwidthUtilised} GB
                </Typography>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <Typography sx={{ mt: 2, fontWeight: "bold" }}>
                    حافظه
                </Typography>
                <CircularProgressWithLabel value={res1.diskUtilization} sx={{ mt: 2 }} />
                <Typography sx={{ mt: 2, fontWeight: "bold" }}>
                    {res1.totalDisk} / {res1.diskUtilised} GB
                </Typography>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <Typography sx={{ mt: 2, fontWeight: "bold" }}>
                    رم
                </Typography>
                <CircularProgressWithLabel value={res1.ramUtilization} sx={{ mt: 2 }} />
                <Typography sx={{ mt: 2, fontWeight: "bold" }}>
                    {res1.totalRam} /{res1.ramUtilised} MB
                </Typography>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <Typography sx={{ mt: 2, fontWeight: "bold" }}>
                    پردازنده
                </Typography>
                <CircularProgressWithLabel value={res1.cpuUtilization} sx={{ mt: 2 }} />
                <Typography sx={{ mt: 2, fontWeight: "bold" }}>
                    {res1.cpuUtilization}%
                </Typography>
            </Box>
        </Box>
    </>);
}

export default Singleserver;