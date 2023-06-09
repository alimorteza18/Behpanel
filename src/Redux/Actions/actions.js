import { getAllVps, getAllServer, getAllUsers, getAllOs, getAllPortForward, getAllBackupServer, getAllStorage, getAllPlans, getAllTask, getAllDashboardInfo, getAllRulesprice, getAllInvoices, getAllTransaction } from "../../Services/contactService";


// VPS_ACTION
export const getVps = () => {
    return async (dispatch) => {
        const vps = await getAllVps();
        await dispatch({ type: "VPS", payload: vps.data.data });
    };
};

// SERVER_ACTION
export const getServer = () => {
    return async (dispatch) => {
        const server = await getAllServer();
        await dispatch({ type: "SERVER", payload: server.data.servers });
    };
};

// USER_ACTION
export const getUser = () => {
    return async (dispatch) => {
        const user = await getAllUsers();
        await dispatch({ type: "USER", payload: user.data.data });
    };
};

// OS_ACTION
export const getOs = () => {
    return async (dispatch) => {
        const os = await getAllOs();
        await dispatch({ type: "OS", payload: os.data.data });
    };
};

// PORT_FORWARDING_ACTION
export const getPort = () => {
    return async (dispatch) => {
        const port = await getAllPortForward();
        await dispatch({ type: "PORT", payload: port.data.data });
    };
};

// BACKUP_SERVER_ACTION
export const getBackupServer = () => {
    return async (dispatch) => {
        const backupServer = await getAllBackupServer();
        await dispatch({ type: "BACKUPSERVER", payload: backupServer.data.backupServers });
    };
};

// STORAGE_ACTION
export const getStorage = () => {
    return async (dispatch) => {
        const storage = await getAllStorage();
        await dispatch({ type: "STORAGE", payload: storage.data.data });
    };
};

// PLANS_ACTION
export const getPlans = () => {
    return async (dispatch) => {
        const plans = await getAllPlans();
        await dispatch({ type: "PLANS", payload: plans.data.plansList });
    };
};

// TASK_ACTION
export const getTask = () => {
    return async (dispatch) => {
        const task = await getAllTask();
        await dispatch({ type: "TASK", payload: task.data.data });
    };
};

// // DASHBOARD_INFO_ACTION
// export const getDashboardInfo = () => {
//     return async (dispatch) => {
//         const dashboardInfo = await getAllDashboardInfo();
//         await dispatch({ type: "DASHBOARD_INFO", payload: dashboardInfo.data });
//     };
// };

// RULES_ACTION
export const getRules = () => {
    return async (dispatch) => {
        const rules = await getAllRulesprice();
        await dispatch({ type: "RULES", payload: rules.data.data });
    };
};

// INVOICES_ACTION
export const getInvoices = () => {
    return async (dispatch) => {
        const invoices = await getAllInvoices();
        await dispatch({ type: "INVOICES", payload: invoices.data.data });
    };
};

// TRANSACTION_ACTION
export const getTransaction = () => {
    return async (dispatch) => {
        const transaction = await getAllTransaction();
        await dispatch({ type: "TRANSACTION", payload: transaction.data.data });
    };
};