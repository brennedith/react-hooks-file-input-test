import React from 'react';
import { useForm } from 'react-hook-form';

export default ({ initialState, prev, next }) => {
  const { register, handleSubmit } = useForm({
    defaultValues: initialState
  });

  const onSubmit = values => {
    next(values);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Name
          <input type="text" name="name" ref={register({ required: true })} />
        </label>

        <button type="button" onClick={prev} disabled={true}>
          Previous
        </button>
        <button type="submit">Next</button>
      </form>
    </>
  );
};
