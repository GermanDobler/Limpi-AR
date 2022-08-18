import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


export default function SectorSelect(props) {
  const [sector, setSector] = React.useState('');

  const handleChange = (event) => {
    setSector(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{props.nombre_sector}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={sector}
          label={props.nombre_sector}
          onChange={handleChange}
        >
          <MenuItem value={1}>Baño Ciclo Superior</MenuItem>
          <MenuItem value={2}>Pasillo</MenuItem>
          <MenuItem value={3}>Aula 3</MenuItem>
          <MenuItem value={4}>Sala multimedia</MenuItem>
          <MenuItem value={5}>Biblioteca</MenuItem>
          <MenuItem value={6}>Aula 6</MenuItem>
          <MenuItem value={7}>Asesoria</MenuItem>
          <MenuItem value={8}>Taller 2 Hojalateria</MenuItem>
          <MenuItem value={9}>Laboratorio</MenuItem>
          <MenuItem value={10}>Taller 4 Torneria</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
