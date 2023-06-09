import { Box, Button, FormControl, TextField, Toolbar, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { FaServer } from "react-icons/fa";
import Swal from "sweetalert2";
import LeftContainer from "../../Components/VPS/Clone-Vps/LeftContainer";
import RightContainer from "../../Components/VPS/Clone-Vps/RightContainer";
import { cloneVps, getVpsWithServerId } from "../../Services/contactService";

const CloneVps = () => {
    const [fromServer, setFromServer] = useState();
    const [serverId, setServerId] = useState();
    const [vps, setVps] = useState([]);
    const [ignoreDomainFowardingConflict, setIgnoreDomainFowardingConflict] = useState(false);
    const [disableCompression, setDisableCompression] = useState(false);
    const [speedLimitForTransferingVps, setSpeedLimitForTransferingVps] = useState();
    const [vpsId, setVpsId] = useState([]);
    const [toServer, setToServer] = useState();

    const handleChange = e => {
        setServerId(e.target.value);
        setFromServer(e.target.value);
    }

    useEffect(() => {
        async function fetchdata() {
            let vps = await getVpsWithServerId(serverId);
            setVps(vps.data.data);
        }
        fetchdata()
    }, [serverId])

    const handleSubmit = async event => {
        event.preventDefault();
        const items = { fromServer, toServer, ignoreDomainFowardingConflict, disableCompression, speedLimitForTransferingVps, vpsId };
        try {
            const { status } = await cloneVps(JSON.stringify(items), vpsId);
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
                ایجاد کپی از ماشین
            </Typography>
        </Toolbar>
        <Box component="form" onSubmit={handleSubmit}>
                 <RightContainer
                    handleChange={handleChange}
                    vps={vps}
                    setVpsId={setVpsId}
                    disableCompression={disableCompression}
                    setDisableCompression={setDisableCompression}
                />
                <LeftContainer
                    setToServer={setToServer}
                    speedLimitForTransferingVps={speedLimitForTransferingVps}
                    setSpeedLimitForTransferingVps={setSpeedLimitForTransferingVps}
                    ignoreDomainFowardingConflict={ignoreDomainFowardingConflict}
                    setIgnoreDomainFowardingConflict={setIgnoreDomainFowardingConflict}
                /> 
       
            <div className='submit-container'>
                <Button color='secondary' type='submit' variant="contained">ایجاد کپی از ماشین</Button>
            </div>
        </Box>
    </>);
}

export default CloneVps;