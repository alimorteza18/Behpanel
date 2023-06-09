import React, { lazy, Suspense, useState,useEffect } from "react";
import { Route,Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import jwt_decode from "jwt-decode";
import MainLayout from "./Components/layouts/MainLayout";
import Loading from "./Utils/Loading";



const Login = lazy(() => import("./Pages/Login/Login"));
const Vps = lazy(() => import("./Pages/VPS/Vps"));
const CreateVps = lazy(() => import("./Pages/VPS/Create-Vps"));
const MigrateVps = lazy(() => import("./Pages/VPS/Migrate-Vps"));
const CloneVps = lazy(() => import("./Pages/VPS/Clone-Vps"));
const RebuildVps = lazy(() => import("./Pages/VPS/Rebuild-Vps"));
const PortForwarding = lazy(() => import("./Pages/VPS/Port-Forwarding"));
const Server = lazy(() => import("./Pages/Server/Server"));
const CreateServer = lazy(() => import("./Pages/Server/Create-Server"));
const BackupServer = lazy(() => import("./Pages/Server/Backup-Server"));
const CreateBackupServer = lazy(() => import("./Pages/Server/Create-BackupServer"));
const Storage = lazy(() => import("./Pages/Storage/Storage"));
const CreateStorage = lazy(() => import("./Pages/Storage/Create-Storage"));
const Os = lazy(() => import("./Pages/Os/Os"));
const Plans = lazy(() => import("./Pages/Plans/Plans"));
const Users = lazy(() => import("./Pages/Users/Users"));
const CreateUser = lazy(() => import("./Pages/Users/CreateUser"));
const Task = lazy(() => import("./Pages/Task/Task"));
const Dashboard = lazy(() => import("./Pages/Dashboard/Dashboard"));
const Firewall = lazy(() => import("./Pages/Firewall/Firewall"));
const Rulesprice = lazy(() => import("./Pages/Billing/Rulesprice"));
const Invoices = lazy(() => import("./Pages/Billing/Invoices"));
const Createinvoice = lazy(() => import("./Pages/Billing/Create-Invoice"));
const Transaction = lazy(() => import("./Pages/Billing/Transaction"));
const Createtransaction = lazy(() => import("./Pages/Billing/Create-Transaction"));
const Cpu = lazy(() => import("./Pages/Cpu/Cpu"));
const Disk = lazy(() => import("./Pages/Disk/Disk"));
const Ram = lazy(() => import("./Pages/Ram/Ram"));
const Bandwidth = lazy(() => import("./Pages/Bandwidth/Bandwidth"));
const Processes = lazy(() => import("./Pages/Processes/Processes"));
const Logs = lazy(() => import("./Pages/Logs/Logs"));
const Setting = lazy(() => import("./Pages/Setting/Setting"));
const Logout = lazy(() => import("./Pages/Logout/Logout"));
const Singleserver = lazy(() => import("./Pages/Server/Singleserver"));
const Singlevps = lazy(() => import("./Pages/VPS/Singlevps"));
const Vpsstatistics = lazy(() => import("./Pages/VPS/Vpsstatistics"));
const Createippool = lazy(() => import("./Pages/Ippool/Create-Ippool"));
const Ippool = lazy(() => import("./Pages/Ippool/Ippool"));
const Notfound = lazy(() => import("./Pages/404/Notfound"));

const apiCall = {
  "event": 'bts:subscribe',
  "data": { channel: 'order_book_btcusd' },
};

function App() {
  const [data, setData] = useState([]);
  const socketUrl = 'ws://192.168.1.50:8888';
  const [bids, setBids] = useState([0]);

  useEffect(() => {
      const ws = new WebSocket(socketUrl);
      ws.onopen = (event) => {
          ws.send('Hello');
      };
      ws.onmessage = function (event) {      
          try {
            console.log(event.data)
          } catch (err) {
              console.log(err);
          }
      };
    
  }, []);


const location = "/";
const useReactPath = () => {
  const [path, setPath] = useState(window.location.pathname);
  const listenToPopstate = () => {
    const winPath = window.location.pathname;
    setPath(winPath);
  };
  useEffect(() => {
    window.addEventListener("click", listenToPopstate);
    return () => {
      window.removeEventListener("click", listenToPopstate);
    };
  }, []);
  return path;
};
const path = useReactPath();
useEffect(() => {
 const token = localStorage.getItem("token");
 if(token){
    const decodedToken = jwt_decode(token);
    const dateNow = Date.now() / 1000;
    if (decodedToken.exp < dateNow){
      localStorage.removeItem("token");
      window.location.href = "/";
 }

 }
}, [path]);



  return (
    <BrowserRouter>
        <MainLayout location={location}>
         <Suspense fallback={<Loading/>}>
          <Routes>
            <Route path={location} element={<Login/>} />
            <Route path="vps" element={<Vps/>} />
            <Route path="create-vps" element={<CreateVps/>} />
            <Route path="migrate-vps" element={<MigrateVps/>} />
            <Route path="clone-vps" element={<CloneVps/>} />
            <Route path="rebuild-vps" element={<RebuildVps/>} />
            <Route path="port-forwarding" element={<PortForwarding/>} />
            <Route path="server" element={<Server/>} />
            <Route path="create-server" element={<CreateServer/>} />
            <Route path="backup-server" element={<BackupServer/>} />
            <Route path="create-backup-server" element={<CreateBackupServer/>} />
            <Route path="storage" element={<Storage/>} />
            <Route path="create-storage" element={<CreateStorage/>} />
            <Route path="os" element={<Os/>} />
            <Route path="plans" element={<Plans/>} />
            <Route path="users" element={<Users/>} />
            <Route path="create-user" element={<CreateUser/>} />
            <Route path="task" element={<Task/>} />
            <Route path="dashboard" element={<Dashboard/>} />
            <Route path="firewall" element={<Firewall/>}/>
            <Route path="rulesprice" element={<Rulesprice/>}/>
            <Route path="invoices" element={<Invoices/>}/>
            <Route path="create-invoice" element={<Createinvoice/>}/>
            <Route path="transaction" element={<Transaction/>}/>
            <Route path="create-transaction" element={<Createtransaction/>}/>
            <Route path="cpu" element={<Cpu/>}/>
            <Route path="disk" element={<Disk/>}/>
            <Route path="ram" element={<Ram/>}/>
            <Route path="bandwidth" element={<Bandwidth/>}/>
            <Route path="processes" element={<Processes/>}/>
            <Route path="logs" element={<Logs/>}/>
            <Route path="setting" element={<Setting/>}/>
            <Route path="logout" element={<Logout/>}/>
            <Route path="server/:id" element={<Singleserver/>} />
            <Route path="vps/:id" element={<Singlevps/>} />
            <Route path="vpsstatistics" element={<Vpsstatistics/>} />
            <Route path="create-ippool" element={<Createippool/>}/>
            <Route path="ippool" element={<Ippool/>}/>
            <Route path="*" element={<Notfound/>}/>
           </Routes>
         </Suspense>
        </MainLayout>
      </BrowserRouter>
  );
}

export default App;