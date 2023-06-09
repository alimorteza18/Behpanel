import { Box, Checkbox, FormControl, FormControlLabel, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getServer } from "../../../Redux/Actions/actions";

const LeftContainer = ({ setToServer,
    speedLimitForTransferingVps,
    setSpeedLimitForTransferingVps,
    ignoreDomainFowardingConflict,
    setIgnoreDomainFowardingConflict,
    disableCompression,
    setDisableCompression,

}) => {

    const dispatch = useDispatch();
    const server = useSelector(state => state.server);

    const handleIgnoreDomainFowardingConflict = e => {
        setIgnoreDomainFowardingConflict(!ignoreDomainFowardingConflict);
        setIgnoreDomainFowardingConflict(e.target.value);
    }

    const handleDisableCompression = e => {
        setDisableCompression(!disableCompression);
        setDisableCompression(e.target.value);
    }

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
    return (
        <>
            <Box sx={{
                width: { md: "65%", sm: "80%", xs: "100%", },
                flexDirection: { xs: "column", sm: "row", md: "row" },
                display: "flex",
                justifyContent: "space-between",
                alignItems: { xs: "flex-start", sm: "center", md: "center" },
                mt: 3,
            }}>
                <p>به سرور</p>
                <FormControl sx={{ minWidth:{md:"50%", sm:"80%", xs:"100%"} }}>
                    <InputLabel id="toServer">انتخاب سرور</InputLabel>
                    <Select
                        size="small"
                        name="toServer"
                        labelId="toServer"
                        id="toServer"
                        label="انتخاب سرور"
                        sx={{ Width: "100%" }}
                        onChange={e => setToServer(e.target.value)}
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
                <p>محدودیت سرعت برای انتقال داده های VPS</p>
                <FormControl sx={{ minWidth:{md:"50%", sm:"80%", xs:"100%"} }}>
                    <TextField
                        size="small"
                        name="speedLimitForTransferingVps"
                        id="speedLimitForTransferingVps" variant="outlined"
                        sx={{ Width: "100%" }}
                        type="number"
                        label="(بر حسب مگابیت بر ثانیه)"
                        value={speedLimitForTransferingVps}
                        onChange={e => setSpeedLimitForTransferingVps(e.target.value)}
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
                <p>تضاد ارسال دامنه را نادیده بگیرید</p>
                <input type="checkbox" style={{ width: "1rem", height: "1rem", cursor: "pointer" }} value={ignoreDomainFowardingConflict}
                    onChange={handleIgnoreDomainFowardingConflict} />
            </Box>

            <Box sx={{
                width: { md: "65%", sm: "80%", xs: "100%", },
                flexDirection: { xs: "column", sm: "row", md: "row" },
                display: "flex",
                justifyContent: "space-between",
                alignItems: { xs: "flex-start", sm: "center", md: "center" },
                mt: 3,
            }}>
                <p>فشرده سازی را غیر فعال کنید</p>
                <input type="checkbox" style={{ width: "1rem", height: "1rem", cursor: "pointer" }} value={disableCompression}
                    onChange={handleDisableCompression} />

            </Box>
        </>
    );
}

export default LeftContainer;