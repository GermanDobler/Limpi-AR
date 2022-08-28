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