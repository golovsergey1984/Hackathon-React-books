import React from 'react';
import '../../assets/styles/Article.css';

const Article = () => (
  <div className="article-wrapper">
    <h1 className="article-header">Books Reading</h1>
    <article className="article">
      <h2 className="header-1">Допоможе вам</h2>
      <ul className="ul">
        <li>Швидше сформулювати свою ціль і розпочати читати</li>
        <li>Пропорційно розподілити навантаження на кожний день</li>
        <li>Відстежувати особистий успіх</li>
      </ul>
      <h2 className="header-2">Також ви зможете</h2>
      <ul className="ul">
        <li>Формувати особисту думку</li>
        <li>Підвищити свої професійні якості опираючись на нові знання</li>
        <li>Стати цікавим співрозмовником</li>
      </ul>
    </article>
  </div>
);

export default Article;
