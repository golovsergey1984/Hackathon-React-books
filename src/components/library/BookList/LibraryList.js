import React, { Component } from 'react';

export default class LibraryList extends Component {
  state = { modal: false };

  handleModalChange = () => {
    this.setState(state => ({ modal: !state.modal }));
    console.log(this.state.modal);
  };

  render() {
    const { books, isReadBooks } = this.props;
    return (
      <div>
        {books.map(book => (
          <li key={book.id}>
            <div>
              <img src={require('./images/book.svg')} width={24} />
              <div>
                <div>{book.title}</div>
                <div>{book.author}</div>
                <div>{book.year}</div>
                <div>{book.pages}</div>
                {isReadBooks && <div>{book.rating}</div> && (
                  <div>
                    <button onClick={this.handleModalChange}>Резюме</button>
                  </div>
                )}
              </div>
            </div>
          </li>
        ))}
      </div>
    );
  }
}
