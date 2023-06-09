import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Toolbar, Typography } from "@mui/material";
import { BsServer } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { getBackupServer } from "../../Redux/Actions/actions";
import {backupServerTableData} from "../../data/backupServerTableData"
import { CheckBox } from "@mui/icons-material";
import { useEffect } from "react";

const BackupServer = () => {

    const dispatch = useDispatch();
    const backupServer = useSelector(state => state.backupServer);
    useEffect(() => {
        try {
            const fetchData = async () => {
                dispatch(getBackupServer());
            }
            fetchData()
        } catch (e) {
            console.log(e);
        }
    }, []);
    return (<>
        <Toolbar disableGutters>
            <BsServer style={{ width: "1.5rem", height: "1.5rem", }} />
            <Typography variant='h6' sx={{ ml: 1 }}>
                سرور های پشتیبان
            </Typography>
        </Toolbar>
        <TableContainer sx={{ width: { md: "100%", xs: "88vw", sm: "100%" } }} component={Paper}>
            <Table sx={{ minWidth: { xs: "1200px", md: 650, sm: 650 } }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        {backupServerTableData.map((item, index) => (
                            <TableCell key={index}>{item.title}</TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {backupServer.map(data =>
                        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <TableCell>{data.bid}</TableCell>
                            <TableCell>{data.name}</TableCell>
                            <TableCell>{data.type}</TableCell>
                            <TableCell>{data.hostname}</TableCell>
                            <TableCell>{data.username}</TableCell>
                            <TableCell>{data.port}</TableCell>
                            <TableCell> <CheckBox/> </TableCell>
                            
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </TableContainer>
    </>);
}

export default BackupServer;