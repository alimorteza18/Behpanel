import { Box, Checkbox, FormControl, FormControlLabel, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getServer } from "../../Redux/Actions/actions";

const RightContainer = ({ storageName, setStorageName, setServerId, setStorageType, primaryStorage, changeCheckBoxValue }) => {

    const dispatch = useDispatch();
    const server = useSelector(state => state.server);

    useEffect(() => {
        try {
            const fetchData = async () => {
                dispatch(getServer());
            }
            fetchData()
        } catch (e) {
            console.log(e);
        }
    }, []);
    return (<>
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
                    name="storageName"
                    id="storageName" label="نام" variant="outlined"
                    sx={{ Width: "100%" }}
                    type="text"
                    value={storageName}
                    onChange={e => setStorageName(e.target.value)}
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
            <p>انتخاب سرور</p>
            <FormControl sx={{ minWidth:{md:"50%", sm:"80%", xs:"100%"} }}>
                <InputLabel id="serverId">انتخاب سرور</InputLabel>
                <Select
                    size="small"
                    name="serverId"
                    labelId="serverId"
                    id="serverId"
                    label="انتخاب سرور"
                    sx={{ Width: "100%" }}
                    onChange={e => setServerId(e.target.value)}
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
            <p>نوع ذخیره سازی</p>
            <FormControl sx={{ minWidth:{md:"50%", sm:"80%", xs:"100%"} }}>
                <InputLabel id="storageType">نوع ذخیره سازی</InputLabel>
                <Select
                    size="small"
                    name="storageType"
                    labelId="storageType"
                    id="storageType"
                    label="نوع ذخیره سازی"
                    sx={{ Width: "100%" }}
                    onChange={e => setStorageType(e.target.value)}
                >
                    <MenuItem value="LVM"
                    >LVM</MenuItem>
                    <MenuItem value="File"
                    >File</MenuItem>
                    <MenuItem value="OpenVZ"
                    >OpenVZ</MenuItem>
                    <MenuItem value="Thin LVM"
                    >Thin LVM</MenuItem>
                    <MenuItem value="ZFS"
                    >ZFS</MenuItem>
                    <MenuItem value="ZFS Thin"
                    >ZFS Thin</MenuItem>
                    <MenuItem value="ZFS Compressed"
                    >ZFS Compressed</MenuItem>
                    <MenuItem value="ZFS Thin Compressed"
                    >ZFS Thin Compressed</MenuItem>
                    <MenuItem value="Ceph Block Device"
                    >Ceph Block Device</MenuItem>
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
            <p>منبع ذخیره اصلی باشد</p>
            <input style={{ width: "1rem", height: "1rem", cursor: "pointer" }} type="checkbox" value={primaryStorage}
                onChange={changeCheckBoxValue} />
        </Box>
    </>);
}

export default RightContainer;