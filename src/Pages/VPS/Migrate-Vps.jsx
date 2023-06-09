import { Box, Button, Toolbar, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { FaServer } from "react-icons/fa";
import Swal from "sweetalert2";
import LeftContainer from "../../Components/VPS/Migrate-Vps/LeftContainer";
import RightContainer from "../../Components/VPS/Migrate-Vps/RightContainer";
import { getVpsWithServerId, migrateVps } from "../../Services/contactService";

const MigrateVps = () => {
    const [fromServer, setFromServer] = useState();
    const [serverId, setServerId] = useState();
    const [vps, setVps] = useState([]);
    const [ignoreDomainFowardingConflict, setIgnoreDomainFowardingConflict] = useState(false);
    const [disableCompression, setDisableCompression] = useState(false);
    const [preserveSameIPAddress, setPreserveSameIPAddress] = useState(false);
    const [deleteSourceVps, setDeleteSourceVps] = useState(false)
    const [toServer, setToServer] = useState();
    const [speedLimitForTransferingVps, setSpeedLimitForTransferingVps] = useState();
    const [vpsId, setVpsId] = useState([]);

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
        const items = { fromServer, toServer, ignoreDomainFowardingConflict, disableCompression, speedLimitForTransferingVps, preserveSameIPAddress, deleteSourceVps, vpsId };
        try {
            const { status } = await migrateVps(JSON.stringify(items), vpsId);
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
                انتقال ماشین مجازی
            </Typography>
        </Toolbar>

        <Box onSubmit={handleSubmit} component="form">
                <RightContainer
                    handleChange={handleChange}
                    vps={vps}
                    preserveSameIPAddress={preserveSameIPAddress}
                    setPreserveSameIPAddress={setPreserveSameIPAddress}
                    deleteSourceVps={deleteSourceVps}
                    setDeleteSourceVps={setDeleteSourceVps}
                    setVpsId={setVpsId}

                />
                <LeftContainer
                    setToServer={setToServer}
                    speedLimitForTransferingVps={speedLimitForTransferingVps}
                    setSpeedLimitForTransferingVps={setSpeedLimitForTransferingVps}
                    ignoreDomainFowardingConflict={ignoreDomainFowardingConflict}
                    setIgnoreDomainFowardingConflict={setIgnoreDomainFowardingConflict}
                    disableCompression={disableCompression}
                    setDisableCompression={setDisableCompression}
                />
            <div className='submit-container'>
                <Button color='secondary' type='submit' variant="contained">انتقال ماشین مجازی</Button>
            </div>
        </Box>
    </>);
}

export default MigrateVps;