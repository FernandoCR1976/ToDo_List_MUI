import { useState } from "react";
import { Container, Snackbar, Alert, Typography } from "@mui/material";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import ConfirmDialog from "./components/CorfirmDialog";


function App(){
  const [tasks, setTasks] = useState([]);
  const [deleteIndex, setDeleteIndex] = useState(null);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleAdd = (text)=>{
    setTasks([...tasks,{text, completed: false}]);
  };

  const handleToogle = (index)=>{
    const  updated = [...tasks];
    updated[index].completed = !updated[index].completed;
    setTasks(updated);
    setSnackbarOpen(true);
  };

  const handleDelete = ()=>{
    const updated = tasks.filter((_,i) => i !== deleteIndex);
    setTasks(updated);
    setDeleteIndex(null);
  };

  return (
    <Container maxWidth='sm' sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>Gestor de Tareas</Typography>
      <TaskForm onAdd={handleAdd}/>
      <TaskList
        tasks={tasks}
        onToggle={handleToogle}
        onDelete={handleDelete}
      />
      <ConfirmDialog
        open={deleteIndex !== null}
        onClose={()=> setDeleteIndex(null)}
        onConfirm={handleDelete}
      />
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={2000}
        onClose={()=> setSnackbarOpen(flase)}
      >
        <Alert
          severity="success"
          onClose={()=> setSnackbarOpen(false)}
        >
          TAREA ACTUALIZADA
        </Alert>
      </Snackbar>
    </Container>
  );

}

export default App;