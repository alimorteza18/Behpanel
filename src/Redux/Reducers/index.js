import {
    combineReducers
} from "redux";
import {
    vpsReducer,
    serverReducer,
    userReducer,
    osReducer,
    portForwardingReducer,
    backupServerReducer,
    storageReducer,
    plansReducer,
    taskReducer,
    dashboardInfoReducer,
    rulesReducer,
    invoicesReducer,
    transactionReducer
} from "./reducers";
export const reducers = combineReducers({
    vps: vpsReducer,
    server: serverReducer,
    user: userReducer,
    os: osReducer,
    port: portForwardingReducer,
    backupServer: backupServerReducer,
    storage: storageReducer,
    plans: plansReducer,
    task: taskReducer,
    // dashboardInfo: dashboardInfoReducer,
    rules: rulesReducer,
    invoices: invoicesReducer,
    transaction: transactionReducer,
});