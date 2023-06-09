import http from "./httpService";


// export const SERVER_URL = "http://192.168.1.201:8085/api/behpanel";
// export const SCRIPT_URL = "http://192.168.1.201:8085/api/behpanel-script";
export const SERVER_URL = "https://api2.behpanel.com/api/behpanel";
export const SCRIPT_URL = "https://api2.behpanel.com/api/behpanel-script";

// Login User
export const login = (user) => {
    const url = `${SERVER_URL}/login`;
    return http.post(url, user);
  };

// Get All VPS
export const getAllVps = () => {
    const url = `${SERVER_URL}/vps`;
    return http.get(url);
  };

// Get All Server
export const getAllServer = () => {
  const url = `${SERVER_URL}/server`;
  return http.get(url);
};

// Get All Users
export const getAllUsers = () => {
  const url = `${SERVER_URL}/user`;
  return http.get(url);
};

// Get All OS
export const getAllOs = () => {
  const url = `${SERVER_URL}/os`;
  return http.get(url);
};

// Create VPS
export const createVps = (vps) => {
  const url = `${SERVER_URL}/vps/create`;
  return http.post(url,vps);
};

// VPS With ServerID
export const getVpsWithServerId = (id) => {
  const url = `${SERVER_URL}/server/${id}/vps`;
  return http.get(url);
}

// Migrate VPS
export const migrateVps = (items,id) => {
  const url = `${SCRIPT_URL}/vps/${id}/migratevps`;
  return http.post(url,items);
}

// Clone VPS
export const cloneVps = (items,id) => {
  const url = `${SCRIPT_URL}/vps/${id}/clonevps`;
  return http.post(url,items);
}

// Rebuild VPS
export const rebuildVps = (items,id) => {
  const url = `${SCRIPT_URL}/vps/${id}/rebuild`;
  return http.post(url,items);
}

// Port Forwarding
export const portForwarding = (items) => {
  const url = `${SERVER_URL}/portforward/create`;
  return http.post(url,items);
}

// Get All Port Forwarding List 
export const getAllPortForward = () => {
  const url = `${SERVER_URL}/portforward`;
  return http.get(url);
}

// Create Server
export const createServer = (server) => {
  const url = `${SERVER_URL}/server/create`;
  return http.post(url,server);
};

// Get All BackupServer 
export const getAllBackupServer = () => {
  const url = `${SERVER_URL}/backupserver`;
  return http.get(url);
}

// Create BackupServer 
export const createBackupServer = (items) => {
  const url = `${SERVER_URL}/backupserver/create`;
  return http.post(url,items);
}

// Get All Storage
export const getAllStorage = () => {
  const url = `${SERVER_URL}/storage`;
  return http.get(url);
};

// Create Storage
export const createStorage = (items) => {
  const url = `${SERVER_URL}/storage/create`;
  return http.post(url,items);
}

// Get All Plans
export const getAllPlans = () => {
  const url = `${SERVER_URL}/plan`;
  return http.get(url);
};

// Create User
export const createUser = (items) => {
  const url = `${SERVER_URL}/login/create`;
  return http.post(url,items);
}

// Get All Task
export const getAllTask = () => {
  const url = `${SERVER_URL}/task`;
  return http.get(url);
}

// Get All Dashboard Inf0
export const getAllDashboardInfo = () => {
  const url = `${SCRIPT_URL}/dashboard/info`;
  return http.get(url);
}

// Get All RulesPrice
export const getAllRulesprice = () => {
  const url = `${SERVER_URL}/rulesprice`;
  return http.get(url);
}

// Get All Invoices
export const getAllInvoices = () => {
  const url = `${SERVER_URL}/invoices`;
  return http.get(url);
}

// Create Invoice
export const createInvoice = (items) => {
  const url = `${SERVER_URL}/invoices/create`;
  return http.post(url,items);
}

// Get All Transaction
export const getAllTransaction = () => {
  const url = `${SERVER_URL}/transaction`;
  return http.get(url);
}

// Create Transacrtin
export const createTransaction = (items) => {
  const url = `${SERVER_URL}/transaction/create`;
  return http.post(url,items);
}

// Setting
export const setting = (items) => {
  const url = `${SERVER_URL}/setting/create`;
  return http.post(url,items);
}

// Create Ippool
export const createIppool = (items) => {
  const url = `${SERVER_URL}/ippool/create`;
  return http.post(url,items);
}
