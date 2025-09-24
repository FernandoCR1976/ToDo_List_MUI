import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";

export default function ConfirmDialog({open, onClose, onConfirm}){
    return(
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Estas Seguro ?</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Esta accion no se puede deshacer.... Desea Continuar?
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}>Cancelar</Button>
                <Button onClick={onConfirm} color="error">Confirmar</Button>
            </DialogActions>

        </Dialog>
    );
}