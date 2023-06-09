import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField, Toolbar, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { BiCreditCard } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { getUser } from "../../Redux/Actions/actions";
import { createTransaction } from "../../Services/contactService";
import { toTimestamp } from '../../Utils/toTimestamp'
const Createtransaction = () => {
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
    const [userId, setUserId] = useState();
    const [date, setDate] = useState(toTimestamp(localToday));
    const [gateway, setGateway] = useState("");
    const [amount, setAmount] = useState();
    const [fees, setFees] = useState();
    const [netAmount, setNetAmount] = useState();
    const [paymentToken, setPaymentToken] = useState("");

    const handleSubmit = async event => {
        event.preventDefault();
        const items = {userId, amount, netAmount, date, gateway, fees, paymentToken };
        try {
            const { status } = await createTransaction(JSON.stringify(items));
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
            <BiCreditCard style={{ width: "1.7rem", height: "1.7rem", }} />
            <Typography variant='h6' sx={{ ml: 1 }}>
                صدور تراکنش
            </Typography>
        </Toolbar>
        <Box component="form" onSubmit={handleSubmit}>
            <Box sx={{
                width: { md: "61%", sm: "80%", xs: "85vw", },
                flexDirection: { xs: "column", sm: "row", md: "row" },
                display: "flex",
                justifyContent: "space-between",
                alignItems: { xs: "flex-start", sm: "center", md: "center" },
                mt: 3,
            }}>
                <p>انتخاب کاربر</p>
                <FormControl sx={{ minWidth: 80, }}>
                    <InputLabel id="userId">انتخاب کاربر</InputLabel>
                    <Select
                        size="small"
                        name="userId"
                        labelId="userId"
                        id="userId"
                        label="انتخاب کاربر"
                        sx={{ minWidth: { xs: 330, sm: 330, md: 400 } }}
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
                width: { md: "61%", sm: "82%", xs: "85vw", },
                flexDirection: { xs: "column", sm: "row", md: "row" },
                display: "flex",
                justifyContent: "space-between",
                alignItems: { xs: "flex-start", sm: "center", md: "center" },
                mt: 3,
            }}>
                <p>تاریخ </p>
                <FormControl sx={{ minWidth: 80 }}>
                    <TextField
                        size="small"
                        label={persianDate}
                        variant="outlined"
                        sx={{ minWidth: { xs: 330, sm: 330, md: 400 } }}
                        type="text"
                        disabled
                    />
                </FormControl>

            </Box>
            <Box sx={{
                width: { md: "61%", sm: "82%", xs: "85vw", },
                flexDirection: { xs: "column", sm: "row", md: "row" },
                display: "flex",
                justifyContent: "space-between",
                alignItems: { xs: "flex-start", sm: "center", md: "center" },
                mt: 3,
            }}>
                <p>دروازه</p>
                <FormControl sx={{ minWidth: 80 }}>
                    <TextField
                        size="small"
                        label="دروازه"
                        variant="outlined"
                        name="gateway"
                        value={gateway}
                        onChange={e => setGateway(e.target.value)}
                        sx={{ minWidth: { xs: 330, sm: 330, md: 400 } }}
                        type="text"
                    />
                </FormControl>

            </Box>
            <Box sx={{
                width: { md: "61%", sm: "82%", xs: "85vw", },
                flexDirection: { xs: "column", sm: "row", md: "row" },
                display: "flex",
                justifyContent: "space-between",
                alignItems: { xs: "flex-start", sm: "center", md: "center" },
                mt: 3,
            }}>
                <p>میزان</p>
                <FormControl sx={{ minWidth: 80 }}>
                    <TextField
                        size="small"
                        label="میزان"
                        variant="outlined"
                        name="amount"
                        value={amount}
                        onChange={e => setAmount(e.target.value)}
                        sx={{ minWidth: { xs: 330, sm: 330, md: 400 } }}
                        type="number"
                    />
                </FormControl>

            </Box>
            <Box sx={{
                width: { md: "61%", sm: "82%", xs: "85vw", },
                flexDirection: { xs: "column", sm: "row", md: "row" },
                display: "flex",
                justifyContent: "space-between",
                alignItems: { xs: "flex-start", sm: "center", md: "center" },
                mt: 3,
            }}>
                <p>میزان خالص</p>
                <FormControl sx={{ minWidth: 80 }}>
                    <TextField
                        size="small"
                        label="میزان خالص"
                        variant="outlined"
                        name="netAmount"
                        value={netAmount}
                        onChange={e => setNetAmount(e.target.value)}
                        sx={{ minWidth: { xs: 330, sm: 330, md: 400 } }}
                        type="number"
                    />
                </FormControl>
            </Box>
            <Box sx={{
                width: { md: "61%", sm: "82%", xs: "85vw", },
                flexDirection: { xs: "column", sm: "row", md: "row" },
                display: "flex",
                justifyContent: "space-between",
                alignItems: { xs: "flex-start", sm: "center", md: "center" },
                mt: 3,
            }}>
                <p>هزینه ها</p>
                <FormControl sx={{ minWidth: 80 }}>
                    <TextField
                        size="small"
                        label="هزینه ها"
                        variant="outlined"
                        name="fees"
                        value={fees}
                        onChange={e => setFees(e.target.value)}
                        sx={{ minWidth: { xs: 330, sm: 330, md: 400 } }}
                        type="number"
                    />
                </FormControl>

            </Box>
            <Box sx={{
                width: { md: "61%", sm: "82%", xs: "85vw", },
                flexDirection: { xs: "column", sm: "row", md: "row" },
                display: "flex",
                justifyContent: "space-between",
                alignItems: { xs: "flex-start", sm: "center", md: "center" },
                mt: 3,
            }}>
                <p>رمز پرداخت</p>
                <FormControl sx={{ minWidth: 80 }}>
                    <TextField
                        size="small"
                        label="رمز پرداخت"
                        variant="outlined"
                        name="paymentToken"
                        value={paymentToken}
                        onChange={e => setPaymentToken(e.target.value)}
                        sx={{ minWidth: { xs: 330, sm: 330, md: 400 } }}
                        type="text"
                    />
                </FormControl>

            </Box>
            <div className='submit-container'>
                <Button color='secondary' type='submit' variant="contained">صدور  تراکنش </Button>
            </div>
        </Box>
    </>);
}

export default Createtransaction;