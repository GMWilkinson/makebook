import React from 'react';

import FormInput from './FormInput';
import FormTextarea from './FormTextarea';
import FormButton from './FormButton';

function PageForm({ handleChange, handleSubmit }) {
  return(
    <form onSubmit={handleSubmit}>
      <FormInput name="book" type="text" handleChange={handleChange} />
      <FormTextarea name="text" handleChange={handleChange}/>
      <FormInput name="choice 1" type="text" handleChange={handleChange} />
      <FormButton text="Continue story branch based on this choice"/>
      <FormInput name="choice 2" type="text" handleChange={handleChange} />
      <FormButton text="Continue story branch based on this choice"/>
    </form>
  );
}

export default PageForm;
