import * as React from 'react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import _JSXStyle from 'styled-jsx/style'

export default function SendButton(props) {
  return (
    <Stack direction="row" spacing={2}>
      <Button className="botones" variant="contained" endIcon={<SendIcon />}>
        Enviar
      </Button>
      <style jsx>{`
      .botones{
        margin:5px !important;
        width :160px !important;
      }
    `}</style>
    </Stack>
  );
}
