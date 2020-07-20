import React from "react";

const LibraryTitle = ({ isReadBooks, title }) => (
  <div>
    <div>{title}</div>
    <div>
      <div>Назва книги</div>
      <div>Автор</div>
      <div>Рік</div>
      <div>Стор.</div>
      {isReadBooks && <div>Рейтинг книги</div>}
    </div>
  </div>
);

export default LibraryTitle;
