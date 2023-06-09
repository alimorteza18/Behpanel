import HomeIcon from '@mui/icons-material/Home';
import LogoutIcon from '@mui/icons-material/Logout';
import { FeedbackOutlined, } from "@mui/icons-material";
export const NavbarData =[
    {
        title:"داشبورد",
        icon:<HomeIcon style={{color:"white", width:"1rem"}}/>,
        to:"/dashboard",

    },
    {
        title:"بازخورد",
        icon:<FeedbackOutlined style={{color:"white", width:"1rem"}}/>,
        to:"",

    },
    {
        title:"خروج",
        icon:<LogoutIcon style={{color:"white", width:"1rem"}}/>,
        to:"/logout",

    },
]