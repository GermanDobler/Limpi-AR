import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import './styles/sector.css'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { FormControlLabel, Switch } from '@mui/material';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
const modal_box = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
}
export default function SimpleAccordion(props) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <div>
            <Accordion sx={{ mb: 8, }}>
                <AccordionSummary
                    aria-controls="panel1a-header"
                    id="panel1a-header"
                    className={props.estado}
                    sx={{ mt: 2, }}
                >
                    <Typography className='sector_nombre'>{props.nombre}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <Box sx={{ flexGrow: 1, mt: 3 }}>
                            <Grid container spacing={1} >
                                <Grid xs={3}>
                                </Grid>
                                <Grid xs={9}>
                                    Detalles:{props.detalles}
                                </Grid>
                                <Grid xs={3}>
                                    <Button onClick={handleOpen}>imagen</Button>
                                    <Modal
                                        open={open}
                                        onClose={handleClose}
                                        aria-labelledby="modal-modal-title"
                                        aria-describedby="modal-modal-description"
                                    >
                                        <Box sx={modal_box}>
                                            <Typography id="modal-modal-title" variant="h6" component="h2">
                                                Sector: {props.nombre}
                                            </Typography>
                                            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                                imagen del sector ??????
                                            </Typography>
                                        </Box>
                                    </Modal>
                                </Grid>
                                <Grid xs={9}>
                                    Ultima Limpieza: --/--/----
                                </Grid>
                                <Grid xs={9}>
                                </Grid>
                                <Grid xs={3}>
                                    <FormControlLabel
                                        value="start"
                                        control={<Switch color="primary" />}
                                        label="Estado"
                                        labelPlacement="start"
                                    />
                                </Grid>
                            </Grid>
                        </Box>
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}
