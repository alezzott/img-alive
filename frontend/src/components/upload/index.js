import React, { Component } from "react";

import Dropzone from "react-dropzone";

import { DropContainer, UploadMessage } from "./styles";
export default class Upload extends Component {
  renderDragMessage = (isDragActive, isDragReject) => {
    if (!isDragActive) {
      return (
        <UploadMessage className="upload">
          Arraste arquivos aqui !
        </UploadMessage>
      );
    }

    if (isDragReject) {
      return (
        <UploadMessage className="upload" type="error">
          Arquivo não Suportado
        </UploadMessage>
      );
    }

    return (
      <UploadMessage className="upload" type="success">
        Solte os arquivos aqui !
      </UploadMessage>
    );
  };

  render() {
    const { onUpload } = this.props;

    return (
      <Dropzone accept="image/*" onDropAccepted={onUpload}>
        {({ getRootProps, getInputProps, isDragActive, isDragReject }) => (
          <DropContainer
            {...getRootProps()}
            isDragActive={isDragActive}
            isDragReject={isDragReject}
          >
            <input {...getInputProps()} />
            {this.renderDragMessage(isDragActive, isDragReject)}
          </DropContainer>
        )}
      </Dropzone>
    );
  }
}
