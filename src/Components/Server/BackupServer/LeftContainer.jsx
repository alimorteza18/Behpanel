import { Box, FormControl, TextField } from "@mui/material";

const LeftContainer = ({ userName, setUsername, password, setPassword, port, setPort }) => {
    return (<>
        <Box sx={{
            width: { md: "65%", sm: "80%", xs: "100%", },
            flexDirection: { xs: "column", sm: "row", md: "row" },
            display: "flex",
            justifyContent: "space-between",
            alignItems: { xs: "flex-start", sm: "center", md: "center" },
            mt: 3,
        }}>
            <p>نام کاربری</p>
            <FormControl sx={{ minWidth:{md:"50%", sm:"80%", xs:"100%"} }}>
                <TextField
                    size="small"
                    name="userName"
                    id="userName" label="نام کاربری" variant="outlined"
                    sx={{ Width: "100%" }}
                    type="text"
                    value={userName}
                    onChange={e => setUsername(e.target.value)}
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
            <p>رمز عبور</p>
            <FormControl sx={{ minWidth:{md:"50%", sm:"80%", xs:"100%"} }}>
                <TextField
                    size="small"
                    name="password"
                    id="password" label="رمز عبور" variant="outlined"
                    sx={{ Width: "100%" }}
                    type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
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
            <p>Port</p>
            <FormControl sx={{ minWidth:{md:"50%", sm:"80%", xs:"100%"} }}>
                <TextField
                    size="small"
                    name="port"
                    id="port" label="Port" variant="outlined"
                    sx={{ Width: "100%" }}
                    type="number"
                    value={port}
                    onChange={e => setPort(e.target.value)}
                />
            </FormControl>
        </Box>
    </>);
}

export default LeftContainer;