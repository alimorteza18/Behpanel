import { CheckBox } from "@mui/icons-material";
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Toolbar, Typography } from "@mui/material";
import { useEffect } from "react";
import { FaUsers } from "react-icons/fa"
import { useDispatch, useSelector } from "react-redux";
import {usersData} from "../../data/data"
import { getUser } from "../../Redux/Actions/actions";
const Users = () => {
    const dispatch = useDispatch();
    const users = useSelector(state => state.user);
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
    return (<>
        <Toolbar disableGutters>
            <FaUsers style={{ width: "1.7rem", height: "1.7rem", }} />
            <Typography variant='h6' sx={{ ml: 1 }}>
                لیست کاربران
            </Typography>
        </Toolbar>
        <TableContainer sx={{ width: { md: "100%", xs: "88vw", sm: "100%" }, mt: 4 }} component={Paper}>
            <Table sx={{ minWidth: { xs: "1200px", md: 650, sm: 650 } }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        {usersData.map((item, index) => (
                            <TableCell key={index}>{item.title}</TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {users.map(data =>
                        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <TableCell>{data.uid}</TableCell>
                            <TableCell>{data.name}</TableCell>
                            <TableCell>{data.email}</TableCell>
                            <TableCell>{data.mobile}</TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </TableContainer>
    </>);
}

export default Users;