import { Box, Button, Toolbar, Typography } from "@mui/material";
import { useState } from "react";
import { BsServer } from "react-icons/bs";
import Swal from "sweetalert2";
import LeftContainer from "../../Components/Server/Create-Server/LeftContainer";
import RightContainer from "../../Components/Server/Create-Server/RightContainer";
import { createServer } from "../../Services/contactService";

const CreateServer = () => {
    const [serverName, setServerName] = useState("")
    const [ipAddress, setIpAddress] = useState("")
    const [serverApiPassword, setServerApiPassword] = useState("")
    const [lockServer, setLockServer] = useState(false);
    const [internalIP, setInternalIP] = useState("");
    const [osId, setOsId] = useState();
    const [prefix, setPrefix] = useState();
    const [ips, setIps] = useState([]);
    const [gateway, setGateway] = useState("");
    const [content, setContent] = useState(0);
    const [tabs, setTabs] = useState([
        {
            ip: "",
            prefix: "",
            gateway: "",
            name: "",
            networkType: ""
        }
    ]);

    const changeCheckBoxValue = e => {
        setLockServer(e.target.value);
        setLockServer(!lockServer);
    }

    const handleSubmit = async event => {
        await addToArray();
        event.preventDefault();
        const server = { serverName, ipAddress, serverApiPassword, internalIP, lockServer, osId, interfaceCommands: tabs };
        try {
            const { status } = await createServer(JSON.stringify(server));
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
    const addToArray = () => {
        setIps(tabs);
}
    return (<>
        <Toolbar disableGutters>
            <BsServer style={{ width: "1.5rem", height: "1.5rem", }} />
            <Typography variant='h6' sx={{ ml: 1 }}>
                ایجاد سرور
            </Typography>
        </Toolbar>
        <Box onSubmit={handleSubmit} component="form">
            <Box sx={{ display: "flex", flexWrap: "wrap", flexDirection: { sm: "column", md: "row", xs: "column" }, justifyContent: "space-between" }}>
                <RightContainer
                    serverName={serverName}
                    setServerName={setServerName}
                    ipAddress={ipAddress}
                    setipAddress={setIpAddress}
                    serverApiPassword={serverApiPassword}
                    setServerApiPassword={setServerApiPassword}
                    lockServer={lockServer}
                    changeCheckBoxValu={changeCheckBoxValue}
                    internalIP={internalIP}
                    setInternalIP={setInternalIP}
                    setOsId={setOsId}
                />
                <LeftContainer
                    tabs={tabs}
                    setTabs={setTabs}
                    content={content}
                    setContent={setContent}
                />
            </Box>
            <div className='submit-container'>
                <Button color='secondary' type='submit' variant="contained">ایجاد سرور</Button>
            </div>
        </Box>
    </>);
}

export default CreateServer;