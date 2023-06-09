import { Box, Checkbox, FormControl, FormControlLabel, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOs } from "../../../Redux/Actions/actions";
const RightContainer = ({ serverName,
    setServerName,
    ipAddress,
    setipAddress,
    serverApiPassword,
    setServerApiPassword,
    lockServer,
    changeCheckBoxValu,
    setOsId,
    internalIP,
    setInternalIP, }) => {

        const dispatch = useDispatch();
        const os = useSelector(state => state.os);
        useEffect(() => {
            try {
                const fetchData = async () => {
                    dispatch(getOs());
                }
                fetchData()
            } catch (e) {
                console.log(e);
            }
        }, []);
    return (
        <Box sx={{ flexDirection: "column", display: "flex",width:{md:"47%", sm:"100%", xs:"100%"} }}>
            <FormControl sx={{ minWidth: 80, mt: 3, }}>
                <TextField
                    size="small"
                    name="serverName"
                    id="serverName" label="نام سرور" variant="outlined"
                    type="text"
                    value={serverName}
                    onChange={e => setServerName(e.target.value)}
                />
            </FormControl>
            <FormControl sx={{ minWidth: 80, mt: 3, }}>
                <TextField
                    size="small"
                    name="ipAddress"
                    id="ipAddress" label="آدرس IP" variant="outlined"
                    type="text"
                    value={ipAddress}
                    onChange={e => setipAddress(e.target.value)}
                />
            </FormControl>
            <FormControl sx={{ minWidth: 80, mt: 3, }}>
                <TextField
                    size="small"
                    name="serverApiPassword"
                    id="serverApiPassword" label="رمز عبور API سرور" variant="outlined"
                    type="text"
                    value={serverApiPassword}
                    onChange={e => setServerApiPassword(e.target.value)}
                />
            </FormControl>
            <FormControl sx={{ minWidth: 80, mt: 3, }}>
                <InputLabel id="os">انتخاب سیستم عامل</InputLabel>
                <Select
                    size="small"
                    name="osId"
                    labelId="os"
                    id="os"
                    label="انتخاب سیستم عامل"
                    onChange={e => setOsId(e.target.value)}
                >
                    {os.map(data =>
                        <MenuItem value={data.osid}>
                            {data.osdata}
                        </MenuItem>
                    )}
                </Select>
            </FormControl>
            <FormControl sx={{ minWidth: 80, mt: 3, }}>
                <TextField
                    size="small"
                    name="internalIP"
                    id="internalIP" label="IP داخلی" variant="outlined"
                    type="text"
                    value={internalIP}
                    onChange={e => setInternalIP(e.target.value)}
                />
            </FormControl>
            <FormControlLabel
                sx={{ mt: 3, }}
                control={<Checkbox color="secondary" />}
                label="قفل سرور"
                labelPlacement="end"
                value={lockServer}
                onChange={changeCheckBoxValu}
            />

        </Box>
    );
}

export default RightContainer;