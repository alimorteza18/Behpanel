import { Box, Button, FormControl, TextField, Toolbar, Typography } from "@mui/material";
import { useState } from "react";
import { RiListSettingsLine } from "react-icons/ri"
import Swal from "sweetalert2";
import { setting } from "../../Services/contactService";
const Setting = () => {
    const [key, setKey] = useState("");
    const [value, setValue] = useState("");

    const handleSubmit = async event => {
        event.preventDefault();
        const items = { key, value };
        try {
            const { status } = await setting(JSON.stringify(items));
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
            <RiListSettingsLine style={{ width: "1.7rem", height: "1.7rem", }} />
            <Typography variant='h6' sx={{ ml: 1 }}>
                تنظیمات
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
                <p>کلید</p>
                <FormControl sx={{ minWidth:{md:"50%", sm:"80%", xs:"100%"} }}>
                    <TextField
                        size="small"
                        label="کلید"
                        name="key"
                        id="key" variant="outlined"
                        sx={{ Width: "100%" }}
                        type="text"
                        value={key}
                        onChange={e => setKey(e.target.value)}
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
                <p>مقدار</p>
                <FormControl sx={{ minWidth:{md:"50%", sm:"80%", xs:"100%"} }}>
                    <TextField
                        size="small"
                        label="مقدار"
                        name="value"
                        id="value" variant="outlined"
                        sx={{ Width: "100%" }}
                        type="text"
                        value={value}
                        onChange={e => setValue(e.target.value)}
                    />
                </FormControl>

            </Box>
            <div className='submit-container'>
                <Button color='secondary' type='submit' variant="contained">ثبت نظیمات </Button>
            </div>
        </Box>
    </>);
}

export default Setting;