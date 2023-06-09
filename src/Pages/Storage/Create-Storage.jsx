import { Box, Button, Checkbox, FormControl, FormControlLabel, InputLabel, MenuItem, Select, TextField, Toolbar, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { MdOutlineSdStorage } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import LeftContainer from "../../Components/Storage/LeftContainer";
import RightContainer from "../../Components/Storage/RightContainer";
import { getServer } from "../../Redux/Actions/actions";
import { createStorage } from "../../Services/contactService";

const CreateStorage = () => {
    const [storageName, setStorageName] = useState("");
    const [serverId, setServerId] = useState();
    const [storageType, setStorageType] = useState("");
    const [primaryStorage, setPrimaryStorage] = useState(false);
    const [path, setPath] = useState("");
    const [fileFormat, setFileFormat] = useState("");
    const [alertTreshold, setAlertTreshold] = useState(90);

    const changeCheckBoxValue = e => {
        setPrimaryStorage(e.target.value);
        setPrimaryStorage(!primaryStorage);
    }

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

    const handleSubmit = async event => {
        event.preventDefault();
        const items = {storageName, serverId, storageType, primaryStorage, path, fileFormat, alertTreshold};
        try {
            const { status } = await createStorage(JSON.stringify(items));
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
            <MdOutlineSdStorage style={{ width: "1.5rem", height: "1.5rem", }} />
            <Typography variant='h6' sx={{ ml: 1 }}>
                اضافه کردن ذخیره ساز
            </Typography>
        </Toolbar>
        <Box onSubmit={handleSubmit} component="form">
                <RightContainer
                    storageName={storageName}
                    setStorageName={setStorageName}
                    setServerId={setServerId}
                    setStorageType={setStorageType}
                    primaryStorage={primaryStorage}
                    changeCheckBoxValue={changeCheckBoxValue}
                />
        
                <LeftContainer
                    path={path}
                    setPath={setPath}
                    setFileFormat={setFileFormat}
                    alertTreshold={alertTreshold}
                    setAlertTreshold={setAlertTreshold}

                />
            <div className='submit-container'>
                <Button color='secondary' type='submit' variant="contained">اضافه کردن ذخیره ساز</Button>
            </div>
        </Box>
    </>);
}

export default CreateStorage;