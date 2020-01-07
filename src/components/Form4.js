import React from "react";
import { useForm } from "react-hook-form";

export default ({ initialState, prev, next }) => {
  const { register, handleSubmit } = useForm({
    initialState
  });

  const onSubmit = values => {
    console.log(values);
    next(values);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Id
          <input type="number" name="id" ref={register} />
        </label>

        <button type="button" onClick={prev}>
          Previous
        </button>
        <button type="submit">Finish</button>
      </form>
    </>
  );
};
