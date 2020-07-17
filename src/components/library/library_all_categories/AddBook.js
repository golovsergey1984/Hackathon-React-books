import React, { Component } from "react";

export default class AddBook extends Component {
  state = {
    bookName: "",
    author: "",
    year: null,
    pages: null,
  };

  handlerChange = (e) => {
    const { name, value } = e.target;

    this.setState({ name: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Назва книги
          <input name="bookName" type="text" onChange={this.handlerChange} />
        </label>
        <label>
          Автор Книги
          <input name="author" type="text" onChange={this.handlerChange} />
        </label>
        <label>
          Рік випуску
          <input name="year" type="number" onChange={this.handlerChange} />
        </label>
        <label>
          Кількість сторінок
          <input name="pages" type="number" onChange={this.handlerChange} />
        </label>

        <button>Додати</button>
      </form>
    );
  }
}
