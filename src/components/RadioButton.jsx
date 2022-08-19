import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function RadioButton() {
  return (
    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">Cargo u Oficio</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
      >
        <FormControlLabel value="Portero" control={<Radio />} label="Portero" />
        <FormControlLabel value="Secretario" control={<Radio />} label="Secretario" />
      </RadioGroup>
    </FormControl>
  );
}
