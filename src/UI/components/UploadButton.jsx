import * as React from 'react';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Stack from '@mui/material/Stack';
import _JSXStyle from 'styled-jsx/style'

export default function UploadButton(props) {
  return (
    <Stack direction="row" alignItems="center" spacing={2}>
      <Button className="botones" variant="contained" component="label">
        Cargar Imagen
        <input hidden accept="image/*" multiple type="file" />
      </Button>
      <IconButton color="primary" aria-label="upload picture" component="label">
        <input hidden accept="image/*" type="file" />
        <PhotoCamera  />
      </IconButton>
      <style jsx>{`
      .botones{
        margin:5px !important;
        width :160px !important;
      }
    `}</style>
    </Stack>
  );
}