import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Toolbar, Typography } from "@mui/material";
import { useEffect } from "react";
import { GiNotebook } from "react-icons/gi";
import { useDispatch, useSelector } from "react-redux";
import {plansData} from "../../data/data";
import { getPlans } from "../../Redux/Actions/actions";
const Plans = () => {

    const dispatch = useDispatch();
    const plans = useSelector(state => state.plans);
    useEffect(() => {
        try {
            const fetchData = async () => {
                dispatch(getPlans());
            }
            fetchData()
        } catch (e) {
            console.log(e);
        }
    }, []);
    return (<>
        <Toolbar disableGutters>
            <GiNotebook style={{ width: "1.7rem", height: "1.7rem", }} />
            <Typography variant='h6' sx={{ ml: 1 }}>
                پلن ها
            </Typography>
        </Toolbar>

        <TableContainer sx={{ width: { md: "100%", xs: "88vw", sm: "100%" }, mt: 4 }} component={Paper}>
            <Table sx={{ minWidth: { xs: "1200px", md: 650, sm: 650 } }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        {plansData.map((item, index) => (
                            <TableCell key={index}>{item.title}</TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {plans.map(data =>
                        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <TableCell>{data.plid}</TableCell>
                            <TableCell>{data.planName}</TableCell>
                            <TableCell>{data.space} GB</TableCell>
                            <TableCell>{data.bandwidth}</TableCell>
                            <TableCell>{data.ram}</TableCell>
                            <TableCell>{data.cpu}</TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </TableContainer>
    </>);
}

export default Plans;