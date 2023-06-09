import styled from "styled-components";
import { FaFire, FaFlag } from "react-icons/fa"
import { BsToggleOn, BsToggleOff } from "react-icons/bs"
import { FiRefreshCcw } from "react-icons/fi"
import { BiReset, BiBlock } from "react-icons/bi"
import { useEffect, useState } from "react";
import http from "../../Services/httpService";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { SCRIPT_URL, SERVER_URL } from "../../Services/contactService";
import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
const Firewall = () => {
    const [res, setres] = useState([]);
    const [serverId, setServerId] = useState();
    const [port, setPort] = useState();
    const [ip, setIp] = useState();

    useEffect(() => {
        try {
            async function fetchdata() {
                let res = await http.get(`${SERVER_URL}/server`)
                setres(res.data.servers)
            }
            fetchdata()

        } catch (e) {
            console.log(e);
        }

    }, []);
    const id = serverId;

    const enableFireWall = async event => {
        let { status } = await http.post(`${SCRIPT_URL}/system/firewallenable/${id}`);
        try {
            if (status === 200) {
                toast.success("موفقیت آمیز بود", {
                    position: "top-right",
                    closeOnClick: true
                });
            }
        } catch (ex) {
            console.log(ex)
            toast.error("مشکی پیش آمده دوباره تلاش کنید", {
                position: "top-right",
                closeOnClick: true
            });
        }
    }

    const restart = async event => {
        let { status } = await http.post(`${SCRIPT_URL}/system/firewallrestart/${id}`);
        try {
            if (status === 200) {
                toast.success("موفقیت آمیز بود", {
                    position: "top-right",
                    closeOnClick: true
                });
            }
        } catch (ex) {
            console.log(ex)
            toast.error("مشکی پیش آمده دوباره تلاش کنید", {
                position: "top-right",
                closeOnClick: true
            });
        }
    }

    const disable = async event => {
        let { status } = await http.post(`${SCRIPT_URL}/system/firewalldisable/${id}`);
        try {
            if (status === 200) {
                toast.success("موفقیت آمیز بود", {
                    position: "top-right",
                    closeOnClick: true
                });
            }
        } catch (ex) {
            console.log(ex)
            toast.error("مشکی پیش آمده دوباره تلاش کنید", {
                position: "top-right",
                closeOnClick: true
            });
        }
    }

    const factory = async event => {
        let { status } = await http.post(`${SCRIPT_URL}/system/factoryreset/${id}`);
        try {
            if (status === 200) {
                toast.success("موفقیت آمیز بود", {
                    position: "top-right",
                    closeOnClick: true
                });
            }
        } catch (ex) {
            console.log(ex)
            toast.error("مشکی پیش آمده دوباره تلاش کنید", {
                position: "top-right",
                closeOnClick: true
            });
        }
    }

    const blockPort = async event => {
        const block = { port }
        let { status } = await http.post(`${SCRIPT_URL}/system/blockport/${id}`, JSON.stringify(block));
        try {
            if (status === 200) {
                toast.success("موفقیت آمیز بود", {
                    position: "top-right",
                    closeOnClick: true
                });
            }
        } catch (ex) {
            console.log(ex)
            toast.error("مشکی پیش آمده دوباره تلاش کنید", {
                position: "top-right",
                closeOnClick: true
            });
        }
    }

    const allowPort = async event => {
        const block = { port }
        let { status } = await http.post(`${SCRIPT_URL}/system/allowport/${id}`, JSON.stringify(block));
        try {
            if (status === 200) {
                toast.success("موفقیت آمیز بود", {
                    position: "top-right",
                    closeOnClick: true
                });
            }
        } catch (ex) {
            console.log(ex)
            toast.error("مشکی پیش آمده دوباره تلاش کنید", {
                position: "top-right",
                closeOnClick: true
            });
        }
    }

    const blockIp = async event => {
        const block = { ip }
        let { status } = await http.post(`${SCRIPT_URL}/system/blockipaddress/${id}`, JSON.stringify(block));
        try {
            if (status === 200) {
                toast.success("موفقیت آمیز بود", {
                    position: "top-right",
                    closeOnClick: true
                });
            }
        } catch (ex) {
            console.log(ex)
            toast.error("مشکی پیش آمده دوباره تلاش کنید", {
                position: "top-right",
                closeOnClick: true
            });
        }
    }

    const allowIp = async event => {
        const block = { ip }
        let { status } = await http.post(`${SCRIPT_URL}/system/allowipaddress/${id}`, JSON.stringify(block));
        try {
            if (status === 200) {
                toast.success("موفقیت آمیز بود", {
                    position: "top-right",
                    closeOnClick: true
                });
            }
        } catch (ex) {
            console.log(ex)
            toast.error("مشکی پیش آمده دوباره تلاش کنید", {
                position: "top-right",
                closeOnClick: true
            });
        }
    }
    return (<div style={{ width: "100%" }}>
        <ToastContainer style={{ zIndex: "9999999999999999", fontFamily: "Vazir" }} />

        <$FireWall>
            <Box sx={{width:"100%", display:"flex", justifyContent:"center"}}>
                <FormControl>
                <InputLabel id="serverId">انتخاب سرور</InputLabel>
                    <Select size="small"  sx={{ minWidth: { xs: 330, sm: 330, md: 400 } }} label="انتخاب سرور" name="serverId" onChange={e => setServerId(e.target.value)} required>
                        {res.map(data =>
                            <MenuItem value={data.serid}>{data.serverName}</MenuItem>
                        )}
                    </Select>

                </FormControl>
            </Box>
            <Firewallwrapper>
                <FirewallContex onClick={enableFireWall}>
                    <p style={{ fontSize: "12px", color: "black", marginRight: "16px" }}>روشن کردن فایروال</p>
                    <BsToggleOn style={{ color: "black", marginRight: "8px" }} />
                </FirewallContex>
                <p className="responsive" style={{ marginRight: "20px", fontSize: "14px" }}>سرویس IPtables را راه اندازی می کند</p>
            </Firewallwrapper>

            <Firewallwrapper>
                <FirewallContex onClick={restart}>
                    <p style={{ fontSize: "12px", color: "black", marginRight: "16px" }}>راه اندازی مجدد فایروال</p>
                    <FiRefreshCcw style={{ color: "black", marginRight: "8px" }} />
                </FirewallContex>
                <p className="responsive" style={{ marginRight: "20px", fontSize: "14px" }}>سرویس IPtables را مجددا راه اندازی می کند</p>
            </Firewallwrapper>

            <Firewallwrapper>
                <FirewallContex onClick={disable}>
                    <p style={{ fontSize: "12px", color: "black", marginRight: "16px" }}>خاموش کردن فایروال</p>
                    <BsToggleOff style={{ color: "black", marginRight: "8px" }} />
                </FirewallContex>
                <p className="responsive" style={{ marginRight: "20px", fontSize: "14px" }}>فایروال را متوقف می کند</p>
            </Firewallwrapper>

            <Firewallwrapper>
                <FirewallContex onClick={factory}>
                    <p style={{ fontSize: "12px", color: "black", marginRight: "16px" }}>تنظیم مجدد کارخانه</p>
                    <BiReset style={{ color: "black", marginRight: "8px" }} />
                </FirewallContex>
                <p className="responsive" style={{ marginRight: "20px", fontSize: "14px" }}>فایروال را به تنظیمات کارخانه بازنشانی می کند</p>
            </Firewallwrapper>

            <Firewallwrapper>
                <FirewallContex onClick={blockPort}>
                    <p style={{ fontSize: "12px", color: "black", marginRight: "16px" }}>مسدود کردن پورت</p>
                    <BiBlock style={{ color: "black", marginRight: "8px" }} />
                </FirewallContex>
                <p className="responsive" style={{ marginRight: "20px", fontSize: "14px" }}>مسدود کردن شماره پورت <input
                    style={{ height: "25px", width: "20%" }}
                    value={port}
                    name="port"
                    onChange={e => setPort(e.target.value)}
                /> از طریق فایروال</p>
            </Firewallwrapper>

            <Firewallwrapper>
                <FirewallContex onClick={allowPort}>
                    <p style={{ fontSize: "12px", color: "black", marginRight: "16px" }}>اجازه پورت</p>
                    <FaFlag style={{ color: "black", marginRight: "8px" }} />
                </FirewallContex>
                <p className="responsive" style={{ marginRight: "20px", fontSize: "14px" }}>شماره پورت <input style={{ height: "25px", width: "20%" }}
                    value={port}
                    name="port"
                    onChange={e => setPort(e.target.value)}
                /> از طریق فایروال مجاز است</p>
            </Firewallwrapper>

            <Firewallwrapper>
                <FirewallContex onClick={blockIp}>
                    <p style={{ fontSize: "12px", color: "black", marginRight: "16px" }}>آدرس IP را مسدود کنید</p>
                    <BiBlock style={{ color: "black", marginRight: "8px" }} />
                </FirewallContex>
                <p className="responsive" style={{ marginRight: "20px", fontSize: "14px" }}>مسدود کردن آدرس IP<input
                    style={{ height: "25px", width: "35%" }}
                    value={ip}
                    name="ip"
                    onChange={e => setIp(e.target.value)}
                />از طریق فایروال</p>
            </Firewallwrapper>

            <Firewallwrapper>
                <FirewallContex onClick={allowIp}>
                    <p style={{ fontSize: "12px", color: "black", marginRight: "16px" }}>اجازه آدرس IP</p>
                    <FaFlag style={{ color: "black", marginRight: "8px" }} />
                </FirewallContex>
                <p className="responsive" style={{ marginRight: "20px", fontSize: "14px" }}>آدرس IP<input
                    style={{ height: "25px", width: "35%" }}
                    value={ip}
                    name="ip"
                    onChange={e => setIp(e.target.value)}
                /> از طریق فایروال مجاز است</p>
            </Firewallwrapper>
        </$FireWall>

    </div>);
}

export default Firewall;

const $FireWall = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 8px;
    @media screen and (max-width: 720px){
        .responsive{
            margin-right: 4px !important;
            margin-top: 8px;
        }
    }
`
const FieldWrapper = styled.div`
    width :60%;
    padding: 8px;
    align-items: center;
    display: flex;
    justify-content: flex-end;
    margin-top: 8px;
    margin-right: 18px;
    @media screen and (max-width: 720px){
        width: 100vw;
        padding: 0px;
        margin-right: 0px;
        justify-content: flex-start;
        margin-right: 14px;
       
    }
`

const Firewallwrapper = styled.div`
    width :60%;
    padding: 8px;
    align-items: center;
    display: flex;
    margin-top: 4px;
    margin-right: 18px;
    @media screen and (max-width: 720px){
        width: 100vw;
        margin-right: 4px;
        flex-direction: column;
        align-items: flex-start;
        margin-top: 32px;
    }
`
const FirewallContex = styled.div`
    width: 26%;
    height: 34px;
    border: 1px solid black;
    border-radius: 5px;
    display: flex;
    align-items: center;
    cursor: pointer;
    @media screen and (max-width: 720px){
        width: 90%;
    }
`