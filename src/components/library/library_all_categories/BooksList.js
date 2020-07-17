import React, { Component } from "react";

export default class BooksList extends Component {
  state = { modal: false };

  handleToggle = () => {
    this.setState((state) => ({ modal: !state.modal }));
  };

  render() {
    const { isRead, isReading, willRead } = this.props;
    return (
      <>
        <div>
          <h2>Прочитано</h2>
          <div>
            <p>Назва книги</p>
            <p>Автор</p>
            <p>Рік</p>
            <p>Стор</p>
            <p>Рейтинг книги</p>
          </div>
          <div>
            {isRead.map((book) => (
              <li key={book.id}>
                <p>{book.name}</p>
                <p>{book.author}</p>
                <p>{book.year}</p>
                <p>{book.pages}</p>
                <p>{book.stars}</p>
                <button onChange={this.handleToggle}>Резюме</button>
              </li>
            ))}
          </div>
        </div>
        <div>
          <h2>Читаю</h2>
          <div>
            <p>Назва книги</p>
            <p>Автор</p>
            <p>Рік</p>
            <p>Стор</p>
          </div>
          <div>
            {isReading.map((book) => (
              <li key={book.id}>
                <p>{book.name}</p>
                <p>{book.author}</p>
                <p>{book.year}</p>
                <p>{book.pages}</p>
              </li>
            ))}
          </div>
        </div>
        <div>
          <h2>Маю намір прочитати</h2>
          <div>
            <p>Назва книги</p>
            <p>Автор</p>
            <p>Рік</p>
            <p>Стор</p>
          </div>
          <div>
            {willRead.map((book) => (
              <li key={book.id}>
                <p>{book.name}</p>
                <p>{book.author}</p>
                <p>{book.year}</p>
                <p>{book.pages}</p>
              </li>
            ))}
          </div>
        </div>
      </>
    );
  }
}
