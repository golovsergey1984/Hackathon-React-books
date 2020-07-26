import moment from 'moment';

export const getTrainingId = state => state.training?.trainingId;

export const isTrainingDone = state => state.training?.isDone;

export const getTrainingTimeStart = state => state.training?.timeStart;

export const getTrainingTimeEnd = state => state.training?.timeEnd;

export const getTrainingAvgReadPages = state => state.training?.avgReadPages;

export const getTrainingBooksCount = state => state.training?.booksCount;

export const getTrainingUnreadBooksCount = state => state.training?.unreadCount;

export const getTrainingBooks = state => state.training?.books;

export const getTrainingAllPagesCount = state => state.training?.allPagesCount;

export const getTrainingResults = state => state.training?.pagesReadResult;

export const getTrainingResultsPagesCount = state => {
  const results = getTrainingResults(state);
  if (results) {
    const total = results.reduce((acc, res) => acc + res.count, 0);
    return total;
  }
};

export const getTrainingReadPagesCount = state => {
  const books = getTrainingBooks(state);
  if (books) {
    const total = books.reduce((acc, { book, isRead }) => {
      if (isRead) {
        return acc + book.pagesCount;
      }
      return acc;
    }, 0);
    return total;
  }
};

export const getTrainingDaysGoal = state => {
  const timeStart = getTrainingTimeStart(state);
  const timeEnd = getTrainingTimeEnd(state);
  const days = moment(timeEnd).diff(timeStart, 'days');
  return days;
};

export const getTrainingDaysLeft = state => {
  const timeEnd = getTrainingTimeEnd(state);
  const days = moment(timeEnd).diff(Date.now(), 'days') + 1;
  return days;
};

export const getSortedResults = state => {
  const results = getTrainingResults(state);
  if (results) {
    return [...results].sort((a, b) => {
      return moment(a.date).format('x') - moment(b.date).format('x');
    });
  }
};

export const getDataForChart = state => {
  const results = getSortedResults(state);
  if (results) {
    const data = results.map(res => ({
      dates: moment(res.date).format('DD.MM'),
      pages: res.count,
    }));
    return data;
  }
};
