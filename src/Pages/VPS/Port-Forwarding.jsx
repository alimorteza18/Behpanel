import { Box, Button, Toolbar, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { FaServer } from "react-icons/fa";
import Swal from "sweetalert2";
import LeftContainer from "../../Components/VPS/Port-Forwarding/LeftContainer";
import PortForwardingList from "../../Components/VPS/Port-Forwarding/PortForwardingList";
import RightContainer from "../../Components/VPS/Port-Forwarding/RightContainer";
import { getVpsWithServerId, portForwarding } from "../../Services/contactService";

const PortForwarding = () => {
    const [serverId, setServerId] = useState();
    const [description, setDescription] = useState("");
    const [vps, setVps] = useState([]);
    const [vpsId, setVpsId] = useState();
    const [from, setFrom] = useState();
    const [to, setTo] = useState();

    useEffect(() => {
        async function fetchdata() {
            let vps = await getVpsWithServerId(serverId);
            setVps(vps.data.data);
        }
        fetchdata()
    }, [serverId])

    const handleSubmit = async event => {
        event.preventDefault();
        const items = {serverId:serverId.toString(), vpsId:vpsId.toString(), description, from, to};
        try {
            const { status } = await portForwarding(JSON.stringify(items));
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
            <FaServer style={{ width: "1.5rem", height: "1.5rem", }} />
            <Typography variant='h6' sx={{ ml: 1 }}>
                Port Forwarding
            </Typography>
        </Toolbar>
        <Box component="form" onSubmit={handleSubmit}>
                <RightContainer
                    setServerId={setServerId}
                    description={description}
                    setDescription={setDescription}
                    vps={vps}
                    setVpsId={setVpsId}  
                />
                <LeftContainer
                     from={from}
                     setFrom={setFrom}
                     to={to}
                     setTo={setTo}
                />
            <div className='submit-container'>
                <Button color='secondary' type='submit' variant="contained">Port Forwarding</Button>
            </div>
        </Box>
        <PortForwardingList/>
    </>);
}

export default PortForwarding;