import { Box, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOs } from "../../../Redux/Actions/actions";
import Network from "./Net/Network";

const LeftContainer = ({ setOsId, internalIP, setInternalIP, tabs, setTabs, content, setContent }) => {

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
    return (<Box sx={{ flexDirection: "column", display: "flex", width:{md:"47%", sm:"100%", xs:"100%"}}}>
        <Box>

            <Network
                tabs={tabs}
                setTabs={setTabs}
                content={content}
                setContent={setContent}
            />
        </Box>

    </Box>);
}

export default LeftContainer;