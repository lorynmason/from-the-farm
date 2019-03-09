import React, { Component } from 'react';
import ReactFilestack from 'react-filestack'
import { apikey } from '../../apikey'

const NewUser = () => {
  const basicOptions = {
    accept: 'image/*',
    fromSources: ['local_file_system'],
    maxSize: 1024 * 1024,
    maxFiles: 1,
  }

  const onSuccess = (result) => {
    console.error(result.filesUploaded[0].url);    
  }
  const onError = (error) => {
    console.error('error', error);
  }

  return (
    <ReactFilestack
      apikey={apikey}
      buttonText="Upload Photo"
      buttonClass="ui medium button gray"
      options={basicOptions}
      onSuccess={onSuccess}
      onError={onError}
/>
  )
}

export default NewUser