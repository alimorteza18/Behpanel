import { Box, Checkbox, FormControl, FormControlLabel, InputLabel, MenuItem, Select } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getServer } from "../../../Redux/Actions/actions";

const RightContainer = ({ handleChange, vps, disableCompression, setDisableCompression, setVpsId }) => {
    const dispatch = useDispatch();
    const server = useSelector(state => state.server);

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
                <p>از سرور</p>
                <FormControl sx={{ minWidth:{md:"50%", sm:"80%", xs:"100%"} }}>
                    <InputLabel id="fromServer">انتخاب سرور</InputLabel>
                    <Select
                        size="small"
                        name="fromServer"
                        labelId="fromServer"
                        id="fromServer"
                        label="انتخاب سرور"
                        onChange={handleChange}
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
                <p>فشرده سازی را غیر فعال کنید</p>
                <input style={{ width: "1rem", height: "1rem", cursor: "pointer" }} type="checkbox" value={disableCompression}
                    onChange={handleDisableCompression} />
            </Box>
        </>
    );
}

export default RightContainer;