import { useEffect, useState } from 'react'
import { Box, Button, Toolbar, Typography, } from '@mui/material';
import { FaServer } from 'react-icons/fa';
import RightContainer from '../../Components/VPS/Create Vps/RightContainer';
import LeftContainer from '../../Components/VPS/Create Vps/LeftContainer';
import http from '../../Services/httpService'
import { createVps, SERVER_URL } from '../../Services/contactService';
import Swal from 'sweetalert2';

const CreateVps = () => {
    const [serverId, setServerId] = useState();
    const [userId, setUserId] = useState();
    const [osId, setOsId] = useState();
    const [hostName, setHostName] = useState("");
    const [rootPassword, setRootPassword] = useState("");
    const [domainNameServer, setDomainNameServer] = useState("");
    const [serverInterfaceId, setServerInterfaceId] = useState();
    const [interFace, setInterFace] = useState([]);
    const [content, setContent] = useState(0);
    const [guaranteedRam, setGuaranteedRam] = useState();
    const [burstedRam, setBurstedRam] = useState();
    const [cpuUnits, setCpuUnits] = useState();
    const [cpuCores, setCpuCores] = useState();
    const [cpuPercentage, setCpuPercentage] = useState();
    const [diskSpace, setDiskSpace] = useState();
    const [storageId, setStorageId] = useState();
    const [storage, setStorage] = useState([]);
    const [ips, setIps] = useState([]);
    const [iso, setIso] = useState(null);
    const [tabs, setTabs] = useState([
        {
            ip: "",
            prefix: "",
            gateway: "",
            serverInterfaceId: "",
            networkType: ""
        }
    ]);

    useEffect(() => {
        async function fetchdata() {
            let interFace = await http.get(`${SERVER_URL}/server/${serverId}/interface`)
            let storage = await http.get(`${SERVER_URL}/storage/server/${serverId}`)
            setInterFace(interFace.data);
            setStorage(storage.data.data);
        }
        fetchdata()
    }, [serverId])

    const reset = () => {
        setGuaranteedRam("");
        setCpuCores("");
        setCpuPercentage("");
        setCpuUnits("");
        setBurstedRam("");
        setDiskSpace("");
        setServerId("");
        setStorageId("");
        setUserId("");
        setOsId("");
        setHostName("");
        setRootPassword("");
        setIps([]);
    }

    const handleSubmit = async event => {
        await addToArray();
        event.preventDefault();
        const vps = {  domainNameServer, serverId:serverId.toString(), userId:userId.toString(), osId:osId.toString(), rootPassword, hostName,  guaranteedRam, burstedRam, cpuUnits, cpuCores, cpuPercentage, diskSpace, interfaceCommands:tabs, storageId:storageId.toString(), iso};
        try {
            const { status } = await createVps(vps);

            if (status === 200) {
                reset();
                Swal.fire({
                    icon: 'success',
                    title: 'موفقیت آمیز بود',
                    html:
                    'ماشین شما با موفقیت ساخته شد&nbsp' +
                    'برای نمایش ماشین خود به صفحه &nbsp' +
                    '<a href="/vps">لیست همه ماشین ها</a>&nbsp'+
                    'بروید'
                    ,
                    type: 'success',
                    confirmButtonText: 'متوجه شدم'
                })
            }

        } catch (err) {
            Swal.fire({
                icon: 'error',
                title: 'خطا !',
                text: err.response.data,
                type: 'error',
                confirmButtonText: 'متوجه شدم',   
            })
            console.log(err);
        }

    }
    const addToArray = () => {
                setIps(tabs);
    }
    return (<>
        <Toolbar disableGutters>
            <FaServer style={{ width: "1.5rem", height: "1.5rem", }} />
            <Typography variant='h6' sx={{ ml: 1 }}>
                ایجاد ماشین مجازی
            </Typography>
        </Toolbar>
        <Box component="form" onSubmit={handleSubmit} >
            <Box sx={{ display: "flex", flexWrap: "wrap", flexDirection: { sm: "column", md: "row", xs: "column" }, justifyContent: "space-between" }}>
                <RightContainer
                    setServerId={setServerId}
                    setUserId={setUserId}
                    setOsId={setOsId}
                    hostName={hostName}
                    setHostName={setHostName}
                    rootPassword={rootPassword}
                    setRootPassword={setRootPassword}
                    domainNameServer={domainNameServer}
                    setDomainNameServer={setDomainNameServer}
                    tabs={tabs}
                    setTabs={setTabs}
                    content={content}
                    setContent={setContent}
                    interFace={interFace}
                    setInterFace={setInterFace}
                    serverInterfaceId={serverInterfaceId}
                    setServerInterfaceId={serverInterfaceId}
                    userId={userId}

                />
                <LeftContainer
                    guaranteedRam={guaranteedRam}
                    burstedRam={burstedRam}
                    cpuUnits={cpuUnits}
                    cpuCores={cpuCores}
                    cpuPercentage={cpuPercentage}
                    setStorageId={setStorageId}
                    setGuaranteedRam={setGuaranteedRam}
                    setBurstedRam={setBurstedRam}
                    setCpuUnits={setCpuUnits}
                    setCpuPercentage={setCpuPercentage}
                    setCpuCores={setCpuCores}
                    diskSpace={diskSpace}
                    setDiskSpace={setDiskSpace}
                    storage={storage}
                     />
            </Box>
            <div className='submit-container'>
                <Button color='secondary' type='submit' variant="contained">ایجاد ماشین مجازی</Button>
            </div>
        </Box>
    </>);
}
export default CreateVps;