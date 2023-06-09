import { Box, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material";
const Net = ({ ip, prefix, setTabs, tabs, index, gateway, name, networkType }) => {


    return (<>
        <Box style={{ marginTop: "16px", width: "100%", display: "flex", alignItems: "center" }} >
            <FormControl sx={{ m: 1, minWidth: 270 }} size="small">
                <InputLabel>نوع اتصال را مشخص کنید</InputLabel>
                <Select label="نوع اتصال را مشخص کنید" type="text" name="networkType" onChange={e => {
                    const newTabs = tabs.map((obj, i) => {
                        // 👇️ if id equals 2, update country property
                        if (i === index) {
                            return { ...obj, networkType: e.target.value };
                        }
                        // 👇️ otherwise return object as is
                        return obj;
                    });
                    setTabs(newTabs)
                }}  >
                    <MenuItem value="Bridge">Bridge</MenuItem>
                    <MenuItem value="Nat">Nat</MenuItem>
                </Select>
            </FormControl>
        </Box>
        {
            networkType === "Bridge" ?
                <div style={{ marginTop: "16px" }}>
                    <Box style={{ marginTop: "16px", width: "100%", display: "flex", alignItems: "center" }} >
                    <FormControl>
                            <TextField sx={{ m: 1, minWidth: 270 }} label="نام" size="small" value={name} name="name"
                                onChange={e => {
                                    const newTabs = tabs.map((obj, i) => {
                                        // 👇️ if id equals 2, update country property
                                        if (i === index) {
                                            return { ...obj, name: e.target.value };
                                        }
                                        // 👇️ otherwise return object as is
                                        return obj;
                                    });
                                    setTabs(newTabs)
                                }}
                            />
                        </FormControl>
                    </Box>
                    <div style={{ width: "100%", display: "flex", alignItems: "center", marginTop: "16px" }}>
                        <FormControl sx={{ m: 1, maxWidth: 70 }} >
                            <TextField
                                name="prefix"
                                label="Prefix"
                                type="text"
                                value={prefix}
                                size="small"
                                onChange={e => {
                                    const newTabs = tabs.map((obj, i) => {
                                        // 👇️ if id equals 2, update country property
                                        if (i === index) {
                                            return { ...obj, prefix: e.target.value };
                                        }
                                        // 👇️ otherwise return object as is
                                        return obj;
                                    });
                                    setTabs(newTabs)
                                }}
                            />
                        </FormControl>
                        <Typography variant="h5">-</Typography>
                        <FormControl sx={{ m: 1, maxWidth: 176 }}>
                            <TextField
                                name="ip"
                                value={ip}
                                size="small"
                                onChange={e => {
                                    const newTabs = tabs.map((obj, i) => {
                                        // 👇️ if id equals 2, update country property
                                        if (i === index) {
                                            return { ...obj, ip: e.target.value };
                                        }
                                        // 👇️ otherwise return object as is
                                        return obj;
                                    });
                                    setTabs(newTabs)
                                }}
                                label="آدرس IP"
                            />
                        </FormControl>
                    </div>
                    <Box style={{ marginTop: "16px", width: "100%", display: "flex", alignItems: "center" }}>
                        <FormControl>
                            <TextField sx={{ m: 1, minWidth: 270 }} label="Gateway" size="small" value={gateway} name="gateway"
                                onChange={e => {
                                    const newTabs = tabs.map((obj, i) => {
                                        // 👇️ if id equals 2, update country property
                                        if (i === index) {
                                            return { ...obj, gateway: e.target.value };
                                        }
                                        // 👇️ otherwise return object as is
                                        return obj;
                                    });
                                    setTabs(newTabs)
                                }}
                            />
                        </FormControl>
                    </Box>
                </div> : null
        }
    </>);
}

export default Net;