import React from 'react';
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import Form from "../Form";
import Button from "../../UI/Button";
import styles from './styles.module.css';

const AuthForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const history = useHistory();

  const onSubmit = async (data) => {
    const response = await fetch('/user.json');
    const user = await response.json();
    localStorage.setItem('user', JSON.stringify(user));
    history.push('/account');
  };

  return (
    <div>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <h3 className={styles.h3}>Login</h3>

        <label className={styles.label} htmlFor={'login'}>Login</label>
        <input
          {...register('login',  { required: true})}
          className={styles.input}
          type="text"
          id={'login'}
        />
        {errors?.login?.type === "required" && <p className={styles.error}>Поле обязательно для заполнения</p>}

        <label className={styles.label} htmlFor={'password'}>Password</label>
        <input
          {...register('password', { required: true, minLength: 8 })}
          id={'password'}
          className={styles.input}
          type="text"
        />
        {errors?.password?.type === "required" && <p className={styles.error}>Поле обязательно для заполнения</p>}
        {errors?.password?.type === "minLength" && <p className={styles.error}>Пароль должен содержать не менее 8 символов</p>}

        <Button type='submit'  addClass={'btn__red--min'} title={'Войти'} />
      </Form>
    </div>
  )
};

export default AuthForm;
