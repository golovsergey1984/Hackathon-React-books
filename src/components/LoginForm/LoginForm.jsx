import React, { Component } from 'react';
import s from './LoginForm.module.css'
import { loginAction } from "../../redux/session/sessionActions"
import { connect } from "react-redux"
import { withRouter } from "react-router";

// import PNotify from 'pnotify/dist/es/PNotify';
// import PNotifyButtons from 'pnotify/dist/es/PNotifyButtons';

class LoginForm extends Component {
  state = { email: '', password: '' };

  submitHandler = async e => {
    e.preventDefault();

    try {
      await this.props.loginAction(this.state)

      this.props.history.push("/library")
      this.setState({ email: '', password: '' });
    } catch (error) {
      // PNotify.alert('Notice me, senpai!');
      // Залишилось доробити пнотіфай
      alert("Неправильний пароль або логін")
      console.log(error)
    }
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
        <div className={s.imgBack}>
          <div className={s.loginFormContrainer}>
            <form className={s.loginForm} onSubmit={this.submitHandler}>
              <label className={s.label}>
                Електронна адреса <span className={s.red}>*</span>
              </label>
              <input
                className={s.input}
                placeholder="your@email.com"
                type="email"
                name="email"
                value={email}
                onChange={this.changeHandler}
                required
              />
              <label className={s.label}>
                Пароль <span className={s.red}>*</span>
              </label>
              <input
                className={s.input}
                placeholder="Пароль"
                type="password"
                name="password"
                value={password}
                onChange={this.changeHandler}
                required
              />
              <button className={s.logInButton} label="Log In" type="submit">
                Увійти
               </button>
              <button className={s.regButton} label="Registration" type="submit">
                Реєстрація
              </button>
            </form>
          </div>
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

const mDTP = dispatch => ({
  loginAction: (credentials) => dispatch(loginAction(credentials))
})

export default connect(null, mDTP)(withRouter(LoginForm))