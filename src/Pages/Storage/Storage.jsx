import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Toolbar, Typography } from "@mui/material";
import { useEffect } from "react";
import { MdOutlineSdStorage } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { getStorage } from "../../Redux/Actions/actions";
import {storageTableData} from '../../data/storageTableData'
import { CheckBox } from "@mui/icons-material";


const Storage = () => {

    const dispatch = useDispatch();
    const storage = useSelector(state => state.storage);
    useEffect(() => {
        try {
            const fetchData = async () => {
                dispatch(getStorage());
            }
            fetchData()
        } catch (e) {
            console.log(e);
        }
    }, []);
    return (<>
        <Toolbar disableGutters>
            <MdOutlineSdStorage style={{ width: "1.5rem", height: "1.5rem", }} />
            <Typography variant='h6' sx={{ ml: 1 }}>
                ذخیره ساز ها
            </Typography>
        </Toolbar>
        <TableContainer sx={{ width: { md: "100%", xs: "88vw", sm: "100%" } }} component={Paper}>
            <Table sx={{ minWidth: { xs: "1200px", md: 650, sm: 650 } }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        {storageTableData.map((item, index) => (
                            <TableCell key={index}>{item.title}</TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {storage.map(data =>
                        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <TableCell>{data.stid}</TableCell>
                            <TableCell>{data.name}</TableCell>
                            <TableCell>{data.serverName}</TableCell>
                            <TableCell>{data.type}</TableCell>
                            <TableCell>{data.path}</TableCell>
                            <TableCell>{data.primaryStorage === true ? "Yes" : "No"}</TableCell>
                            <TableCell><CheckBox/></TableCell>
                
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </TableContainer>
    </>);
}

export default Storage;