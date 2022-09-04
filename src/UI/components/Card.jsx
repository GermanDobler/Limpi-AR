import { Grid, Modal, Typography } from '@mui/material'
import { ModalUnstyled } from '@mui/base';
import { Box } from '@mui/material'
import React from 'react'
import _JSXStyle from 'styled-jsx/style'
import CustomizedSwitches from './SwitchIOS';

export default function Card(props) {
    //cards
    const [open, setOpen] = React.useState(false);
    // console.log(open);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    //Switch
    const [estado, setEstado] = React.useState(false);
    const switchEstado = () => setEstado(current => !current);
    console.log(estado);
    return (
        <>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box className="contenedor-modal" sx={{ opacity: '0.2' }}>
                    <Typography id="modal-modal-title" sx={{ mt: 1 }} variant="h6" component="h2">
                        {props.sector.nombre}
                    </Typography>
                    <Grid id="modal-modal-description" item xs={12} container className='Grid-Item'>
                        <Grid item xs={12} className='Grid-Item' sx={{ p: 1 }}>
                            <img src={props.sector.img} alt={props.sector.nombre} height={300} width="100%" />
                        </Grid>
                        <Grid item xs={8} className='Grid-Item'>
                            <Typography>
                                Ult Limpieza: {props.sector.fecha}
                            </Typography>
                        </Grid>
                        <Grid item xs={4} className='Grid-Item'>
                            <CustomizedSwitches onChange={switchEstado} checked={estado} />
                        </Grid>
                    </Grid>
                </Box>
            </Modal>
            <article className="card card--1">
                <div onClick={handleOpen}>
                    <div className="card__info-hover">
                        <div className="card__clock-info">
                            <svg className="card__clock" viewBox="0 0 24 24"><path d="M12,20A7,7 0 0,1 5,13A7,7 0 0,1 12,6A7,7 0 0,1 19,13A7,7 0 0,1 12,20M19.03,7.39L20.45,5.97C20,5.46 19.55,5 19.04,4.56L17.62,6C16.07,4.74 14.12,4 12,4A9,9 0 0,0 3,13A9,9 0 0,0 12,22C17,22 21,17.97 21,13C21,10.88 20.26,8.93 19.03,7.39M11,14H13V8H11M15,1H9V3H15V1Z" />
                            </svg><span className="card__time">{props.sector.fecha}</span>
                        </div>
                    </div>
                    <div className="card__img">
                        <img src={props.sector.img} alt={props.sector.nombre} height={235} width={195} />

                    </div>
                    <div className="card__img--hover">
                        <img src={props.sector.img} alt={props.sector.nombre} height="100%" width="100%" />
                    </div>
                </div>
                <div className="card__info">
                    {/* <Grid item xs={12} container className='Grid-Item'>
                        <Grid item xs={7} className='Grid-Item'>
                            <Typography>
                                {props.sector.nombre}
                            </Typography>
                        </Grid>
                        <Grid item xs={5} className='Grid-Item'>
                            <CustomizedSwitches />
                        </Grid>
                    </Grid> */}
                    <Grid item xs={12} className='Grid-Item'>
                        <Typography>
                            {props.sector.nombre}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} className='Grid-Item'>
                        <CustomizedSwitches />
                    </Grid>
                </div>
            </article>
        </>
    )
}
