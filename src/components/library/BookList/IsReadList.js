import React, { Component } from "react";

export default class IsReadList extends Component {
  state = { modal: false };

  handleModalChange = () => {
    this.setState((state) => ({ modal: !state.modal }));

    console.log(this.state.modal);
  };

  render() {
    const { isRead } = this.props;
    return (
      <>
        <div>Прочитано</div>
        <div>
          <div>Назва книги</div>
          <div>Автор</div>
          <div>Рік</div>
          <div>Стор.</div>
          <div>Рейтинг книги</div>
        </div>
        {isRead.map((book) => (
          <div>
            <div>{book.title}</div>
            <div>{book.author}</div>
            <div>{book.year}</div>
            <div>{book.pages}</div>
            <div>{book.rating}</div>
            <div>
              <button onClick={this.handleModalChange}></button>
            </div>
          </div>
        ))}
      </>
    );
  }
}
