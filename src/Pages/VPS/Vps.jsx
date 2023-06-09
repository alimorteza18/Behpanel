import { useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Toolbar, Typography } from '@mui/material';
import { FaServer } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { getVps } from '../../Redux/Actions/actions';
import { vpsTableData } from '../../data/vpsTableData';
import { FaRegEdit } from 'react-icons/fa'
import { AiFillDelete } from "react-icons/ai"
import { Link } from 'react-router-dom';


const Vps = () => {
    const dispatch = useDispatch();
    const vps = useSelector(state => state.vps);
    useEffect(() => {
        try {
            const fetchData = async () => {
                dispatch(getVps());
            }
            fetchData()
        } catch (e) {
            console.log(e);
        }
    }, []);
    return (<>
        <Toolbar disableGutters>
            <FaServer style={{ width: "1.5rem", height: "1.5rem", }} />
            <Typography variant='h6' sx={{ ml: 1 }}>
                لیست ماشین های مجازی
            </Typography>
        </Toolbar>
        <TableContainer sx={{ width: { md: "100%", xs: "88vw", sm: "100%" } }} component={Paper}>
            <Table sx={{ minWidth: { xs: "1200px", md: "1200", sm: "1200px", } }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        {vpsTableData.map((item, index) => (
                            <TableCell key={index}>{item.title}</TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {vps.map(data =>
                        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <TableCell>
                                <div className={data.status}>
                                    {data.status}
                                </div>
                            </TableCell>
                            <TableCell>{data.vpsid}</TableCell>
                            <TableCell>KVM</TableCell>
                            <TableCell>{data.osName}</TableCell>
                            <TableCell>{data.hostname}</TableCell>
                            <TableCell>{data.ips[0].ip}</TableCell>
                            <TableCell>{data.serverName}</TableCell>
                            <TableCell>{data.cores} هسته ای</TableCell>
                            <TableCell>{data.bandwidth}MB</TableCell>
                            <TableCell>{data.ram}MB</TableCell>
                            <TableCell>{data.username}</TableCell>
                            <TableCell>
                                <Link to={`/vps/${data.vpsid}`}>
                                    <FaRegEdit style={{ color: "blue", cursor: "pointer" }} />
                                </Link>
                                <AiFillDelete style={{ color: "crimson", marginRight: "10px", cursor: "pointer" }} />
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </TableContainer>
    </>
    );
}
export default Vps;