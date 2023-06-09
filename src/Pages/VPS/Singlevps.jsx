import { Box, Button, FormControl, InputLabel, LinearProgress, MenuItem, Select, TextField, Toolbar, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { FaServer } from "react-icons/fa";
import { useParams } from "react-router";
import { toast, ToastContainer } from "react-toastify";
import styled from "styled-components";
import { SCRIPT_URL, SERVER_URL } from "../../Services/contactService";
import http from "../../Services/httpService";
import 'react-toastify/dist/ReactToastify.css';
import PropTypes from 'prop-types';
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../Redux/Actions/actions";

const Singlevps = () => {
    const [res, setres] = useState([]);
    const { id } = useParams();
    const [userId, setUserId] = useState();
    const [hostName, setHostName] = useState("");
    const [diskSpace, setDiskSpace] = useState();
    const [guaranteedRam, setGuaranteedRam] = useState();
    const [burstedRam, setBurstedRam] = useState();
    const [cpuUnits, setCpuUnits] = useState();
    const [cpuCores, setCpuCores] = useState();
    const [cpuPercentage, setCpuPercentage] = useState();
    const [cpu, setCpu] = useState(21);
    const [ram, setRam] = useState(12);
    const [disk, setDisk] = useState(21);
    const [bandwidth, setBandwidth] = useState(12);
    useEffect(() => {
        // create interval
        const interval = setInterval(
            // set number every 5s
            () => setCpu(Math.floor(Math.random() * 57.4 + 1)),
            1000
        );
        const interval1 = setInterval(
            // set number every 5s
            () => setRam(Math.floor(Math.random() * 54.7 + 1)),
            1000
        );
        const interval2 = setInterval(
            // set number every 5s
            () => setDisk(Math.floor(Math.random() * 54.7 + 1)),
            1000
        );
        const interval3 = setInterval(
            // set number every 5s
            () => setBandwidth(Math.floor(Math.random() * 54.7 + 1)),
            1000
        );

        // clean up interval on unmount
        return () => {
            clearInterval(interval);
            clearInterval(interval1);
            clearInterval(interval2);
            clearInterval(interval3);
        };

    }, []);
    const handleSubmit = async event => {
        event.preventDefault();
        const items = {
            userId,
            hostName,
            diskSpace: parseInt(diskSpace),
            guaranteedRam: parseInt(guaranteedRam),
            burstedRam: parseInt(burstedRam),
            cpuUnits: parseInt(cpuUnits),
            cpuCores: parseInt(cpuCores),
            cpuPercentage: parseInt(cpuPercentage)

        };
        try {
            const { status } = await http.put((`${SERVER_URL}/vps/edit/${id}`), items);
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
    useEffect(() => {
        try {
            async function fetchdata() {
                let res = await http.get(`${SERVER_URL}/vps/${id}`)
                setres(res.data)
                setHostName(res.data.hostname)
            }
            fetchdata()
        } catch (e) {
            console.log(e);
        }

    }, []);

    function LinearProgressWithLabel(props) {
        return (
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Box sx={{ width: '100%', mr: 1 }}>
                    <LinearProgress variant="determinate" {...props} />
                </Box>
                <Box sx={{ minWidth: 35 }}>
                    <Typography variant="body2" color="text.secondary">{`${Math.round(
                        props.value,
                    )}%`}</Typography>
                </Box>
            </Box>
        );
    }

    LinearProgressWithLabel.propTypes = {
        /**
         * The value of the progress indicator for the determinate and buffer variants.
         * Value between 0 and 100.
         */
        value: PropTypes.number.isRequired,
    };
    const startVps = async event => {
        let { status } = await http.post(`${SCRIPT_URL}/vps/${id}/start`);
        try {
            if (status === 200) {
                toast.success("موفقیت آمیز بود", {
                    position: "top-right",
                    closeOnClick: true
                });
            }
        } catch (ex) {
            console.log(ex)
            toast.error("مشکی پیش آمده دوباره تلاش کنید", {
                position: "top-right",
                closeOnClick: true
            });
        }
    }

    const stop = async event => {
        let { status } = await http.post(`${SCRIPT_URL}/vps/${id}/stop`);
        try {
            if (status === 200) {
                toast.success("موفقیت آمیز بود", {
                    position: "top-right",
                    closeOnClick: true
                });
            }
        } catch (ex) {
            console.log(ex)
            toast.error("مشکی پیش آمده دوباره تلاش کنید", {
                position: "top-right",
                closeOnClick: true
            });
        }
    }

    const restart = async event => {
        let { status } = await http.post(`${SCRIPT_URL}/vps/${id}/restart`);
        try {
            if (status === 200) {
                toast.success("موفقیت آمیز بود", {
                    position: "top-right",
                    closeOnClick: true
                });
            }
        } catch (ex) {
            console.log(ex)
            toast.error("مشکی پیش آمده دوباره تلاش کنید", {
                position: "top-right",
                closeOnClick: true
            });
        }
    }

    const poweroff = async event => {
        let { status } = await http.post(`${SCRIPT_URL}/vps/${id}/poweroff`);
        try {
            if (status === 200) {
                toast.success("موفقیت آمیز بود", {
                    position: "top-right",
                    closeOnClick: true
                });
            }
        } catch (ex) {
            console.log(ex)
            toast.error("مشکی پیش آمده دوباره تلاش کنید", {
                position: "top-right",
                closeOnClick: true
            });
        }
    }

    const suspend = async event => {
        let { status } = await http.post(`${SCRIPT_URL}/vps/${id}/suspend`);
        try {
            if (status === 200) {
                toast.success("موفقیت آمیز بود", {
                    position: "top-right",
                    closeOnClick: true
                });
            }
        } catch (ex) {
            console.log(ex)
            toast.error("مشکی پیش آمده دوباره تلاش کنید", {
                position: "top-right",
                closeOnClick: true
            });
        }
    }

    const unsuspend = async event => {
        let { status } = await http.post(`${SCRIPT_URL}/vps/${id}/unsuspend`);
        try {
            if (status === 200) {
                toast.success("موفقیت آمیز بود", {
                    position: "top-right",
                    closeOnClick: true
                });
            }
        } catch (ex) {
            console.log(ex)
            toast.error("مشکی پیش آمده دوباره تلاش کنید", {
                position: "top-right",
                closeOnClick: true
            });
        }
    }

    const downloadinf = async event => {
        let { status } = await http.post(`${SCRIPT_URL}/vps/${id}/downloadinf`);
        try {
            if (status === 200) {
                toast.success("موفقیت آمیز بود", {
                    position: "top-right",
                    closeOnClick: true
                });
            }
        } catch (ex) {
            console.log(ex)
            toast.error("مشکی پیش آمده دوباره تلاش کنید", {
                position: "top-right",
                closeOnClick: true
            });
        }
    }

    const networksuspend = async event => {
        let { status } = await http.post(`${SCRIPT_URL}/vps/${id}/networksuspend`);
        try {
            if (status === 200) {
                toast.success("موفقیت آمیز بود", {
                    position: "top-right",
                    closeOnClick: true
                });
            }
        } catch (ex) {
            console.log(ex)
            toast.error("مشکی پیش آمده دوباره تلاش کنید", {
                position: "top-right",
                closeOnClick: true
            });
        }
    }

    const networkunsuspend = async event => {
        let { status } = await http.post(`${SCRIPT_URL}/vps/${id}/networkunsuspend`);
        try {
            if (status === 200) {
                toast.success("موفقیت آمیز بود", {
                    position: "top-right",
                    closeOnClick: true
                });
            }
        } catch (ex) {
            console.log(ex)
            toast.error("مشکی پیش آمده دوباره تلاش کنید", {
                position: "top-right",
                closeOnClick: true
            });
        }
    }

    const resetbandwidth = async event => {
        let { status } = await http.post(`${SCRIPT_URL}/vps/${id}/resetbandwidth`);
        try {
            if (status === 200) {
                toast.success("موفقیت آمیز بود", {
                    position: "top-right",
                    closeOnClick: true
                });
            }
        } catch (ex) {
            console.log(ex)
            toast.error("مشکی پیش آمده دوباره تلاش کنید", {
                position: "top-right",
                closeOnClick: true
            });
        }
    }

    const sshkeys = async event => {
        let { status } = await http.post(`${SCRIPT_URL}/vps/${id}/sshkeys`);
        try {
            if (status === 200) {
                toast.success("موفقیت آمیز بود", {
                    position: "top-right",
                    closeOnClick: true
                });
            }
        } catch (ex) {
            console.log(ex)
            toast.error("مشکی پیش آمده دوباره تلاش کنید", {
                position: "top-right",
                closeOnClick: true
            });
        }
    }

    const lock = async event => {
        let { status } = await http.post(`${SCRIPT_URL}/vps/${id}/lock`);
        try {
            if (status === 200) {
                toast.success("موفقیت آمیز بود", {
                    position: "top-right",
                    closeOnClick: true
                });
            }
        } catch (ex) {
            console.log(ex)
            toast.error("مشکی پیش آمده دوباره تلاش کنید", {
                position: "top-right",
                closeOnClick: true
            });
        }
    }

    console.log(hostName)
    return (<>
        <ToastContainer style={{ zIndex: "9999999999999999", fontFamily: "Vazir" }} />
        <Toolbar disableGutters>
            <FaServer style={{ width: "1.5rem", height: "1.5rem", }} />
            <Typography variant='h6' sx={{ ml: 1 }}>
                مدیریت ماشین مجازی
            </Typography>
        </Toolbar>
        <Box sx={{
            display: "flex",
            flexWrap: "wrap",
            flexDirection: { sm: "column", md: "row", xs: "column" },
            justifyContent: "space-between",
            width: "100%"
        }}>
            <Box sx={{ flexDirection: "column", display: "flex", mt: 4, width: { md: "100%", xs: "100%", sm: "100%", lg: "47%" } }}>
                <Box sx={{ display: "flex", flexWrap: "wrap", flexDirection: "column", justifyContent: "space-between", }}>
                    <Box sx={{
                        width: "100%",
                        height: 30,
                        backgroundColor: "rgb(44 , 48 , 52)",
                        display: "flex",
                        alignItems: "center",
                        padding: 1,
                        boxSizing: "border-box",

                    }}>
                        <Typography sx={{ color: "white" }}>
                            مشخصات VPS
                        </Typography>
                    </Box>
                    <Box sx={{ width: "100%", height: 450, border: "1px solid black", display: "flex", flexWrap: "wrap", padding: 3, }}>
                        <Box sx={{ display: "flex", flexDirection: "column" }}>
                            <Box sx={{ display: "flex", flexDirection: "column", }}>
                                <Typography>سرور</Typography>
                                <Typography style={{ color: "grey" }}>{res.serverName}</Typography>
                            </Box>
                            <Box sx={{ display: "flex", flexDirection: "column", mt: 3 }}>
                                <Typography>ID</Typography>
                                <Typography style={{ color: "grey" }}>{res.vpsid}</Typography>
                            </Box>
                            <Box sx={{ display: "flex", flexDirection: "column", mt: 3 }}>
                                <Typography>تاریخ ایجاد VPS</Typography>
                                <Typography style={{ color: "grey" }}>N/A</Typography>
                            </Box>
                            <Box sx={{ display: "flex", flexDirection: "column", mt: 3 }}>
                                <Typography>آخرین ویرایش</Typography>
                                <Typography style={{ color: "grey" }}>N/A</Typography>
                            </Box>
                            <Box sx={{ display: "flex", flexDirection: "column", mt: 3 }}>
                                <Typography>سیستم عامل</Typography>
                                <Typography style={{ color: "grey" }}>{res.osName}</Typography>
                            </Box>
                        </Box>
                        <Box sx={{ display: "flex", flexDirection: "column", ml: { md: 17, sm: 17, xs: 4 } }}>
                            <Box sx={{ display: "flex", flexDirection: "column", }}>
                                <Typography>نام میزبان</Typography>
                                <Typography style={{ color: "grey" }}>{res.hostname}</Typography>
                            </Box>
                            <Box sx={{ display: "flex", flexDirection: "column", mt: 3 }}>
                                <Typography>حافظه رم</Typography>
                                <Typography style={{ color: "grey" }}>{res.ram} مگابایت</Typography>
                            </Box>
                            <Box sx={{ display: "flex", flexDirection: "column", mt: 3 }}>
                                <Typography>نام کاربر</Typography>
                                <Typography style={{ color: "grey" }}>{res.username} </Typography>
                            </Box>
                        </Box>
                    </Box>
                </Box>

                <Box sx={{ display: "flex", flexWrap: "wrap", flexDirection: "column", justifyContent: "space-between", mt: 4 }}>
                    <Box sx={{
                        width: "100%",
                        height: 30,
                        backgroundColor: "rgb(44 , 48 , 52)",
                        display: "flex",
                        alignItems: "center",
                        padding: 1,
                        boxSizing: "border-box",

                    }}>
                        <Typography sx={{ color: "white" }}>
                            مدیریت
                        </Typography>
                    </Box>
                    <Box sx={{ width: "100%", border: "1px solid black", display: "flex", flexWrap: "wrap", }}>
                        <Manage onClick={startVps}>
                            <img src="/s1.png" alt="" />
                            <Typography sx={{ color: "blue", mt: 1 }}>شروع</Typography>
                        </Manage>
                        <Manage onClick={stop}>
                            <img src="/s2.png" alt="" />
                            <Typography sx={{ color: "blue", mt: 1 }}>متوقف کردن</Typography>
                        </Manage>
                        <Manage onClick={restart}>
                            <img src="/s3.png" alt="" />
                            <Typography sx={{ color: "blue", mt: 1 }}>راه اندازی مجدد</Typography>
                        </Manage>
                        <Manage onClick={poweroff}>
                            <img src="/s4.png" alt="" />
                            <Typography sx={{ color: "blue", mt: 1 }}>خاموش</Typography>
                        </Manage>
                        <Manage onClick={suspend}>
                            <img src="/s5.png" alt="" />
                            <Typography sx={{ color: "blue", mt: 1 }}>تعلیق</Typography>
                        </Manage>
                        <Manage onClick={unsuspend}>
                            <img src="/s6.png" alt="" />
                            <Typography sx={{ color: "blue", mt: 1 }}>لغو تعلیق</Typography>
                        </Manage>
                        <Manage onClick={downloadinf}>
                            <img src="/s7.png" alt="" />
                            <Typography sx={{ color: "blue", mt: 1 }}>دانلود inf</Typography>
                        </Manage>
                        <Manage>
                            <img src="/s8.png" alt="" />
                            <Typography sx={{ color: "blue", mt: 1 }}>راه اندازی مجدد os</Typography>
                        </Manage>
                        <Manage onClick={networksuspend}>
                            <img src="/s9.png" alt="" />
                            <Typography sx={{ color: "blue", mt: 1 }}>تعلیق اینترنت</Typography>
                        </Manage>
                        <Manage onClick={networkunsuspend}>
                            <img src="/s10.png" alt="" />
                            <Typography sx={{ color: "blue", mt: 1 }}>لغو تعلیق اینترنت</Typography>
                        </Manage>
                        <Manage onClick={resetbandwidth}>
                            <img src="/s11.png" alt="" />
                            <Typography sx={{ color: "blue", mt: 1 }}>بازنشانی پهنای باند</Typography>
                        </Manage>
                        <Manage>
                            <img src="/s12.png" alt="" />
                            <Typography sx={{ color: "blue", mt: 1 }}>استفاده از منابع</Typography>
                        </Manage>
                        <Manage>
                            <img src="/s13.png" alt="" />
                            <Typography sx={{ color: "blue", mt: 1 }}>آدرس های ipv4</Typography>
                        </Manage>
                        <Manage>
                            <img src="/s14.png" alt="" />
                            <Typography sx={{ color: "blue", mt: 1 }}>نام میزبان</Typography>
                        </Manage>
                        <Manage>
                            <img src="/s15.png" alt="" />
                            <Typography sx={{ color: "blue", mt: 1 }}>تغیر رمز عبور</Typography>
                        </Manage>
                        <Manage>
                            <img src="/s16.png" alt="" />
                            <Typography sx={{ color: "blue", mt: 1 }}>تغیر کاربر</Typography>
                        </Manage>
                        <Manage>
                            <img src="/s17.png" alt="" />
                            <Typography sx={{ color: "blue", mt: 1 }}>IP اولیه</Typography>
                        </Manage>
                        <Manage onClick={lock}>
                            <img src="/s21.png" alt="" />
                            <Typography sx={{ color: "blue", mt: 1 }}>قفل VPS</Typography>
                        </Manage>
                        <Manage onClick={sshkeys}>
                            <img src="/s20.png" alt="" />
                            <Typography sx={{ color: "blue", mt: 1 }}>کلیدهای SSH</Typography>
                        </Manage>
                        <Manage>
                            <a href="http://192.168.1.121:56788/ssh/host/127.0.0.1">
                                <img src="/s22.png" target="_blank" alt="" />
                            </a>
                                <Typography sx={{ color: "blue" }}>SSH</Typography>
                        </Manage>
                    </Box>
                </Box>
            </Box>
            <Box sx={{ flexDirection: "column", display: "flex", mt: 4, width: { md: "100%%", xs: "100%", sm: "100%%", lg: "47%" } }}>

                <Box sx={{ display: "flex", flexWrap: "wrap", flexDirection: "column", justifyContent: "space-between", }}>
                    <Box sx={{
                        width: "100%",
                        height: 30,
                        backgroundColor: "rgb(44 , 48 , 52)",
                        display: "flex",
                        alignItems: "center",
                        padding: 1,
                        boxSizing: "border-box",

                    }}>
                        <Typography sx={{ color: "white" }}>
                            استفاده از منابع
                        </Typography>
                    </Box>
                    <Box sx={{ width: "100%", border: "1px solid black", display: "flex", flexDirection: "column", padding: 1 }}>
                        <Box sx={{ width: '100%', mt: 2 }}>
                            <Typography>
                                پردازنده :
                            </Typography>
                            <LinearProgressWithLabel value={cpu} />
                        </Box>
                        <Box sx={{ width: '100%', mt: 2 }}>
                            <Typography>
                                رم :
                            </Typography>
                            <LinearProgressWithLabel value={ram} />
                        </Box>
                        <Box sx={{ width: '100%', mt: 2 }}>
                            <Typography>
                                پهنای باند :
                            </Typography>
                            <LinearProgressWithLabel value={disk} />
                        </Box>
                        <Box sx={{ width: '100%', mt: 2 }}>
                            <Typography>
                                دیسک :
                            </Typography>
                            <LinearProgressWithLabel value={bandwidth} />
                        </Box>

                    </Box>
                </Box>
                <Box component="form" onSubmit={handleSubmit}>
                    <Box sx={{ display: "flex", flexWrap: "wrap", flexDirection: "column", justifyContent: "space-between", mt: 3 }}>
                        <Box sx={{
                            width: "100%",
                            height: 30,
                            backgroundColor: "rgb(44 , 48 , 52)",
                            display: "flex",
                            alignItems: "center",
                            padding: 1,
                            boxSizing: "border-box",

                        }}>
                            <Typography sx={{ color: "white" }}>
                                ویرایش ماشین
                            </Typography>
                        </Box>
                        <Box sx={{ width: "100%", border: "1px solid black", display: "flex", flexDirection: "column", padding: 1 }}>
                            <Typography>
                                کاربر
                            </Typography>
                            <FormControl sx={{ minWidth: 80, mt: 1 }}>
                                <InputLabel id="userId">انتخاب کاربر</InputLabel>
                                <Select
                                    size="small"
                                    name="userId"
                                    labelId="userId"
                                    id="userId"
                                    label="انتخاب کاربر"
                                    onChange={e => setUserId(e.target.value)}
                                >
                                    {user.map(data =>
                                        <MenuItem value={data.uid}>
                                            {data.name}
                                        </MenuItem>
                                    )}
                                </Select>
                            </FormControl>
                            <Typography sx={{ mt: 2 }}>
                                نام هاست
                            </Typography>
                            <FormControl sx={{ minWidth: 80, mt: 1 }}>
                                <TextField
                                    size="small"
                                    name="hostName"
                                    id="hostName" label=" نام هاست" variant="outlined"
                                    sx={{ minWidth: { xs: 330, sm: 330, md: 400 } }}
                                    type="text"
                                    value={hostName}
                                    onChange={e => setHostName(e.target.value)}
                                />
                            </FormControl>
                            <Typography sx={{ mt: 2 }}>
                                فضای دیسک
                            </Typography>
                            <FormControl sx={{ minWidth: 80, mt: 1 }}>
                                <TextField
                                    size="small"
                                    name="diskSpace"
                                    id="diskSpace" label="فضای دیسک" variant="outlined"
                                    sx={{ minWidth: { xs: 330, sm: 330, md: 400 } }}
                                    type="number"
                                    value={diskSpace}
                                    onChange={e => setDiskSpace(e.target.value)}
                                />
                            </FormControl>
                            <Typography sx={{ mt: 2 }}>
                                رم تضمینی
                            </Typography>
                            <FormControl sx={{ minWidth: 80, mt: 1 }}>
                                <TextField
                                    size="small"
                                    name="guaranteedRam"
                                    id="guaranteedRam" label="رم تضمینی" variant="outlined"
                                    sx={{ minWidth: { xs: 330, sm: 330, md: 400 } }}
                                    type="number"
                                    value={guaranteedRam}
                                    onChange={e => setGuaranteedRam(e.target.value)}
                                />
                            </FormControl>
                            <Typography sx={{ mt: 2 }}>
                                تعویض رم
                            </Typography>
                            <FormControl sx={{ minWidth: 80, mt: 1 }}>
                                <TextField
                                    size="small"
                                    name="burstedRam"
                                    id="burstedRam" label="تعویض رم" variant="outlined"
                                    sx={{ minWidth: { xs: 330, sm: 330, md: 400 } }}
                                    type="number"
                                    value={burstedRam}
                                    onChange={e => setBurstedRam(e.target.value)}
                                />
                            </FormControl>
                            <Typography sx={{ mt: 2 }}>
                                واحد پردازنده
                            </Typography>
                            <FormControl sx={{ minWidth: 80, mt: 1 }}>
                                <TextField
                                    size="small"
                                    name="cpuUnits"
                                    id="cpuUnits" label="واحد پردازنده" variant="outlined"
                                    sx={{ minWidth: { xs: 330, sm: 330, md: 400 } }}
                                    type="number"
                                    value={cpuUnits}
                                    onChange={e => setCpuUnits(e.target.value)}
                                />
                            </FormControl>
                            <Typography sx={{ mt: 2 }}>
                                هسته های پردازنده
                            </Typography>
                            <FormControl sx={{ minWidth: 80, mt: 1 }}>
                                <TextField
                                    size="small"
                                    name="cpuCores"
                                    id="cpuCores" label="هسته های پردازنده" variant="outlined"
                                    sx={{ minWidth: { xs: 330, sm: 330, md: 400 } }}
                                    type="number"
                                    value={cpuCores}
                                    onChange={e => setCpuCores(e.target.value)}
                                />
                            </FormControl>
                            <Typography sx={{ mt: 2 }}>
                                درصد پردازنده
                            </Typography>
                            <FormControl sx={{ minWidth: 80, mt: 1 }}>
                                <TextField
                                    size="small"
                                    name="cpuPercentage"
                                    id="cpuPercentage" label="درصد پردازنده" variant="outlined"
                                    sx={{ minWidth: { xs: 330, sm: 330, md: 400 } }}
                                    type="number"
                                    value={cpuPercentage}
                                    onChange={e => setCpuPercentage(e.target.value)}
                                />
                            </FormControl>
                            <div className='submit-container'>
                                <Button color='secondary' type='submit' variant="contained"> ویرایش ماشین </Button>
                            </div>
                        </Box>
                    </Box>
                </Box>
            </Box>

        </Box>
    </>);
}

export default Singlevps;

const Manage = styled.div`
    width: 23%;
    height: 90px;
    margin-top: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-right: 8px;
    cursor: pointer;
    transition: 0.5s;

    
`