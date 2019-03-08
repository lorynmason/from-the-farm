import React, { Component } from 'react';
import ReactFilestack from 'react-filestack'

const apiKey = "A0tWrl1fcQ6qhdO568TLoz"


const NewUser = () => {
  const basicOptions = {
    accept: 'image/*',
    fromSources: ['local_file_system'],
    maxSize: 1024 * 1024,
    maxFiles: 1,
  }

  const onSuccess = (result) => {
    console.error('win', result, result.filesUploaded.map(file => file.url));    
  }
  const onError = (error) => {
    console.error('error', error);
  }

  return (
    <ReactFilestack
      apikey={apiKey}
      buttonText="Upload Photo"
      buttonClass="ui medium button gray"
      options={basicOptions}
      onSuccess={onSuccess}
      onError={onError}
/>
  )
}

export default NewUser