import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Toolbar, Typography } from "@mui/material";
import { useEffect } from "react";
import { FaFileInvoice } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { getRules } from "../../Redux/Actions/actions";

const Rulesprice = () => {

    const dispatch = useDispatch();
    const rules = useSelector(state => state.rules);
    useEffect(() => {
        try {
            const fetchData = async () => {
                dispatch(getRules());
            }
            fetchData()
        } catch (e) {
            console.log(e);
        }
    }, []);
    return (<>
        <Toolbar disableGutters>
            <FaFileInvoice style={{ width: "1.7rem", height: "1.7rem", }} />
            <Typography variant='h6' sx={{ ml: 1 }}>
                تنظیمات صورت حساب
            </Typography>
        </Toolbar>
        <TableContainer sx={{ width: { md: "100%", xs: "88vw", sm: "100%" }, mt: 4 }} component={Paper}>
            <Table sx={{ minWidth: { xs: "1200px", md: 650, sm: 650 } }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>شناسه</TableCell>
                        <TableCell>عنوان</TableCell>
                        <TableCell>واحد</TableCell>
                        <TableCell>قیمت</TableCell>

                    </TableRow>
                </TableHead>
                <TableBody>
                    {rules.map(data =>
                        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <TableCell>{data.rpid}</TableCell>
                            <TableCell>{data.title}</TableCell>
                            <TableCell>{data.unit}</TableCell>
                            <TableCell>{data.price}</TableCell>
                        </TableRow>

                    )}
                </TableBody>
            </Table>
        </TableContainer>
    </>);
}

export default Rulesprice;