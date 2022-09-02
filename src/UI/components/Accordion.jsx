import * as React from 'react';
import { useState } from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { Grid, popoverClasses } from '@mui/material';
import _JSXStyle from 'styled-jsx/style'

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
  const [expanded, setExpanded] = React.useState(false);
  const [nombre, setNombre] = useState(props.sector.nombre);
  //   setId(props.sector.id);
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
    setNombre(props.sector.nombre);
  };

  return (
    <>
      <style jsx="true">{`
      .Contendedor-Accordion{
        width: 89% !important;
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
            <img src={props.sector.img} height={180} width={150} />
            </Grid>
            <Grid item xs={8} className='Grid-Item'>
            {props.sector.detalles}
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat obcaecati pariatur dignissimos eum voluptatum, error provident voluptatem quis aspernatur quia, optio ab. Dolorum hic unde autem recusandae vero explicabo. Porro?
            </Grid>          
          </Grid>
      </AccordionDetails>
    </Accordion>
    </>
  );
}
