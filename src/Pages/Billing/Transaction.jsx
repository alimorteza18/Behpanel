import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Toolbar, Typography } from "@mui/material";
import { useEffect } from "react";
import { BiCreditCard } from "react-icons/bi"
import { useDispatch, useSelector } from "react-redux";
import { getTransaction } from "../../Redux/Actions/actions";
const Transaction = () => {
    const dispatch = useDispatch();
    const transaction = useSelector(state => state.transaction);
    useEffect(() => {
        try {
            const fetchData = async () => {
                dispatch(getTransaction());
            }
            fetchData()
        } catch (e) {
            console.log(e);
        }
    }, []);
    const Transaction = transaction.map((data) => ({
        "id": data.id,
        "userid": data.userId,
        "username": data.userName,
        "date": new Intl.DateTimeFormat('FA-IR', { year: 'numeric', month: '2-digit', day: '2-digit' }).format(data.date * 1000),
        "amount": data.amount,
        "fees": data.fees,

    }))
    return (<>
        <Toolbar disableGutters>
            <BiCreditCard style={{ width: "1.7rem", height: "1.7rem", }} />
            <Typography variant='h6' sx={{ ml: 1 }}>
                لیست تراکنش ها
            </Typography>
        </Toolbar>
        <TableContainer sx={{ width: { md: "100%", xs: "88vw", sm: "100%" }, mt: 4 }} component={Paper}>
            <Table sx={{ minWidth: { xs: "1200px", md: 650, sm: 650 } }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>شناسه</TableCell>
                        <TableCell>شناسه کاربر</TableCell>
                        <TableCell>نام کاربری</TableCell>
                        <TableCell>تاریخ تراکنش</TableCell>
                        <TableCell>میزان پرداخت</TableCell>
                        <TableCell>هزینه ها</TableCell>
                    

                    </TableRow>
                </TableHead>
                <TableBody>
                    {Transaction.map(data =>
                        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <TableCell>{data.id}</TableCell>
                            <TableCell>{data.userid}</TableCell>
                            <TableCell>{data.username}</TableCell>
                            <TableCell>{data.date}</TableCell>
                            <TableCell>{data.amount}</TableCell>
                            <TableCell>{data.fees} ریال</TableCell>
                        </TableRow>

                    )}
                </TableBody>
            </Table>
        </TableContainer>
    </>);
}

export default Transaction;