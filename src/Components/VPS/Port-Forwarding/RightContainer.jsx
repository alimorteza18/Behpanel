import { Box, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getServer } from "../../../Redux/Actions/actions";

const RightContainer = ({ setServerId, description, setDescription, vps, setVpsId, }) => {

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
                <p>انتخاب سرور</p>
                <FormControl sx={{ minWidth:{md:"50%", sm:"80%", xs:"100%"} }}>
                    <InputLabel id="fromServer">انتخاب سرور</InputLabel>
                    <Select
                        size="small"
                        name="fromServer"
                        labelId="fromServer"
                        id="fromServer"
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
                <p>انتخاب ماشین مجازی </p>
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
                <p>توضیحات</p>
                <FormControl sx={{ minWidth:{md:"50%", sm:"80%", xs:"100%"} }}>
                    <TextField
                        size="small"
                        name="description"
                        id="description" label="توضیحات" variant="outlined"
                        sx={{ Width: "100%" }}
                        type="text"
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    />
                </FormControl>
            </Box>
        </>
    );
}

export default RightContainer;