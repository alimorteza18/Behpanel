import { Box, Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Toolbar, Typography } from "@mui/material";
import { MdSettingsSuggest } from "react-icons/md"
import { useDispatch, useSelector } from "react-redux";
import { getOs } from "../../Redux/Actions/actions";
import { osTableData } from "../../data/osTableData";
import { useEffect } from "react";
import httpService from "../../Services/httpService";
import { SERVER_URL } from "../../Services/contactService";

const Os = () => {
    const dispatch = useDispatch();
    const os = useSelector(state => state.os);
    useEffect(() => {
        try {
            const fetchData = async () => {
                dispatch(getOs());
            }
            fetchData()
        } catch (e) {
            console.log(e);
        }
    }, []);
    const refresh = () =>{
        httpService.post(`${SERVER_URL}/os/refresh`);
    }
    return (<>
        <Toolbar disableGutters>
            <MdSettingsSuggest style={{ width: "1.7rem", height: "1.7rem", }} />
            <Typography variant='h6' sx={{ ml: 1 }}>
                سیستم عامل
            </Typography>
        </Toolbar>
        <Box sx={{ borderRadius: "8px", boxShadow: "rgba(0,0,0,0.23) 0px 3px 6px", mt: 3 }}>
            <Typography variant='subtitle1' sx={{ ml: 1 }}>
                برای اضافه کردن سیستم عامل جدید کافیست به این مخزن سر بزنید
                <a href="http://repo.7mizban.com/">http://repo.7mizban.com/</a>
                و فایلهای دانلود شده را به شاخه زیر منتقل کنید و سپس دکمه رفرش را بزنید!
                opt/behpanel/repo
            </Typography>
        </Box>

        <TableContainer sx={{ width: { md: "100%", xs: "88vw", sm: "100%" }, mt: 4 }} component={Paper}>
            <Table sx={{ minWidth: { xs: "1200px", md: 650, sm: 650 } }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        {osTableData.map((item, index) => (
                            <TableCell key={index}>{item.title}</TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {os.map(data =>
                        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <TableCell>{data.osid}</TableCell>
                            <TableCell>{data.osdata}</TableCell>
                            <TableCell>{data.mg}</TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </TableContainer>
        <div className='submit-container'>
            <Button onClick={refresh} color='secondary' variant="contained">Refresh</Button>
        </div>
    </>);
}

export default Os;