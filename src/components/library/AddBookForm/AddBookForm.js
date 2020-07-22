import React, { Component } from 'react';
import styles from './addBookForm.module.css';

export default class AddBookForm extends Component {
  state = { bookName: '', author: '', pages: '', year: '' };
  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  handleSubmit = e => {
    e.preventDefault();
    console.log(...this.state);
  };
  render() {
    return (
      <form className={styles.form}>
        <label htmlFor="Назва книги">
          <span className={styles.span}>Назва книги</span>
          <input
            placeholder="..."
            type="text"
            name="bookName"
            value={this.state.bookName}
            onChange={this.handleChange}
            className={styles.bookName}
            autoComplete="off"
          />
        </label>

        <label htmlFor="Автор книги">
          <span className={styles.span}>Автор книги</span>
          <input
            placeholder="..."
            type="text"
            name="author"
            value={this.state.author}
            onChange={this.handleChange}
            className={styles.author}
            autoComplete="off"
          />
        </label>

        <label htmlFor="Рік випуску">
          <span className={styles.span}>Рік випуску</span>
          <input
            placeholder="..."
            type="number"
            name="year"
            value={this.state.year}
            onChange={this.handleChange}
            className={styles.number}
            autoComplete="off"
          />
        </label>

        <label htmlFor="Кількість сторінок">
          <span className={styles.span}>Кількість сторінок</span>
          <input
            placeholder="..."
            type="number"
            name="pages"
            value={this.state.pages}
            onChange={this.handleChange}
            className={styles.number}
            autoComplete="off"
          />
        </label>
        <button className={styles.btn} type="submit">
          Додати
        </button>
      </form>
    );
  }
}
