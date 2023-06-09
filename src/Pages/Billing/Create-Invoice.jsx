import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField, Toolbar, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { FaFileInvoice } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { getUser } from "../../Redux/Actions/actions";
import { createInvoice } from "../../Services/contactService";
import { toTimestamp } from '../../Utils/toTimestamp'
const Createinvoice = () => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.user);


    useEffect(() => {
        try {
            const fetchData = async () => {
                dispatch(getUser());
            }
            fetchData()
        } catch (e) {
            console.log(e);
        }
    }, []);
    const localToday = new Date().toLocaleDateString();
    const persianDate = new Date().toLocaleDateString("FA-IR")

    const myCurrentDate = new Date();
    const myFutureDate = new Date(myCurrentDate);
    myFutureDate.setDate(myFutureDate.getDate() + 30);
    const myDuenDate = myFutureDate.toLocaleDateString();
    const persianToday = myFutureDate.toLocaleDateString("FA-IR")


    const [userId, setUserId] = useState();
    const [invioceDate, setInvioceDate] = useState(toTimestamp(localToday));
    const [dueDate, setDueDate] = useState(toTimestamp(myDuenDate));
    const [payDate, setPayDate] = useState(toTimestamp(localToday));
    const [item, setItem] = useState("");
    const [itemDesc, setItemDesc] = useState("");
    const [amount, setAmount] = useState();
    const [discount, setDiscount] = useState();
    const [netAmount, setNetAmount] = useState();
    const [paymentToken, setPaymentToken] = useState();
    const handleSubmit = async event => {
        event.preventDefault();
        const items = { userId, invioceDate, dueDate, payDate, item, itemDesc, amount, discount, netAmount, };
        try {
            const { status } = await createInvoice(JSON.stringify(items));
            if (status === 200) {
                Swal.fire({
                    icon: 'success',
                    title: 'موفقیت آمیز بود',
                    text: 'در خواست شما با موفقیت انجام شد !',
                    type: 'success',
                    confirmButtonText: 'متوجه شدم'
                })
            }

        } catch (err) {
            Swal.fire({
                icon: 'error',
                title: 'خطا !',
                text: 'مشکلی پیش آمده لطفا دوباره تلاش کنید !',
                type: 'error',
                confirmButtonText: 'متوجه شدم',
            })
            console.log(err)
        }

    }
    return (<>
        <Toolbar disableGutters>
            <FaFileInvoice style={{ width: "1.7rem", height: "1.7rem", }} />
            <Typography variant='h6' sx={{ ml: 1 }}>
                صدور فاکتور
            </Typography>
        </Toolbar>
        <Box component="form" onSubmit={handleSubmit}>
            <Box sx={{
                 width: { md: "65%", sm: "80%", xs: "100%", },
                flexDirection: { xs: "column", sm: "row", md: "row" },
                display: "flex",
                justifyContent: "space-between",
                alignItems: { xs: "flex-start", sm: "center", md: "center" },
                mt: 3,
            }}>
                <p>انتخاب کاربر</p>
                <FormControl sx={{ minWidth:{md:"50%", sm:"80%", xs:"100%"} }}>
                    <InputLabel id="userId">انتخاب کاربر</InputLabel>
                    <Select
                        size="small"
                        name="userId"
                        labelId="userId"
                        id="userId"
                        label="انتخاب کاربر"
                        sx={{ Width: "100%" }}
                        onChange={e => setUserId(e.target.value)}
                    >
                        {user.map(data =>
                            <MenuItem value={data.uid}>
                                {data.name}
                            </MenuItem>
                        )}
                    </Select>
                </FormControl>
            </Box>
            <Box sx={{
                 width: { md: "65%", sm: "80%", xs: "100%", },
                flexDirection: { xs: "column", sm: "row", md: "row" },
                display: "flex",
                justifyContent: "space-between",
                alignItems: { xs: "flex-start", sm: "center", md: "center" },
                mt: 3,
            }}>
                <p>تاریخ فاکتور</p>
                <FormControl sx={{ minWidth:{md:"50%", sm:"80%", xs:"100%"} }}>
                    <TextField
                        size="small"
                        label={persianDate}
                        variant="outlined"
                        sx={{ Width: "100%" }}
                        type="text"
                        disabled
                    />
                </FormControl>

            </Box>
            <Box sx={{
                 width: { md: "65%", sm: "80%", xs: "100%", },
                flexDirection: { xs: "column", sm: "row", md: "row" },
                display: "flex",
                justifyContent: "space-between",
                alignItems: { xs: "flex-start", sm: "center", md: "center" },
                mt: 3,
            }}>
                <p>سر رسید</p>
                <FormControl sx={{ minWidth:{md:"50%", sm:"80%", xs:"100%"} }}>
                    <TextField
                        size="small"
                        label={persianToday}
                        variant="outlined"
                        sx={{ Width: "100%" }}
                        type="text"
                        disabled
                    />
                </FormControl>

            </Box>
            <Box sx={{
                 width: { md: "65%", sm: "80%", xs: "100%", },
                flexDirection: { xs: "column", sm: "row", md: "row" },
                display: "flex",
                justifyContent: "space-between",
                alignItems: { xs: "flex-start", sm: "center", md: "center" },
                mt: 3,
            }}>
                <p>تاریخ پرداخت</p>
                <FormControl sx={{ minWidth:{md:"50%", sm:"80%", xs:"100%"} }}>
                    <TextField
                        size="small"
                        label={persianDate}
                        variant="outlined"
                        sx={{ Width: "100%" }}
                        type="text"
                        disabled
                    />
                </FormControl>

            </Box>
            <Box sx={{
                 width: { md: "65%", sm: "80%", xs: "100%", },
                flexDirection: { xs: "column", sm: "row", md: "row" },
                display: "flex",
                justifyContent: "space-between",
                alignItems: { xs: "flex-start", sm: "center", md: "center" },
                mt: 3,
            }}>
                <p>مورد</p>
                <FormControl sx={{ minWidth:{md:"50%", sm:"80%", xs:"100%"} }}>
                    <TextField
                        size="small"
                        label="مورد"
                        variant="outlined"
                        name="item"
                        value={item}
                        onChange={e => setItem(e.target.value)}
                        sx={{ Width: "100%" }}
                        type="text"
                    />
                </FormControl>

            </Box>
            <Box sx={{
                 width: { md: "65%", sm: "80%", xs: "100%", },
                flexDirection: { xs: "column", sm: "row", md: "row" },
                display: "flex",
                justifyContent: "space-between",
                alignItems: { xs: "flex-start", sm: "center", md: "center" },
                mt: 3,
            }}>
                <p>توضیحات مورد</p>
                <FormControl sx={{ minWidth:{md:"50%", sm:"80%", xs:"100%"} }}>
                    <TextField
                        size="small"
                        label="توضیحات مورد"
                        variant="outlined"
                        name="itemDesc"
                        value={itemDesc}
                        onChange={e => setItemDesc(e.target.value)}
                        sx={{ Width: "100%" }}
                        type="text"
                    />
                </FormControl>
            </Box>
            <Box sx={{
                 width: { md: "65%", sm: "80%", xs: "100%", },
                flexDirection: { xs: "column", sm: "row", md: "row" },
                display: "flex",
                justifyContent: "space-between",
                alignItems: { xs: "flex-start", sm: "center", md: "center" },
                mt: 3,
            }}>
                <p>میزان</p>
                <FormControl sx={{ minWidth:{md:"50%", sm:"80%", xs:"100%"} }}>
                    <TextField
                        size="small"
                        label="میزان"
                        variant="outlined"
                        name="amount"
                        value={amount}
                        onChange={e => setAmount(e.target.value)}
                        sx={{ Width: "100%" }}
                        type="number"
                    />
                </FormControl>

            </Box>
            <Box sx={{
                 width: { md: "65%", sm: "80%", xs: "100%", },
                flexDirection: { xs: "column", sm: "row", md: "row" },
                display: "flex",
                justifyContent: "space-between",
                alignItems: { xs: "flex-start", sm: "center", md: "center" },
                mt: 3,
            }}>
                <p>تخفیف</p>
                <FormControl sx={{ minWidth:{md:"50%", sm:"80%", xs:"100%"} }}>
                    <TextField
                        size="small"
                        label="تخفیف"
                        variant="outlined"
                        name="discount"
                        value={discount}
                        onChange={e => setDiscount(e.target.value)}
                        sx={{ Width: "100%" }}
                        type="number"
                    />
                </FormControl>

            </Box>
            <Box sx={{
                width: { md: "65%", sm: "80%", xs: "100%", },
                flexDirection: { xs: "column", sm: "row", md: "row" },
                display: "flex",
                justifyContent: "space-between",
                alignItems: { xs: "flex-start", sm: "center", md: "center" },
                mt: 3,
            }}>
                <p>میزان خالص</p>
                <FormControl sx={{ minWidth:{md:"50%", sm:"80%", xs:"100%"} }}>
                    <TextField
                        size="small"
                        label="میزان خالص"
                        variant="outlined"
                        name="netAmount"
                        value={netAmount}
                        onChange={e => setNetAmount(e.target.value)}
                        sx={{ Width: "100%" }}
                        type="number"
                    />
                </FormControl>
            </Box>
            <div className='submit-container'>
                <Button color='secondary' type='submit' variant="contained">صدور  فاکتور </Button>
            </div>
        </Box>
    </>);
}

export default Createinvoice;