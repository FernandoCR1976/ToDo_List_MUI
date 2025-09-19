import { List, ListItem,ListItemText,Checkbox, IconButton, ListItemSecondaryAction } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

export default function TaskList({tasks, onToggle, onDelete}){
    return (
        <List>
            {tasks.map((task,index)=>(
                <ListItem key={index} divider>
                    <Checkbox checked={task.completed} onChange={()=> onToggle(index)}/>
                    <ListItemText
                    primary={task.text}
                    sx={{textDecoration: task.completed ? 'line-through' : 'none'}}
                    />
                    <ListItemSecondaryAction>
                        <IconButton edge='end' onClick={()=> onDelete(index)}>
                            <DeleteIcon/>
                        </IconButton>
                    </ListItemSecondaryAction>
                </ListItem>
            ))}

        </List>
    );
}