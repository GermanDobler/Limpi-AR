import * as React from 'react';
import { FileUpload } from 'primereact/fileupload';

const chooseOptions = { label: 'Choose', icon: 'pi pi-fw pi-plus' };
const uploadOptions = { label: 'Uplaod', icon: 'pi pi-upload', className: 'p-button-success' };
const cancelOptions = { label: 'Cancel', icon: 'pi pi-times', className: 'p-button-danger' };
const myUploader = (event) => {
  //event.files == files to upload
}

export default function ImageSelector({ props }) {
  return (

    <FileUpload name="demo[]" url="./upload" chooseOptions={chooseOptions} uploadOptions={uploadOptions} cancelOptions={cancelOptions} uploadHandler={myUploader} />


  );
}

