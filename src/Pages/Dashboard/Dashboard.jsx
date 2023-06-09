import { Box } from "@mui/system";
import Bottom from "../../Components/Dashboard/Bottom";
import Left from "../../Components/Dashboard/Left";
import Right from "../../Components/Dashboard/Right";

const Dashboard = () => {

    return (<>
        <Box sx={{
            display: "flex",
            flexWrap: "wrap",
            flexDirection: { sm: "column", md: "row", xs: "column" },
            justifyContent: "space-between",
        }}>
            <Right />
            <Left />
        </Box>
        <Bottom />

    </>);
}

export default Dashboard;
