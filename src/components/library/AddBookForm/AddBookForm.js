import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as booksActions from '../../../redux/books/booksActions';
import styles from './addBookForm.module.css';
import PropTypes from 'prop-types';

class AddBookForm extends Component {
  state = { title: '', author: '', pagesCount: '', year: '' };

  handleChange = e => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  handleSubmit = async e => {
    e.preventDefault();
    const { pagesCount, year } = this.state;

    this.props.handleBookSubmit({
      ...this.state,
      pagesCount: +[pagesCount],
      year: +[year],
    });

    this.setState({ title: '', author: '', pagesCount: '', year: '' });
  };

  render() {
    const { title, pagesCount, author, year } = this.state;

    return (
      <form className={styles.form} onSubmit={this.handleSubmit}>
        <label htmlFor="Назва книги">
          <span className={styles.span}>Назва книги</span>
          <input
            required
            placeholder="..."
            type="text"
            name="title"
            value={title}
            onChange={this.handleChange}
            className={styles.bookName}
            autoComplete="off"
          />
        </label>

        <label htmlFor="Автор книги">
          <span className={styles.span}>Автор книги</span>
          <input
            required
            placeholder="..."
            type="text"
            name="author"
            value={author}
            onChange={this.handleChange}
            className={styles.author}
            autoComplete="off"
          />
        </label>

        <label htmlFor="Рік випуску">
          <span className={styles.span}>Рік випуску</span>
          <input
            required
            placeholder="..."
            type="number"
            name="year"
            value={year}
            onChange={this.handleChange}
            className={styles.number}
            autoComplete="off"
            min="1"
          />
        </label>

        <label htmlFor="Кількість сторінок">
          <span className={styles.span}>Кількість сторінок</span>
          <input
            required
            placeholder="..."
            type="number"
            name="pagesCount"
            value={pagesCount}
            onChange={this.handleChange}
            className={styles.number}
            autoComplete="off"
            min="1"
          />
        </label>

        <button className={styles.btn}>Додати</button>
      </form>
    );
  }
}

AddBookForm.propTypes = {
  handleBookSubmit: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  handleBookSubmit: book => dispatch(booksActions.createBookAction(book)),
});

export default connect(null, mapDispatchToProps)(AddBookForm);
