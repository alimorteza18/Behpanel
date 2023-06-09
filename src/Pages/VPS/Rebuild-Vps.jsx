import { Box, Button, FormControl, InputLabel, MenuItem, Select, Toolbar, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { FaServer } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { getOs, getServer } from "../../Redux/Actions/actions";
import { getVpsWithServerId, rebuildVps } from "../../Services/contactService";

const RebuilVps = () => {
    const [serverId, setServerId] = useState();
    const [osId, setOsId] = useState();
    const [vpsId, setVpsId] = useState();
    const [vps, setVps] = useState([]);
    const dispatch = useDispatch();
    const server = useSelector(state => state.server);
    const os = useSelector(state => state.os);


    useEffect(() => {
        try {
            const fetchData = async () => {
                dispatch(getServer());
                dispatch(getOs());
            }
            fetchData()
        } catch (e) {
            console.log(e);
        }
    }, []);

    useEffect(() => {
        async function fetchdata() {
            let vps = await getVpsWithServerId(serverId);
            setVps(vps.data.data);
        }
        fetchdata()
    }, [serverId])

    const handleSubmit = async event => {
        event.preventDefault();
        const items = { serverId, osId, vpsId };
        try {
            const { status } = await rebuildVps(JSON.stringify(items), vpsId);
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
                نصب مجدد ماشین
            </Typography>
        </Toolbar>
        <Box component="form" onSubmit={handleSubmit}>
            <Box sx={{
                width: { md: "65%", sm: "80%", xs: "100%", },
                flexDirection: { xs: "column", sm: "row", md: "row" },
                display: "flex",
                justifyContent: "space-between",
                alignItems: { xs: "flex-start", sm: "center", md: "center" },
                mt: 3,
            }}>
                <p>انتخاب سرور</p>
                <FormControl sx={{ minWidth:{md:"50%", sm:"80%", xs:"100%"} }}>
                    <InputLabel id="serverId">انتخاب سرور</InputLabel>
                    <Select
                        size="small"
                        name="serverId"
                        labelId="serverId"
                        id="serverId"
                        label="انتخاب سرور"
                        onChange={e => setServerId(e.target.value)}
                        sx={{ Width: "100%" }}
                    >
                        {server.map((data) => (
                            <MenuItem value={data.serid}>
                                {data.serverName} ({data.ip})
                            </MenuItem>
                        ))}
                    </Select>
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
                <p>انتخاب ماشین مجازی</p>
                <FormControl sx={{ minWidth:{md:"50%", sm:"80%", xs:"100%"} }}>
                    <InputLabel id="vpsId">انتخاب ماشین مجازی</InputLabel>
                    <Select
                        size="small"
                        name="vpsId"
                        labelId="vpsId"
                        id="vpsId"
                        label="انتخاب ماشین مجازی"
                        sx={{ Width: "100%" }}
                        onChange={e => setVpsId(e.target.value)}
                    >
                        {vps.map(data =>
                            <MenuItem value={data.vpsid}>
                                {data.hostname}
                            </MenuItem>
                        )}
                    </Select>
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
                <p>انتخاب سیستم عامل</p>
                <FormControl sx={{ minWidth:{md:"50%", sm:"80%", xs:"100%"} }}>
                    <InputLabel id="osId">انتخاب سیستم عامل</InputLabel>
                    <Select
                        size="small"
                        name="osId"
                        labelId="osId"
                        id="osId"
                        label="انتخاب سیستم عامل"
                        sx={{ Width: "100%" }}
                        onChange={e => setOsId(e.target.value)}
                    >
                        {os.map(data =>
                            <MenuItem value={data.osid}>
                                {data.osdata}
                            </MenuItem>
                        )}
                    </Select>
                </FormControl>
            </Box>
            <div className='submit-container'>
                <Button color='secondary' type='submit' variant="contained">نصب مجدد ماشین </Button>
            </div>
        </Box>
    </>);
}

export default RebuilVps;