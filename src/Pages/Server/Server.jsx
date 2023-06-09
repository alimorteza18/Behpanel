import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Toolbar, Typography } from "@mui/material";
import { useEffect } from "react";
import { BsServer } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { getServer } from "../../Redux/Actions/actions";
import { serverTableData } from '../../data/serverTableData'
import { FaRegEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import http from "../../Services/httpService";
import { SERVER_URL } from "../../Services/contactService";
const Server = () => {

    const dispatch = useDispatch();
    const server = useSelector(state => state.server);
    useEffect(() => {
        try {
            const fetchData = async () => {
                dispatch(getServer());
            }
            fetchData()
        } catch (e) {
            console.log(e);
        }
    }, []);

    const alert = (id) => {
        Swal.fire({
            title: 'آیا از انجام این عملیات مطمعن هستید؟',
            showDenyButton: true,
            icon: 'question',
            type: 'question',
            confirmButtonText: 'بله',
            denyButtonText: `انصراف`,
          }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                    try {
                        const { response } = http.delete(`${SERVER_URL}/server/delete/${id}`);
                        if (response) {
                            dispatch(getServer());
                        } 
                    } catch {
            
                    }
              Swal.fire(`سرور با شناسه (${id}) با موفقیت حذف شد`, '', 'success')
            } else if (result.isDenied) {
              Swal.fire('!عملیات انجام نشد', '', 'info')
            }
          })
    }
    return (<>
        <Toolbar disableGutters>
            <BsServer style={{ width: "1.5rem", height: "1.5rem", }} />
            <Typography variant='h6' sx={{ ml: 1 }}>
                لیست سرور ها
            </Typography>
        </Toolbar>

        <TableContainer sx={{ width: { md: "100%", xs: "88vw", sm: "100%" } }} component={Paper}>
            <Table sx={{ minWidth: { xs: "1200px", md: 650, sm: 650 } }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        {serverTableData.map((item, index) => (
                            <TableCell key={index}>{item.title}</TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {server.map(data =>
                        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <TableCell>{data.serid}</TableCell>
                            <TableCell>KVM</TableCell>
                            <TableCell>{data.osName}</TableCell>
                            <TableCell>{data.serverName}</TableCell>
                            <TableCell>{data.ip}</TableCell>
                            <TableCell>0GB / 83GB</TableCell>
                            <TableCell>{data.vpscount} ماشین</TableCell>
                            <TableCell>0MB / 1024MB</TableCell>
                            <TableCell>
                                <Link to={`/server/${data.serid}`}>
                                    <FaRegEdit style={{ color: "blue", cursor: "pointer" }} />
                                </Link>
                                <AiFillDelete onClick={()=>alert(data.serid)} style={{ color: "crimson", marginRight: "10px", cursor: "pointer" }} />
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </TableContainer>

    </>);
}

export default Server;