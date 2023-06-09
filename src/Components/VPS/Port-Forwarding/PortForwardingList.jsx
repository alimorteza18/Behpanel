import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getPort } from "../../../Redux/Actions/actions";
import {portTableData} from '../../../data/portTableData'
import { useEffect } from "react";
import { CheckBox } from "@mui/icons-material";

const PortForwardingList = () => {

    const dispatch = useDispatch();
    const port = useSelector(state => state.port);
    useEffect(() => {
        try {
            const fetchData = async () => {
                dispatch(getPort());
            }
            fetchData()
        } catch (e) {
            console.log(e);
        }
    }, []);
    return (
        <TableContainer sx={{ width: { md: "100%", xs: "88vw", sm: "100%" } }} component={Paper}>
            <Table sx={{ minWidth: { xs: "1200px", md: 650, sm: 650 } }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        {portTableData.map((item, index) => (
                            <TableCell key={index}>{item.title}</TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {port.map(data =>
                        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <TableCell>{data.id}</TableCell>
                            <TableCell>{data.from}</TableCell>
                            <TableCell>{data.to}</TableCell>
                            <TableCell>{data.description}</TableCell>
                            <TableCell><CheckBox/></TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default PortForwardingList;