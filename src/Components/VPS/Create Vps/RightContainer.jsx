import { Box, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOs, getServer, getUser } from "../../../Redux/Actions/actions";
import Network from "./Net/Network";


const RightContainer = ({
    setServerId,
    setUserId,
    setOsId,
    setHostName,
    hostName,
    setRootPassword,
    rootPassword,
    setDomainNameServer,
    domainNameServer,
    tabs,
    setTabs,
    content,
    setContent,
    interFace,
    userId
}) => {

    const dispatch = useDispatch();
    const server = useSelector(state => state.server);
    const user = useSelector(state => state.user);
    const os = useSelector(state => state.os);
    useEffect(() => {
        try {
            const fetchData = async () => {
                dispatch(getServer());
                dispatch(getUser());
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
                <InputLabel id="server">انتخاب سرور</InputLabel>
                <Select
                    size="small"
                    name="serverId"
                    labelId="server"
                    id="server"
                    label="انتخاب سرور"
                    onChange={e => setServerId(e.target.value)}
                >
                    {server.map((data) => (
                        <MenuItem value={data.serid}>
                            {data.serverName} ({data.ip})
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
            <FormControl sx={{ minWidth: 80, mt: 3, }}>
                <InputLabel id="user">انتخاب کاربر</InputLabel>
                <Select
                    size="small"
                    name="userId"
                    labelId="user"
                    id="user"
                    label="انتخاب کاربر"
                    onChange={e => setUserId(e.target.value)}
                >
                    {user.map(data =>
                        <MenuItem value={data.uid}>
                            {data.name}
                        </MenuItem>
                    )}
                </Select>
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
                    name="hostName"
                    id="hostname" label="نام میزبان" variant="outlined"
                    type="text"
                    value={hostName}
                    onChange={e => setHostName(e.target.value)}
                />
            </FormControl>
            <FormControl sx={{ minWidth: 80, mt: 3, }}>
                <TextField
                    size="small"
                    name="rootPassword"
                    id="vpsrootpassword" label="VPS Root Password" variant="outlined"
                    type="text"
                    value={rootPassword}
                    onChange={e => setRootPassword(e.target.value)}
                />
            </FormControl>
            <fieldset style={{ display: "flex", flexDirection: "column", marginTop: "32px" }}>
                <legend>تنظیمات شبکه</legend>
                <Network
                    tabs={tabs}
                    setTabs={setTabs}
                    content={content}
                    setContent={setContent}
                    interFace={interFace}
                />
            </fieldset>
            <fieldset style={{ display: "flex", flexDirection: "column", marginTop: "32px" }}>
                <legend>DNS</legend>
                <FormControl sx={{ minWidth: 80,}}>
                    <TextField
                        size="small"
                        name="domainNameServer"
                        id="dns" label="DNS" variant="outlined"
                        type="text"
                        value={domainNameServer}
                        onChange={e => setDomainNameServer(e.target.value)}
                    />
                </FormControl>
            </fieldset>

        </Box>
    );
}

export default RightContainer;