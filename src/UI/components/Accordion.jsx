import * as React from 'react';
import { useState } from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { FormControlLabel, Grid, popoverClasses, Switch } from '@mui/material';
import _JSXStyle from 'styled-jsx/style'
import Slide from '@mui/material/Slide';
import { Box } from '@mui/system';
import CustomizedSwitches from './SwitchIOS';
import { Image } from 'react-native';

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  width: '100',
  maxWidth: '100',
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function CustomizedAccordions(props) {
  const [checked, setChecked] = React.useState(false);//Para la animación de la img. if == false no la hace, if == true la hace.
  const containerRef = React.useRef(null);
  const handleChangee = () => {
    setChecked((prev) => !prev);
  };
  const [expanded, setExpanded] = React.useState(false);
  const [nombre, setNombre] = useState(props.sector.nombre);
  //   setId(props.sector.id);
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
    setNombre(props.sector.nombre);
    setChecked((prev) => !prev);
  };

  return (
    <>
      <style jsx="true">{`
      .Contendedor-Accordion{
        width: 100% !important;
        margin: 10px 0 15px 0;
      }
      .Grid-Item{
        padding:0 !important;
      }
      .Contenedor-Detail{
        padding:15px 15px 0 15px !important;
      }
    `}</style>
      <Accordion className='Contendedor-Accordion' key={props.sector.id} expanded={expanded === nombre} onChange={handleChange(nombre)}>
        <AccordionSummary aria-controls={nombre} id={nombre}>
          <Typography>{props.sector.nombre}</Typography>
        </AccordionSummary>
        <AccordionDetails className='Contenedor-Detail'>
          <Grid container spacing={1}>
            <Grid item xs={4} className='Grid-Item'>
              <Box
                sx={{

                  display: 'flex',
                  borderRadius: 1,
                  bgcolor: (theme) =>
                    theme.palette.mode === 'light' ? 'grey.100' : 'grey.900',
                  overflow: 'hidden',
                }}
                className="Grid-Item"
                ref={containerRef}
              >
                <Slide direction="up" in={checked} container={containerRef.current} style={{ transitionDelay: checked ? '250ms' : '0ms' }}>
                  <img src={props.sector.img} height={150} width={150} />
                  {/* <img src={require('../../img/sectores/pasillo-taller.png')}/> */}
                </Slide>
              </Box>
            </Grid>
            <Grid item xs={8} container className='Grid-Item'>
              <Grid item xs={12} className='Grid-Item'>
              </Grid>
              <Grid item xs={8} className='Grid-Item'>
                <Typography>
                  Ultima Limpieza: --/--/----
                </Typography>
              </Grid>
              <Grid item xs={4} className='Grid-Item'>
                <CustomizedSwitches />
              </Grid>
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
    </>
  );
}
