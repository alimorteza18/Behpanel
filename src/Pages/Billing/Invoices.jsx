import { Box, Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Toolbar, Typography } from "@mui/material";
import { useEffect } from "react";
import { FaFileInvoice } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { getInvoices } from "../../Redux/Actions/actions";

const Invoices = () => {
    const dispatch = useDispatch();
    const invoices = useSelector(state => state.invoices);
    useEffect(() => {
        try {
            const fetchData = async () => {
                dispatch(getInvoices());
            }
            fetchData()
        } catch (e) {
            console.log(e);
        }
    }, []);

    const invoice = invoices.map((data) => ({
        "id": data.id,
        "userid": data.userId,
        "item": data.item,
        "date": new Intl.DateTimeFormat('FA-IR', { year: 'numeric', month: '2-digit', day: '2-digit' }).format(data.invoiceDate),
        "amount": data.amount,
        "discount": data.discount,

    }))
    return (<><Toolbar disableGutters>
        <FaFileInvoice style={{ width: "1.7rem", height: "1.7rem", }} />
        <Typography variant='h6' sx={{ ml: 1 }}>
            لیست  فاکتور ها
        </Typography>
    </Toolbar>
    <TableContainer sx={{ width: { md: "100%", xs: "88vw", sm: "100%" }, mt: 4 }} component={Paper}>
            <Table sx={{ minWidth: { xs: "1200px", md: 650, sm: 650 } }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>شناسه</TableCell>
                        <TableCell>شناسه کاربر</TableCell>
                        <TableCell>مورد</TableCell>
                        <TableCell>تاریخ</TableCell>
                        <TableCell>میزان پرداخت</TableCell>
                        <TableCell>تخفیف</TableCell>
                        <TableCell>وضعیت پرداخت</TableCell>
                        <TableCell>نمایش فاکتور</TableCell>

                    </TableRow>
                </TableHead>
                <TableBody>
                    {invoice.map(data =>
                        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <TableCell>{data.id}</TableCell>
                            <TableCell>{data.userid}</TableCell>
                            <TableCell>{data.item}</TableCell>
                            <TableCell>{data.date}</TableCell>
                            <TableCell>{data.amount}</TableCell>
                            <TableCell>{data.discount}</TableCell>
                            <TableCell><Box  sx={{backgroundColor: data.paymented === true ? "green" : "crimson",
                             color:"white",
                             padding:1,
                             borderRadius:"18px",
                             width:100,
                             display:"flex",
                             alignItems:"center",
                             justifyContent:"center"

                             }}>
                                {data.paymented === true ? "پرداخت شده" : "پرداخت نشده"}
                                </Box></TableCell>
                                <TableCell><Button variant="contained" sx={{backdroundColor:"primary"}}>نمایش فاکتور</Button></TableCell>
                        </TableRow>

                    )}
                </TableBody>
            </Table>
        </TableContainer>
    </>);
}

export default Invoices;
