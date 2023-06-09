import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField, Toolbar, Typography } from "@mui/material";
import { useState } from "react";
import { FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";
import { createUser } from "../../Services/contactService";

const CreateUser = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState(1);
    const [mobile, setMobile] = useState("");
    const [name, setName] = useState("");
    const admin = 1;
    const user = 2;

    const handleSubmit = async event => {
        event.preventDefault();
        const items = { username, password, role, mobile, name };
        try {
            const { status } = await createUser(JSON.stringify(items));
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
            <FaUsers style={{ width: "1.7rem", height: "1.7rem", }} />
            <Typography variant='h6' sx={{ ml: 1 }}>
                افزودن کاربر جدید
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
                <p>ایمیل کاربر</p>
                <FormControl sx={{ minWidth:{md:"50%", sm:"80%", xs:"100%"} }}>
                    <TextField
                        size="small"
                        label="ایمیل"
                        name="username"
                        id="username" variant="outlined"
                        sx={{ Width: "100%" }}
                        type="text"
                        value={username}
                        onChange={e => setUsername(e.target.value)}
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
                <p>رمز عبور</p>
                <FormControl sx={{ minWidth:{md:"50%", sm:"80%", xs:"100%"} }}>
                    <TextField
                        size="small"
                        label="رمز عبور"
                        name="password"
                        id="password" variant="outlined"
                        sx={{ Width: "100%" }}
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
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
                <p>نام</p>
                <FormControl sx={{ minWidth:{md:"50%", sm:"80%", xs:"100%"} }}>
                    <TextField
                        size="small"
                        label="نام"
                        name="name"
                        id="name" variant="outlined"
                        sx={{ Width: "100%" }}
                        type="text"
                        value={name}
                        onChange={e => setName(e.target.value)}
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
                <p>شماره موبایل</p>
                <FormControl sx={{ minWidth:{md:"50%", sm:"80%", xs:"100%"} }}>
                    <TextField
                        size="small"
                        label="موبایل"
                        name="mobile"
                        id="mobile" variant="outlined"
                        sx={{ Width: "100%" }}
                        type="text"
                        value={mobile}
                        onChange={e => setMobile(e.target.value)}
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
                <p>نوع کاربر</p>
                <FormControl sx={{ minWidth:{md:"50%", sm:"80%", xs:"100%"} }}>
                    <InputLabel id="serverId">نوع کاربر</InputLabel>
                    <Select
                        size="small"
                        name="role"
                        labelId="role"
                        id="role"
                        label="انتخاب سرور"
                        onChange={e => setRole(e.target.value)}
                        sx={{ Width: "100%" }}
                    >
                        <MenuItem value={admin}>
                            ادمین
                        </MenuItem>
                        <MenuItem value={user}>
                            کاربر
                        </MenuItem>
                    </Select>
                </FormControl>
            </Box>
            <div className='submit-container'>
                <Button color='secondary' type='submit' variant="contained">ایجاد کاربر </Button>
            </div>
        </Box>
    </>);
}

export default CreateUser;