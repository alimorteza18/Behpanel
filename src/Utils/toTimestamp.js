export const toTimestamp = strDate => {
    const dt = new Date(strDate).getTime();
    return dt / 1000;
};