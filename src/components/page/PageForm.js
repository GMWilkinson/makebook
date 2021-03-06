import React from 'react';

import FormInput from './FormInput';
import FormTextarea from './FormTextarea';
import FormButton from './FormButton';

function PageForm({ handleChange, handleSubmit }) {
  return(
    <form onSubmit={handleSubmit}>
      <FormTextarea name="text" handleChange={handleChange}/> 
      <FormButton text="Create"/>
    </form>
  );
}

export default PageForm;
