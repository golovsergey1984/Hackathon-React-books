import moment from 'moment';

export const getTrainingId = state => state.training.trainingId;

export const isTrainingDone = state => state.training.isDone;

export const getTrainingTimeStart = state =>
  moment(state.training.timeStart, 'DD.MM.YYYY');

export const getTrainingTimeEnd = state =>
  moment(state.training.timeEnd, 'DD.MM.YYYY');

export const getTrainingAvgReadPages = state => state.training.avgReadPages;

export const getTrainingReadPagesCount = state => state.training.readPagesCount;

export const getTrainingBooksCount = state => state.training.booksCount;

export const getTrainingUnreadBooksCount = state => state.training.unreadCount;

export const getTrainingBooks = state => state.training.books;

export const getTrainingAllPagesCount = state => state.training.allPagesCount;

export const getTrainingResults = state => state.training.pagesReadResult;

export const getTrainingDaysGoal = () => {
  const timeStart = moment(getTrainingTimeStart(), 'DD.MM.YYYY');
  const timeEnd = moment(getTrainingTimeEnd(), 'DD.MM.YYYY');
  const days = moment(timeEnd).diff(timeStart, 'days');
  return days;
};

export const getTrainingDaysLeft = () => {
  const timeEnd = moment(getTrainingTimeEnd(), 'DD.MM.YYYY');
  const days = moment(timeEnd).diff(Date.now(), 'days');
  return days;
};

export const getSortedResults = state => {
  const results = getTrainingResults(state);
  results.sort((a, b) => {
    return moment(a.date).format('x') - moment(b.date).format('x');
  });
};

export const getDataForChart = state => {
  const results = getSortedResults(state);
  const data = results.map(res => ({
    date: moment(res.date).format('DD.MM'),
    pages: res.count,
  }));
  return data;
};
