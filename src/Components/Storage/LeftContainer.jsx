import { Box, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";

const LeftContainer = ({ path, setPath, setFileFormat, alertTreshold, setAlertTreshold }) => {
    return (<>
        <Box sx={{
           width: { md: "65%", sm: "80%", xs: "100%", },
            flexDirection: { xs: "column", sm: "row", md: "row" },
            display: "flex",
            justifyContent: "space-between",
            alignItems: { xs: "flex-start", sm: "center", md: "center" },
            mt: 3,
        }}>
            <p>مسیر ذخیره سازی</p>
            <FormControl sx={{ minWidth:{md:"50%", sm:"80%", xs:"100%"} }}>
                <TextField
                    size="small"
                    name="path"
                    id="path" label="مسیر ذخیره سازی" variant="outlined"
                    sx={{ Width: "100%" }}
                    type="text"
                    value={path}
                    onChange={e => setPath(e.target.value)}
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
            <p>فرمت فایل</p>
            <FormControl sx={{ minWidth:{md:"50%", sm:"80%", xs:"100%"} }}>
                <InputLabel id="fileFormat">فرمت فایل</InputLabel>
                <Select
                    size="small"
                    name="fileFormat"
                    labelId="fileFormat"
                    id="fileFormat"
                    label="فرمت فایل"
                    sx={{ Width: "100%" }}
                    onChange={e => setFileFormat(e.target.value)}
                >
                    <MenuItem value="RAW">RAW</MenuItem>
                    <MenuItem value="QCOW2">QCOW2</MenuItem>
                    <MenuItem value="VHD">VHD</MenuItem>
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
            <p>آستانه هشدار (به درصد)</p>
            <FormControl sx={{ minWidth:{md:"50%", sm:"80%", xs:"100%"} }}>
                <TextField
                    size="small"
                    name="alertTreshold"
                    id="alertTreshold" label="آستانه هشدار (به درصد)" variant="outlined"
                    sx={{ Width: "100%" }}
                    type="number"
                    value={alertTreshold}
                    onChange={e => setAlertTreshold(e.target.value)}
                />
            </FormControl>
        </Box>
    </>);
}

export default LeftContainer;