import { Box, Button, FormControl, TextField, Toolbar, Typography } from "@mui/material";
import { useState } from "react";
import { GiServerRack } from "react-icons/gi";
import Swal from "sweetalert2";
import { createIppool } from "../../Services/contactService";
var ipfr = require('ip-from-range');

const Createippool = () => {
    const [ns1, setNs1] = useState("192.168.1.1");
    const [ns2, setNs2] = useState("192.168.1.10");
    const [name, setName] = useState("");
    const [bridge, setBridge] = useState("")
    const [netMask, setNetMask] = useState("");
    const [gateway, setGateway] = useState("");
    const [internal, setInternal] = useState(false);
    const [vlan, setVlan] = useState(false);
    const [routing, setRouting] = useState(false);
    const [nat, setNat] = useState(false);
    var ips = ipfr(ns1, ns2).getIpAddresses();

    const sInternal = e => {
        setInternal(e.target.value);
        setInternal(!internal);
    }
    const sVlan = e => {
        setVlan(e.target.value);
        setVlan(!vlan);
    }
    const sNat = e => {
        setNat(e.target.value);
        setNat(!nat);
    }
    const sRouting = e => {
        setRouting(e.target.value);
        setRouting(!routing);
    }

    const handleSubmit = async event => {
        event.preventDefault();
        const items = { name, netMask, ns1, ns2, gateway, ips, internal, vlan, routing, nat, bridge, };
        try {
            const { status } = await createIppool(JSON.stringify(items));
            if (status === 200) {
                Swal.fire({
                    icon: 'success',
                    title: 'موفقیت آمیز بود',
                    text: 'در خواست شما با موفقیت انجام شد !',
                    type: 'success',
                    confirmButtonText: 'متوجه شدم'
                })
            }

        } catch (err) {
            Swal.fire({
                icon: 'error',
                title: 'خطا !',
                text: 'مشکلی پیش آمده لطفا دوباره تلاش کنید !',
                type: 'error',
                confirmButtonText: 'متوجه شدم',
            })
            console.log(err)
        }

    }
    return (<>
        <Toolbar disableGutters>
            <GiServerRack style={{ width: "1.5rem", height: "1.5rem", }} />
            <Typography variant='h6' sx={{ ml: 1 }}>
            ایجاد استخر IP 
            </Typography>
        </Toolbar>
        <Box component="form" onSubmit={handleSubmit} >
            <Box sx={{
                width: { md: "65%", sm: "80%", xs: "100%", },
                flexDirection: { xs: "column", sm: "row", md: "row" },
                display: "flex",
                justifyContent: "space-between",
                alignItems: { xs: "flex-start", sm: "center", md: "center" },
                mt: 3,
            }}>
                <p>نام</p>
                <FormControl sx={{ minWidth:{md:"50%", sm:"80%", xs:"100%"} }}>
                    <TextField
                        size="small"
                        id="name" variant="outlined"
                        sx={{ Width: "100%" }}
                        type="text"
                        name="name"
                        value={name}
                        label="نام"
                        onChange={e => setName(e.target.value)}
                    />
                </FormControl>
            </Box>
            <Box sx={{
                width: { md: "65%", sm: "80%", xs: "100%", },
                flexDirection: { xs: "column", sm: "row", md: "row" },
                display: "flex",
                justifyContent: "space-between",
                alignItems: { xs: "flex-start", sm: "center", md: "center" },
                mt: 3,
            }}>
                <p>رنج اول</p>
                <FormControl sx={{ minWidth:{md:"50%", sm:"80%", xs:"100%"} }}>
                    <TextField
                        size="small"
                        id="ns1" variant="outlined"
                        sx={{ Width: "100%" }}
                        type="text"
                        name="ns1"
                        value={ns1}
                        onChange={e => setNs1(e.target.value)}
                    />
                </FormControl>
            </Box>
            <Box sx={{
                width: { md: "65%", sm: "80%", xs: "100%", },
                flexDirection: { xs: "column", sm: "row", md: "row" },
                display: "flex",
                justifyContent: "space-between",
                alignItems: { xs: "flex-start", sm: "center", md: "center" },
                mt: 3,
            }}>
                <p>رنج آخر</p>
                <FormControl sx={{ minWidth:{md:"50%", sm:"80%", xs:"100%"} }}>
                    <TextField
                        size="small"
                        id="ns2" variant="outlined"
                        sx={{ Width: "100%" }}
                        type="text"
                        name="ns2"
                        value={ns2}
                        onChange={e => setNs2(e.target.value)}
                    />
                </FormControl>
            </Box>
            <Box sx={{
                width: { md: "65%", sm: "80%", xs: "100%", },
                flexDirection: { xs: "column", sm: "row", md: "row" },
                display: "flex",
                justifyContent: "space-between",
                alignItems: { xs: "flex-start", sm: "center", md: "center" },
                mt: 3,
            }}>
                <p>Net Mask</p>
                <FormControl sx={{ minWidth:{md:"50%", sm:"80%", xs:"100%"} }}>
                    <TextField
                        size="small"
                        id="netMask" variant="outlined"
                        sx={{ Width: "100%" }}
                        type="text"
                        name="netMask"
                        value={netMask}
                        label="Net Mask"
                        onChange={e => setNetMask(e.target.value)}
                    />
                </FormControl>
            </Box>
            <Box sx={{
                width: { md: "65%", sm: "80%", xs: "100%", },
                flexDirection: { xs: "column", sm: "row", md: "row" },
                display: "flex",
                justifyContent: "space-between",
                alignItems: { xs: "flex-start", sm: "center", md: "center" },
                mt: 3,
            }}>
                <p>Gateway</p>
                <FormControl sx={{ minWidth:{md:"50%", sm:"80%", xs:"100%"} }}>
                    <TextField
                        size="small"
                        id="gateway" variant="outlined"
                        sx={{ Width: "100%" }}
                        type="text"
                        name="gateway"
                        value={gateway}
                        label="Gateway"
                        onChange={e => setGateway(e.target.value)}
                    />
                </FormControl>
            </Box>
            
            <Box sx={{
                width: { md: "65%", sm: "80%", xs: "100%", },
                flexDirection: { xs: "column", sm: "row", md: "row" },
                display: "flex",
                justifyContent: "space-between",
                alignItems: { xs: "flex-start", sm: "center", md: "center" },
                mt: 3,
            }}>
                <p>آیا محدوده آی پی داخلی است؟ </p>
                <input type="checkbox" style={{ width: "1rem", height: "1rem", cursor: "pointer" }} name="internal"
                    value={internal}
                    onChange={sInternal}
                    disabled={vlan || nat || routing ? "true" : ""} />
            </Box>
            <Box sx={{
                width: { md: "65%", sm: "80%", xs: "100%", },
                flexDirection: { xs: "column", sm: "row", md: "row" },
                display: "flex",
                justifyContent: "space-between",
                alignItems: { xs: "flex-start", sm: "center", md: "center" },
                mt: 3,
                display: internal ? "flex" : "none"
            }}>
                <p>پل IP داخلی</p>
                <FormControl sx={{ minWidth:{md:"50%", sm:"80%", xs:"100%"} }}>
                    <TextField
                        size="small"
                        id="bridge" variant="outlined"
                        sx={{ Width: "100%" }}
                        type="text"
                        name="bridge"
                        value={bridge}
                        onChange={e => setBridge(e.target.value)}
                        label="پل IP داخلی"
                    />
                </FormControl>
            </Box>

            <Box sx={{
                width: { md: "65%", sm: "80%", xs: "100%", },
                flexDirection: { xs: "column", sm: "row", md: "row" },
                display: "flex",
                justifyContent: "space-between",
                alignItems: { xs: "flex-start", sm: "center", md: "center" },
                mt: 3,
            }}>
                <p>VLAN را فعال کنید</p>
                <input type="checkbox" style={{ width: "1rem", height: "1rem", cursor: "pointer" }} name="vlan"
                    value={vlan}
                    onChange={sVlan}
                    disabled={nat || routing || internal ? "true" : ""} />
            </Box>
            <Box sx={{
               width: { md: "65%", sm: "80%", xs: "100%", },
                flexDirection: { xs: "column", sm: "row", md: "row" },
                display: "flex",
                justifyContent: "space-between",
                alignItems: { xs: "flex-start", sm: "center", md: "center" },
                mt: 3,
                display: vlan ? "flex" : "none"
            }}>
                <p>پل VLAN</p>
                <FormControl sx={{ minWidth:{md:"50%", sm:"80%", xs:"100%"} }}>
                    <TextField
                        size="small"
                        id="bridge" variant="outlined"
                        sx={{ Width: "100%" }}
                        type="text"
                        name="bridge"
                        value={bridge}
                        onChange={e => setBridge(e.target.value)}
                        label="پل IP داخلی"
                    />
                </FormControl>
            </Box>
            <Box sx={{
               width: { md: "65%", sm: "80%", xs: "100%", },
                flexDirection: { xs: "column", sm: "row", md: "row" },
                display: "flex",
                justifyContent: "space-between",
                alignItems: { xs: "flex-start", sm: "center", md: "center" },
                mt: 3,
            }}>
                <p>NAT را فعال کنید </p>
                <input type="checkbox" style={{ width: "1rem", height: "1rem", cursor: "pointer" }} name="nat"
                    value={nat}
                    onChange={sNat}
                    disabled={vlan || routing || internal ? "true" : ""} />
            </Box>
            <Box sx={{
                width: { md: "65%", sm: "80%", xs: "100%", },
                flexDirection: { xs: "column", sm: "row", md: "row" },
                display: "flex",
                justifyContent: "space-between",
                alignItems: { xs: "flex-start", sm: "center", md: "center" },
                mt: 3,
            }}>
                <p>از شبکه مسیر یابی شده استفاده کنید </p>
                <input type="checkbox" style={{ width: "1rem", height: "1rem", cursor: "pointer" }} name="routing"
                    value={routing}
                    onChange={sRouting}
                    disabled={vlan || nat || internal ? "true" : ""} />
            </Box>
            <div className='submit-container'>
                <Button color='secondary' type='submit' variant="contained">ثبت استخر IP</Button>
            </div>
        </Box>
    </>);
}

export default Createippool;