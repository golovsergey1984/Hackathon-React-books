import React, { Component } from "react";

export default class AddBookForm extends Component {
  state = { bookName: "", author: "", pages: "", year: "" };

  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    console.log(...this.state);
  };

  render() {
    return (
      <form>
        <label htmlFor="Назва книги">
          Назва книги
          <input
            placeholder="..."
            type="text"
            name="bookName"
            value={this.state.bookName}
            onChange={this.handleChange}
          />
        </label>
        <label htmlFor="Автор книги">
          Автор книги
          <input
            placeholder="..."
            type="text"
            name="author"
            value={this.state.author}
            onChange={this.handleChange}
          />
        </label>
        <label htmlFor="Рік випуску">
          Рік випуску
          <input
            placeholder="..."
            type="number"
            name="year"
            value={this.state.year}
            onChange={this.handleChange}
          />
        </label>
        <label htmlFor="Кількість сторінок">
          Кількість сторінок
          <input
            placeholder="..."
            type="number"
            name="author"
            value={this.state.pages}
            onChange={this.handleChange}
          />
        </label>
        <button type="submit">Додати</button>
      </form>
    );
  }
}
