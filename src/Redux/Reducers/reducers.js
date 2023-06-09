
// VPS_REDUCER
export const vpsReducer = (state = [], action) => {
    switch (action.type) {
        case "VPS":
            return [...action.payload];
        default:
            return state;
    }
};

// SERVER_REDUCER
export const serverReducer = (state = [], action) => {
    switch (action.type) {
        case "SERVER":
            return [...action.payload];
        default:
            return state;
    }
};

// USER_REDUCER
export const userReducer = (state = [], action) => {
    switch (action.type) {
        case "USER":
            return [...action.payload];
        default:
            return state;
    }
};

// OS_REDUCER
export const osReducer = (state = [], action) => {
    switch (action.type) {
        case "OS":
            return [...action.payload];
        default:
            return state;
    }
};

// PORT_FORWARDING_REDUCER
export const portForwardingReducer = (state = [], action) => {
    switch (action.type) {
        case "PORT":
            return [...action.payload];
        default:
            return state;
    }
};

// BACKUP_SERVER_REDUCER
export const backupServerReducer = (state = [], action) => {
    switch (action.type) {
        case "BACKUPSERVER":
            return [...action.payload];
        default:
            return state;
    }
};

// STORAGE_REDUCER
export const storageReducer = (state = [], action) => {
    switch (action.type) {
        case "STORAGE":
            return [...action.payload];
        default:
            return state;
    }
};

// PLANS_REDUCER
export const plansReducer = (state = [], action) => {
    switch (action.type) {
        case "PLANS":
            return [...action.payload];
        default:
            return state;
    }
};

// Task_REDUCER
export const taskReducer = (state = [], action) => {
    switch (action.type) {
        case "TASK":
            return [...action.payload];
        default:
            return state;
    }
};

// // DASHBOARD_INFO_REDUCER
// export const dashboardInfoReducer = (state = [], action) => {
//     switch (action.type) {
//         case "DASHBOARD_INFO":
//             return [...action.payload];
//         default:
//             return state;
//     }
// };

// RULES_REDUCER
export const rulesReducer = (state = [], action) => {
    switch (action.type) {
        case "RULES":
            return [...action.payload];
        default:
            return state;
    }
};

// INVOICES_REDUCER
export const invoicesReducer = (state = [], action) => {
    switch (action.type) {
        case "INVOICES":
            return [...action.payload];
        default:
            return state;
    }
};

// TRANSACTION_REDUCER
export const transactionReducer = (state = [], action) => {
    switch (action.type) {
        case "TRANSACTION":
            return [...action.payload];
        default:
            return state;
    }
};