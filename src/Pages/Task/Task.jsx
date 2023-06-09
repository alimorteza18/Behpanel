import { FaTasks } from "react-icons/fa"
import { AiTwotoneLike } from "react-icons/ai"
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Toolbar, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getTask } from "../../Redux/Actions/actions";
import { useEffect } from "react";
import {taskData} from "../../data/data"
const Task = () => {
    const dispatch = useDispatch();
    const task = useSelector(state => state.task);
    useEffect(() => {
        try {
            const fetchData = async () => {
                dispatch(getTask());
            }
            fetchData()
        } catch (e) {
            console.log(e);
        }
    }, []);
    const Api = task.map((data) => ({
        "id": data.taskId,
        "vpsid": data.vpsid,
        "username": data.username,
        "started": new Intl.DateTimeFormat('FA-IR', { year: 'numeric', month: '2-digit', day: '2-digit' }).format(data.started * 1000),
        "action": data.action,
        "statusTxt": data.statusTxt,
        "updated": data.updated !== 0 ? new Intl.DateTimeFormat('FA-IR', { year: 'numeric', month: '2-digit', day: '2-digit' }).format(data.updated * 1000) : "------------------",
        "ended": data.ended !== 0 ? new Intl.DateTimeFormat('FA-IR', { year: 'numeric', month: '2-digit', day: '2-digit' }).format(data.ended * 1000) : "------------------",



    }))
    return (<>
        <Toolbar disableGutters>
            <FaTasks style={{ width: "1.7rem", height: "1.7rem", }} />
            <Typography variant='h6' sx={{ ml: 1 }}>
                وظایف
            </Typography>
        </Toolbar>
        <TableContainer sx={{ width: { md: "100%", xs: "88vw", sm: "100%" }, mt: 4 }} component={Paper}>
            <Table sx={{ minWidth: { xs: "1200px", md: 650, sm: 650 } }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        {taskData.map((item, index) => (
                            <TableCell key={index}>{item.title}</TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {Api.map(data =>
                        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <TableCell>{data.id}</TableCell>
                            <TableCell>{data.vpsid}</TableCell>
                            <TableCell>{data.username}</TableCell>
                            <TableCell>{data.started}</TableCell>
                            <TableCell>{data.updated}</TableCell>
                            <TableCell>{data.ended}</TableCell>
                            <TableCell>{data.action}</TableCell>
                            <TableCell>{data.statusTxt}</TableCell>
                            <TableCell><AiTwotoneLike style={{ height: "1.5rem", width: "1.5rem", color: "#0275d8" }} /></TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </TableContainer>
    </>);
}

export default Task;