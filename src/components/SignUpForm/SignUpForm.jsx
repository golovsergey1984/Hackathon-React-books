import React, { Component } from 'react';
import Article from './Article.jsx';
import '../../assets/styles/SignUpForm.css';
import { connect } from "react-redux"
import { withRouter } from "react-router";
import { registrationAction, logOutAction } from "../../redux/session/sessionActions"
import { pnotifyAbout } from "../../services/helpers"
import { Link } from 'react-router-dom';


class SignUpForm extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    applyPassword: '',
  };

  _isMounted = false;

  componentDidMount() {
    this._isMounted = true
  }

  submitHandler = async e => {
    e.preventDefault();

    const { email, name, password, applyPassword } = this.state

    if (password !== applyPassword) {
      return pnotifyAbout("Неправильне підтвердження паролю")
    }

    const userToReg = {
      email,
      password,
      "name": {
        "fullName": name
      }
    }


    try {
      await this.props.registrationAction(userToReg)
      this.props.history.push("/library")
      this._isMounted && this.setState({ name: "", email: "", password: "", applyPassword: "" });
    } catch (error) {
      pnotifyAbout("Схоже емейл вже був зареєстрований")
    }
  }


  changeHandler = (e) => {
    this._isMounted && this.setState({
      [e.target.name]: e.target.value,
    });
  };


  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    const { name, email, password, applyPassword } = this.state;
    return (
      <div className="main-wrapper">
        <div className="sign-up-wrapper">
          <div className="imgBack">
            <div className="form-container">
              <form className="sign-up-form" onSubmit={this.submitHandler}>
                <label>
                  Ім'я <span className="red">*</span>
                </label>
                <input type="name" name="name" placeholder="..." value={name} onChange={this.changeHandler} required />

                <label>
                  Електронна адреса <span className="red">*</span>
                </label>
                <input type="email" name="email" placeholder="..." value={email} onChange={this.changeHandler} required />

                <label>
                  Пароль <span className="red">*</span>
                </label>
                <input name="password" type="password" minLength="5" placeholder="..." value={password} onChange={this.changeHandler} required />

                <label>
                  Підтвердити пароль <span className="red">*</span>
                </label>
                <input
                  type="password"
                  name="applyPassword"
                  placeholder="..."
                  className="last-input"
                  value={applyPassword} onChange={this.changeHandler}
                  required
                />

                <button
                  label="Зареєструватися"
                  type="submit"
                  className="sign-up-button"
                >
                  Зареєструватися
              </button>

                <span className="login">
                  Вже з нами? <Link to="/login" className="login-link">Увійти</Link>
                </span>
              </form>
            </div>
          </div>
        </div>
        <Article />
      </div>
    );
  }
}

const mSTP = state => ({
  isAuthenticated: state.session.isAuthenticated
})

const mDTP = dispatch => ({
  registrationAction: (credentials) => dispatch(registrationAction(credentials)),
  logOutAction: () => dispatch(logOutAction())
})

export default connect(mSTP, mDTP)(withRouter(SignUpForm))
