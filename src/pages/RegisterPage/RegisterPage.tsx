import React from 'react';
import './RegisterPage.scss';
import { useForm } from 'react-hook-form';

type RegistrationFormInputs = {
  name: string;
  lastName: string;
  email: string;
  password: string;
};

export function RegisterPage(): React.JSX.Element {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegistrationFormInputs>({
    defaultValues: {
      name: 'John',
      lastName: 'Doe',
    },
  });

  const submitHandler = (data: RegistrationFormInputs) => {
    console.debug(data);
  };

  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      RegisterPage <br />
      <label>
        Name:
        <input
          type="text"
          {...register('name', {
            required: 'name is required',
            minLength: { value: 4, message: 'name must be 4 characters at least' },
          })}
        />
      </label>
      {errors.name && <div className="form-error">{errors.name.message}</div>}
      <label>
        Last Name:
        <input type="text" {...register('lastName', { required: true })} />
      </label>
      {errors.lastName && <div className="form-error">{errors.lastName.message}</div>}
      <label>
        Email:
        <input type="email" {...register('email', { required: true })} />
      </label>
      {errors.email && <div className="form-error">{errors.email.message}</div>}
      <label>
        Password:
        <input type="password" {...register('password', { required: true })} />
      </label>
      {errors.password && <div className="form-error">{errors.password.message}</div>}
      <button type="submit">Register</button>
    </form>
  );
}
