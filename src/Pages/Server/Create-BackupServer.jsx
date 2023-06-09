import { Box, Button, Toolbar, Typography } from "@mui/material";
import { useState } from "react";
import { BsServer } from "react-icons/bs";
import Swal from "sweetalert2";
import LeftContainer from "../../Components/Server/BackupServer/LeftContainer";
import RightContainer from "../../Components/Server/BackupServer/RightContainer";
import { createBackupServer } from "../../Services/contactService";


const CreateBackupServer = () => {
    const [name, setName] = useState("");
    const [hostName, setHostname] = useState("");
    const [type, setType] = useState("");
    const [userName, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [port, setPort] = useState();

    const handleSubmit = async event => {
        event.preventDefault();
        const items = { name, hostName, type, userName, password, port };
        try {
            const { status } = await createBackupServer(JSON.stringify(items));
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
            <BsServer style={{ width: "1.5rem", height: "1.5rem", }} />
            <Typography variant='h6' sx={{ ml: 1 }}>
                افزودن سرور پشتیبان
            </Typography>
        </Toolbar>
        <Box onSubmit={handleSubmit} component="form">
                <RightContainer
                    name={name}
                    setName={setName}
                    hostName={hostName}
                    setHostname={setHostname}
                    setType={setType}
                />
                <LeftContainer
                    userName={userName}
                    setUsername={setUsername}
                    password={password}
                    setPassword={setPassword}
                    port={port}
                    setPort={setPort}
                />
            <div className='submit-container'>
                <Button color='secondary' type='submit' variant="contained">افزودن سرور پشتیبان</Button>
            </div>
        </Box>
    </>);
}

export default CreateBackupServer;