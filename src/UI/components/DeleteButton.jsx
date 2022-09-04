import * as React from 'react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import Stack from '@mui/material/Stack';
import _JSXStyle from 'styled-jsx/style'


export default function DeleteButton() {
  return (
    <Stack direction="row" spacing={2}>
      <Button className="botones" variant="outlined" startIcon={<DeleteIcon />}>
       Borrar
      </Button>
      <style jsx="true">{`
      .botones{
        margin:5px !important;
       width :160px !important;
      }
    `}</style>
    </Stack>
  );
}
