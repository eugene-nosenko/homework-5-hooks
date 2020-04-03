import React, { useState } from "react";
import { Component, PureComponent } from "react";

/*
    Напишите компонент с двуми инпутами и кнопкой

    Если инпуты заполнены - при нажатии на кнопку показывается сообщение об успехе

    У сообщения об успехе должно быть поле data-testid='success'
    Сообжение должно содержать текст "Вы вошли"

//    Email инпут должен иметь поле data-testid='input-email'
//    Password инпут должен иметь поле data-testid='input-password'
//    Кнопка логина должна иметь поле data-testid='submit'

    ##  Дополнительное задание:

    У вас получится несколько useState.
    В качестве дополнительной тренировки попробуйте использовать useReducer
    вместо нескольких useState

    Прочитайте документацию:
    https://ru.reactjs.org/docs/hooks-reference.html#usereducer
*/

export const Form = () => {
  const [email, setEmail] = useState(""),
    [password, setPassword] = useState(""),
    [success, setSuccess] = useState(false);

  //   const handleSubmit = e => {
  //     if (email.length !== 0 && password.length !== 0) {
  //       console.log("Вы вошли");
  //       return <div data-testid="success">Вы вошли</div>;
  //     }
  //   };

  const onClick = () => {
    if (email.length !== 0 && password.length !== 0) {
      setSuccess(true);
    }
  };
  return (
    <>
      <input
        type="text"
        name="email"
        data-testid="email-input"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <input
        type="password"
        name="password"
        data-testid="password-input"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />

      <button data-testid="submit" onClick={onClick} />
      {success && <div data-testid="success-message">Вы вошли</div>}
    </>
  );
};
