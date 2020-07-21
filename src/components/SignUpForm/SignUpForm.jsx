import React, { Component } from 'react';
import Article from './Article.jsx';
import '../../assets/styles/SignUpForm.css';

export default class SignUpForm extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    applyPassword: '',
  };

  //   submitHandler = (e) => {
  //     e.preventDefault();

  //     this.props.onSignUp({ ...this.state });
  //     this.setState({ name: "", email: "", password: "" });
  //   };

  //   changeHandler = (e) => {
  //     this.setState({
  //       [e.target.name]: e.target.value,
  //     });
  //   };

  render() {
    // const { name, email, password, applyPassword } = this.state;
    return (
      <div className="main-wrapper">
        <div className="sign-up-wrapper">
          <div className="form-container">
            <form className="sign-up-form">
              <label>
                Ім'я <span className="red">*</span>
              </label>
              <input type="name" name="name" placeholder="..." />

              <label>
                Електронна адреса <span className="red">*</span>
              </label>
              <input type="email" name="email" placeholder="..." />

              <label>
                Пароль <span className="red">*</span>
              </label>
              <input name="password" placeholder="..." />

              <label>
                Підтвердити пароль <span className="red">*</span>
              </label>
              <input
                type="applyPassword"
                name="applyPassword"
                placeholder="..."
                className="last-input"
              />

              <button
                label="Зареєструватися"
                type="submit"
                className="sign-up-button"
              >
                Зареєструватися
              </button>

              <span className="span">
                Вже з нами? <a className="logout-link">Увійти</a>
              </span>
            </form>
          </div>
        </div>
        <Article />
      </div>
    );
  }
}
