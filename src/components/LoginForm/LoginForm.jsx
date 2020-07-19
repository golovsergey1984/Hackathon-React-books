import React, { Component } from 'react';
import s from './LoginForm.module.css'
import img from './img/img-1.jpg'


export default class LoginForm extends Component {
  state = { email: '', password: '' };

  submitHandler = e => {
    e.preventDefault();

    this.props.onLogin({ ...this.state });
    this.setState({ email: '', password: '' });
  };

  changeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    const { email, password } = this.state;
    
    return (
    <div className={s.mainContainer}>
      <div className={s.loginFormContrainer}>
      <img src={img} alt="" className={s.imgStyle}/>
      <form className={s.loginForm} onSubmit={this.submitHandler}>
        <label className={s.label}>
          Електронный адрес *
          <input
            className={s.input}
            placeholder="your@email.com"
            type="email"
            name="email"
            value={email}
            onChange={this.changeHandler}
          />
        </label>
        <label className={s.label}>
          Пароль *
          <input
            className={s.input}
            placeholder="Пароль"
            type="password"
            name="password"
            value={password}
            onChange={this.changeHandler}
          />
        </label>
        <button className={s.logInButton} label="Log In" type="submit">
            Увійти
        </button>
        <button className={s.regButton} label="Registration" type="submit">
            Реєстрація
        </button>
      </form>
      </div>
      <div className={s.quoteContainer}>
      <div className={s.qouteCommaWrapper}> 
      <p className={s.comma}>"</p>
        <p className={s.quote}>
          Книги - это корабли мысли, странствующие по волнам
          времени и бережно несущие свой драгоценный груз от поколения
          к поколению.
        </p>
       <p className={s.author}>Бэкон Ф.</p>
      </div>
      </div>
      </div>
    );
  }
}