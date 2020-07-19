import React, { Component } from "react";
import styles from "./StartTraining.module.css";

class StartTraining extends Component {
  render() {
    return (
      <div className={styles.startTrainingMainContainer}>
        <div className={styles.startTrainingContainer}>
          <h2 className={styles.startTitle}>Моє тренування</h2>
          <div className={styles.calendarContainer}>
            <div className={styles.calendarIn}>Початок</div>
            <div className={styles.calendarOut}>Завершення</div>
          </div>
          <form className={styles.bookSelectForm}>
            <p>
              <select className={styles.bookSelectField} name="book">
                <option selected="selected">Обрати книги з бібліотеки</option>
                <option value="book1">BOOK-1</option>
                <option value="book2">BOOK-2</option>
                <option value="book3">BOOK-3</option>
              </select>
            </p>
            <p>
              <input
                className={styles.bookSelectSubmit}
                type="submit"
                value="Додати"
              />
            </p>
          </form>

          <table className={styles.selectedBookTable}>
            <thead>
              <tr>
                <th className={styles.selectedBookTableBookName}>
                  Назва книги
                </th>
                <th className={styles.selectedBookTableAuthor}>Автор</th>
                <th className={styles.selectedBookTableYear}>Рік</th>
                <th className={styles.selectedBookTablePages}>Стор.</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className={styles.selectedBookTableBookName}>
                  "Війна та мир"
                </td>
                <td className={styles.selectedBookTableAuthor}>Лев Толстий</td>
                <td className={styles.selectedBookTableYear}>1869</td>
                <td className={styles.selectedBookTablePages}>1472</td>
                <td>
                  <button className={styles.selectedBookDelete}></button>
                </td>
              </tr>
            </tbody>
          </table>
          <button className={styles.startTrainingButton}>
            Почати тренування
          </button>
        </div>
        <div className={styles.bookStatisticContainer}>
          <h2 className={styles.bookStatisticTitle}>Моя мета прочитати</h2>
          <div className={styles.bookStatisticCounterContainer}>
            <div className={styles.bookStatisticCounter}>0</div>
            <div className={styles.bookStatisticCounter}>0</div>
          </div>
          <div className={styles.counterLaibelConyainer}>
            <p className={styles.counterLaibel}>Кількість книжок</p>
            <p className={styles.counterLaibel}>Кількість днів</p>
          </div>
        </div>
      </div>
    );
  }
}

export default StartTraining;
