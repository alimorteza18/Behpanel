import { Box, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";


const LeftContainer = ({
    guaranteedRam,
    burstedRam,
    cpuUnits,
    cpuCores,
    cpuPercentage,
    setStorageId,
    setGuaranteedRam,
    setBurstedRam,
    setCpuUnits,
    setCpuPercentage,
    setCpuCores,
    diskSpace,
    setDiskSpace,
    storage
}) => {
    return (
        <Box sx={{ flexDirection: "column", display: "flex", width:{md:"47%", sm:"100%", xs:"100%"} ,marginTop:{md:0,sm:"32px",xs:"32px"} }}>
            <fieldset style={{ display: "flex", flexDirection: "column",  }}>
                <legend>حافطه (RAM)</legend>
                <FormControl sx={{ minWidth: 80, }}>
                    <TextField
                        size="small"
                        name="guaranteedRam"
                        id="guarantedRam" label="رم تضمینی (3829 مگابایت فضای خالی)" variant="outlined"
                        type="number"
                        value={guaranteedRam}
                        onChange={e => setGuaranteedRam(e.target.value)}
                    />
                </FormControl>
                <FormControl sx={{ minWidth: 80, mt: 3, }}>
                    <TextField
                        size="small"
                        name="burstedRam"
                        value={burstedRam}
                        onChange={e => setBurstedRam(e.target.value)}
                        label="تعویض رم (به مگابایت)" variant="outlined"
                        type="number"
                    />
                </FormControl>
            </fieldset>
            <fieldset style={{ display: "flex", flexDirection: "column", marginTop: "32px" }}>
                <legend>پردازنده (CPU)</legend>
                <FormControl sx={{ minWidth: 80, }}>
                    <TextField
                        size="small"
                        name="cpuUnits"
                        value={cpuUnits}
                        onChange={e => setCpuUnits(e.target.value)}
                        label="واحد های پردازنده" variant="outlined"
                        type="number"
                    />
                </FormControl>
                <FormControl sx={{ minWidth: 80, mt: 3, }}>
                    <TextField
                        size="small"
                        name="cpuCores"
                        value={cpuCores}
                        onChange={e => setCpuCores(e.target.value)}
                        label="هسته های پردازنده" variant="outlined"
                        type="number"
                    />
                </FormControl>
                <FormControl sx={{ minWidth: 80, mt: 3, }}>
                    <TextField
                        size="small"
                        name="cpuPercentage"
                        value={cpuPercentage}
                        onChange={e => setCpuPercentage(e.target.value)}
                        label="میزان درصد پردازنده" variant="outlined"
                        type="number"
                    />
                </FormControl>
            </fieldset>
            <fieldset style={{ display: "flex", flexDirection: "column", marginTop: "32px" }}>
                <legend>فضای دیسک (Disk)</legend>
                <FormControl sx={{ minWidth: 80, }}>
                    <TextField
                        size="small"
                        name="diskSpace"
                        value={diskSpace}
                        onChange={e => setDiskSpace(e.target.value)}
                        label="فضای دیسک (به گیگابایت)" variant="outlined"
                        type="number"
                    />
                </FormControl>
                <FormControl sx={{ minWidth: 80, mt: 3, }}>
                    <InputLabel id="storage">انتخاب ذخیره ساز</InputLabel>
                    <Select
                        size="small"
                        name="storageId"
                        onChange={e => setStorageId(e.target.value)}
                        labelId="storage"
                        id="storage"
                        label="انتخاب ذخیره ساز"
                    >
                        {storage.map(data =>
                            <MenuItem value={data.stid}>
                                {data.name}
                            </MenuItem>
                        )}
                    </Select>
                </FormControl>
            </fieldset>
        </Box>
    );
}

export default LeftContainer;