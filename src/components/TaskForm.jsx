import { useState } from "react";
import { TextField,Button,Stack } from "@mui/material";

export default function TaskForm({onAdd}){
    const [task,setTask] = useState('');

    const handleSubmit = ()=>{
        if (task.trim()){
            onAdd(task);
            setTask('');
        }
    };
    return(
        <Stack direction='row' spacing={2} sx={{my:2}}>
            <TextField
                label='Nueva tarea'
                value={task}
                onChange={(e)=>setTask(e.target.value)}
            />
            <Button variant='contained' onClick={handleSubmit}>Agregar</Button>
        </Stack>
    );
}