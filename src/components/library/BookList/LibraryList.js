import React, { Component } from 'react';
import styles from './BookList.module.css';
import StarReactRating from '../../StarRating/StarRating';
import LibraryListModal from '../LibraryList-modal/LibraryList-modal';

export default class LibraryList extends Component {
  state = { modal: false };

  handleModalChange = () => {
    this.setState(state => ({ modal: !state.modal }));
    console.log(this.state.modal);
  };

  render() {
    const { books, isReadBooks, rating = 4 } = this.props;
    const { modal } = this.state;
    return (
      <div className={styles.mainBox}>
        {books.map(book => (
          <li key={book.id} className={styles.list}>
            <div className={styles.wrapBooks}>
              <img
                className={styles.image}
                src={require('./images/book.svg')}
                alt="some img"
                width={24}
              />
              <div className={styles.secondBoxBooks}>
                <div className={styles.nameBook}>{book.title}</div>
                <div className={styles.authorBook}>{book.author}</div>
                <div className={styles.yearBook}>{book.year}</div>
                <div className={styles.storBook}>{book.pages}</div>
                {isReadBooks && (
                  <div className={styles.rating}>
                    <StarReactRating rating={rating} />
                    <button
                      className={styles.button}
                      onClick={this.handleModalChange}
                    >
                      Резюме
                    </button>
                  </div>
                )}
                {modal && <LibraryListModal ratingValue={rating} />}
              </div>
            </div>
          </li>
        ))}
      </div>
    );
  }
}
