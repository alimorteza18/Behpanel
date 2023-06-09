import { BsPlus } from "react-icons/bs"
// import Net from "./Net";
import { Box } from "@mui/material";
import Net from "./Net";
const Network = (props) => {
    const { tabs, setTabs, content, setContent } = props;


    return (
        <Box>
            <Box sx={{ marginTop: "16px", paddingBottom: "32px", border: "1px solid lightgrey", padding: "8px", borderRadius: "4px" }}>
                {/* <legend>شبکه</legend> */}
                <div style={{ borderBottom: "1px solid lightgrey", display: "flex", alignItems: "center", width: "95%", marginRight: "10px" }}>
                    {tabs.map((item, i) => (
                        <div className={content === i ? "active" : ""} onClick={() => setContent(i)} style={{ width: "70px", height: "30px", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "4px" }}>
                            <p style={{ fontSize: "12px" }}> کارت شبکه {i + 1}</p>
                        </div>
                    ))}
                    <div className="plus-button" onClick={() => {
                        if (tabs.length <= 5) {
                            setTabs([...tabs, {
                                ip: "",
                                prefix: "",
                                gateway: "",
                                name: "",
                                networkType: ""

                            }])
                            setContent(tabs.length)
                        }

                    }}><BsPlus style={{ color: "white" }} /></div>

                </div>
                <Net
                    networkType={tabs[content].networkType}
                    ip={tabs[content].ip}
                    index={content}
                    tabs={tabs}
                    setTabs={setTabs}
                    prefix={tabs[content].prefix}
                    gateway={tabs[content].gateway}
                    name={tabs[content].name}
                />
            </Box>
        </Box>
    );
}

export default Network;
