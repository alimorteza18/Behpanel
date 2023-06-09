import { Box, FormControl, TextField } from "@mui/material";

const LeftContainer = ({ from, setFrom, to, setTo }) => {
    return (<>
        <Box sx={{
            width: { md: "65%", sm: "80%", xs: "100%", },
            flexDirection: { xs: "column", sm: "row", md: "row" },
            display: "flex",
            justifyContent: "space-between",
            alignItems: { xs: "flex-start", sm: "center", md: "center" },
            mt: 3,
        }}>
            <p>پورت مبدا</p>
            <FormControl sx={{ minWidth:{md:"50%", sm:"80%", xs:"100%"} }}>
                <TextField
                    size="small"
                    name="from"
                    id="from" label="پورت مبدا" variant="outlined"
                    sx={{ Width: "100%" }}
                    type="text"
                    value={from}
                    onChange={e => setFrom(e.target.value)}
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
            <p>پورت مقصد</p>
            <FormControl sx={{ minWidth:{md:"50%", sm:"80%", xs:"100%"} }}>
                <TextField
                    size="small"
                    name="to"
                    id="to" label="پورت مقصد" variant="outlined"
                    sx={{ Width: "100%" }}
                    type="text"
                    value={to}
                    onChange={e => setTo(e.target.value)}
                />
            </FormControl>
        </Box>

    </>);
}

export default LeftContainer;