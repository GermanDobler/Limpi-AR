<<<<<<< HEAD
import React, { useState } from "react";
import ImageUploader from "react-images-upload";
export default function ImageSelector(){
  class App extends React.Component {
      constructor(props) {
          super(props);
           this.state = { pictures: [] };
           this.onDrop = this.onDrop.bind(this);
      }
      onDrop(picture) {
          this.setState({
              pictures: this.state.pictures.concat(picture),
          });
      }
      render() {
          return (
              <ImageUploader
                  name={props.nombre}
                  label={props.nombre}
                  withIcon={true}
                  buttonText='Choose images'
                  onChange={this.onDrop}
                  imgExtension={['.jpg', '.gif', '.png', '.gif']}
                  maxFileSize={5242880}
              />
          );
      }
  }
}
=======
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

>>>>>>> e2a4caf4eb803280642dcf712fcf2ed1c066854f
