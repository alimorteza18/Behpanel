import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { GiServerRack } from "react-icons/gi"
import { getAllDashboardInfo } from "../../Services/contactService";
import { FaMemory, FaServer, FaUsers } from "react-icons/fa"
import { FiHardDrive } from "react-icons/fi"
const Right = () => {
    const [dashboard, setDashboard] = useState([]);
    useEffect(() => {
        try {
            const fetchData = async () => {
                const dashboard = await getAllDashboardInfo();
                setDashboard(dashboard.data)
            }
            fetchData()
        } catch (e) {
            console.log(e);
        }
    }, []);
    return (<Box sx={{ flexDirection: "column", display: "flex", width: { md: "100%", xs: "100%", sm: "100%", lg:"47%" } }}>
        <Box sx={{ display: "flex", flexWrap: "wrap", flexDirection: { md: "row", sm: "row", xs: "column" }, justifyContent: "space-between",  }}>
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
                    <GiServerRack style={{ width: "20%", height: "30px", color: "rgb(44 , 48 , 52)" }} />
                    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", }}>
                        <Typography sx={{ fontWeight: "bold" }} >
                            IPv6 آزاد
                        </Typography>
                        <Typography>{dashboard.freeIPV6Count}</Typography>
                    </Box>
                </Box>
                <Box sx={{ width: "90%" }}>
                    <Typography sx={{ fontSize: "13px" }}>IPv6 استفاده شده 0/0</Typography>
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
                    <GiServerRack style={{ width: "20%", height: "30px", color: "rgb(44 , 48 , 52)" }} />
                    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", }}>
                        <Typography sx={{ fontWeight: "bold" }} >
                            IPv4 آزاد
                        </Typography>
                        <Typography>{dashboard.freeIPV4Count}</Typography>
                    </Box>
                </Box>
                <Box sx={{ width: "90%" }}>
                    <Typography sx={{ fontSize: "13px" }}>IPv4 استفاده شده 0/0</Typography>
                </Box>
            </Box>
            <Box className="shadow" sx={{
                width: { md: "47%", xs: "100%", sm: "100%" },
                height: "110px",
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                mt: 3
            }}>
                <Box sx={{
                    borderBottom: "1px solid black",
                    width: "90%",
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: "28px",
                    paddingBottom: "8px"
                }}>
                    <FiHardDrive style={{ width: "20%", height: "30px", color: "rgb(44 , 48 , 52)" }} />
                    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", }}>
                        <Typography sx={{ fontWeight: "bold" }} >
                            ذخیره سازی
                        </Typography>
                        <Typography>{dashboard.clusterStorageUsage}%</Typography>
                    </Box>
                </Box>
                <Box sx={{ width: "90%" }}>
                    <Typography sx={{ fontSize: "13px" }}>{dashboard.clusterStorageUsed}/{dashboard.clusterStorageTotal} گیگابایت در حال استفاده</Typography>
                </Box>
            </Box>
            <Box className="shadow" sx={{
                width: { md: "47%", xs: "100%", sm: "100%" },
                height: "110px",
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                mt: 3
            }}>
                <Box sx={{
                    borderBottom: "1px solid black",
                    width: "90%",
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: "28px",
                    paddingBottom: "8px"
                }}>
                    <FaMemory style={{ width: "20%", height: "30px", color: "rgb(44 , 48 , 52)" }} />
                    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", }}>
                        <Typography sx={{ fontWeight: "bold" }} >
                            RAM
                        </Typography>
                        <Typography>{dashboard.clusterRamUsage}%</Typography>
                    </Box>
                </Box>
                <Box sx={{ width: "90%" }}>
                    <Typography sx={{ fontSize: "13px" }}>{dashboard.clusterRamTotal} / {dashboard.clusterRamUsed} مگابایت در حال استفاده</Typography>
                </Box>
            </Box>
        </Box>
        <Box sx={{
            display: "flex",
            flexDirection: "column",
            width: { md: "100%", xs: "100%", sm: "100%" },
            height:251,
            mt: 3,
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
                borderRadius: "4px"

            }}>
                <Typography sx={{ color: "white" }}>
                    اطلاعات VPS
                </Typography>
                <FaServer style={{ color: "white" }} />
            </Box>
            <Box sx={{
                width: "100%",
                borderBottom: "1px solid black",
                height: 30,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: 1,
                boxSizing: "border-box",

            }}>
                <Typography>
                    1
                </Typography>
                <Typography>
                    OpenVZ Virtual Machines
                </Typography>
            </Box>
        </Box>

        <Box sx={{
            display: "flex",
            flexDirection: "column",
            width: { md: "100%", xs: "100%", sm: "100%" },
            mt: 3,
            height:300,
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
                borderRadius: "4px"

            }}>
                <Typography sx={{ color: "white" }}>
                ورودهای اخیر
                </Typography>
                <FaUsers style={{ color: "white" }} />
            </Box>
            <Box sx={{
                width: "100%",
                borderBottom: "1px solid black",
                height: 30,
                display: "flex",
                alignItems: "center",
                padding: 1,
                boxSizing: "border-box",

            }}>
                <Typography>
                {dashboard.recentArrival}
                </Typography>
            </Box>
        </Box>

    </Box>);
}

export default Right;