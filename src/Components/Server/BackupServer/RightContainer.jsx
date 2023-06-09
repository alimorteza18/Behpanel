import { Box, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";

const RightContainer = ({ name, setName, hostName, setHostname, setType }) => {
    return (<>
        <Box sx={{
            width: { md: "65%", sm: "80%", xs: "100%", },
            flexDirection: { xs: "column", sm: "row", md: "row" },
            display: "flex",
            justifyContent: "space-between",
            alignItems: { xs: "flex-start", sm: "center", md: "center" },
            mt: 3,
        }}>
            <p>نام سرور پشتیبان</p>
            <FormControl sx={{ minWidth:{md:"50%", sm:"80%", xs:"100%"} }}>
                <TextField
                    size="small"
                    name="name"
                    id="name" label="نام سرور پشتیبان" variant="outlined"
                    sx={{ Width: "100%" }}
                    type="text"
                    value={name}
                    onChange={e => setName(e.target.value)}
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
            <p>نام میزبان </p>
            <FormControl sx={{ minWidth:{md:"50%", sm:"80%", xs:"100%"} }}>
                <TextField
                    size="small"
                    name="hostName"
                    id="hostName" label="نام میزبان " variant="outlined"
                    sx={{ Width: "100%" }}
                    type="text"
                    value={hostName}
                    onChange={e => setHostname(e.target.value)}
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
            <p>نوع</p>
            <FormControl sx={{ minWidth:{md:"50%", sm:"80%", xs:"100%"} }}>
                <InputLabel id="type">نوع</InputLabel>
                <Select
                    size="small"
                    name="type"
                    labelId="type"
                    id="type"
                    label="نوع"
                    sx={{ Width: "100%" }}
                    onChange={e => setType(e.target.value)}
                >
                    <MenuItem value="SSH">
                        SSH
                    </MenuItem>
                    <MenuItem value="FTP">
                        FTP
                    </MenuItem>
                </Select>
            </FormControl>

        </Box>

    </>);
}

export default RightContainer;