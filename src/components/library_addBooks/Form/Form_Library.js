import React, { Component } from 'react';
import styles from '../library.module.css';

export default class Form extends Component {
  state = {};
  render() {
    return (
      <div className={styles.wrapper}>
        <form className={styles.form2} action="https://google.com">
          <label>
            <div className={styles.form}>
              <span className={styles.text}>Назва книги</span>
              <input
                className={styles.input}
                type="text"
                required
                placeholder="..."
              ></input>
            </div>
          </label>
          <label>
            <div className={styles.form}>
              <span className={styles.text}>Автор книги</span>
              <input
                className={styles.input}
                type="text"
                required
                placeholder="..."
              ></input>
            </div>
          </label>

          <label>
            <div className={styles.form}>
              <span className={styles.text}>Рік випуску</span>
              <select className={styles.select}>
                <option value="" disabled>
                  ...
                </option>
                <option value="...">...</option>
                <option value="1985">1985</option>
                <option value="1986">1986</option>
                <option value="1987">1987</option>
                <option value="1988">1988</option>
                <option value="1989">1989</option>
                <option value="1990">1990</option>
                <option value="1991">1991</option>
                <option value="1992">1992</option>
                <option value="1993">1993</option>
                <option value="1994">1994</option>
                <option value="1995">1995</option>
                <option value="1996">1996</option>
                <option value="1997">1997</option>
                <option value="1998">1998</option>
                <option value="1999">1999</option>
                <option value="2000">2000</option>
              </select>
            </div>
          </label>
          <label>
            <div className={styles.form}>
              <span className={styles.text}>Кількість сторінок</span>
              <input
                className={styles.input}
                type="text"
                required
                placeholder="..."
              ></input>
            </div>
          </label>
          <button
            className={styles.btn_form}
            type="submit"
            value="Go to Google"
          >
            додати
          </button>
        </form>
      </div>
    );
  }
}
