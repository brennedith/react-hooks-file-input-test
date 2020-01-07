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
          Id
          <input type="number" name="id" ref={register({ required: true })} />
        </label>

        <button type="button" onClick={prev}>
          Previous
        </button>
        <button type="submit">Finish</button>
      </form>
    </>
  );
};
