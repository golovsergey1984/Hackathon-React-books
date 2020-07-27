import * as api from './api';
import * as session from '../redux/session/sessionActions';
import * as books from '../redux/books/booksActions';
import * as training from '../redux/training/trainingActions';
import PNotify from 'pnotify/dist/es/PNotify';
import 'pnotify/dist/es/PNotifyStyleMaterial.js';

export function getErrorMessageByRejectedAction(action) {
  const actionType = action.type.replace('/rejected', '');

  let message = '';
  switch (actionType) {
    case session.Type.LOG_IN:
    case session.Type.REGISTRATION:
    case session.Type.GET_USER: {
      api.clearAuthHeader();
      message = 'Помилка авторизації!';
      break;
    }

    case books.Type.GET_BOOKS: {
      message = 'Помилка! Не вдалося отримати бібліотеку користувача!';
      break;
    }

    case books.Type.CREATE_BOOK: {
      message = 'Помилка! Не вдалося додати книгу в бібліотеку користувача!';
      break;
    }

    case books.Type.UPDATE_BOOK: {
      message = 'Помилка! Не вдалося оновити книгу!';
      break;
    }

    case books.Type.DELETE_BOOK: {
      message = 'Помилка! Не вдалося видалити книгу!';
      break;
    }

    case training.Type.GET_TRAINING: {
      message = 'Помилка! Не вдалося отримати данні тренування!';
      break;
    }

    case training.Type.ADD_TRAINING: {
      message = 'Помилка! Не вдалося розпочати тренування!';
      break;
    }

    case training.Type.CLOSE_TRAINING: {
      message = 'Помилка! Не вдалося завершити тренування!';
      break;
    }

    case training.Type.DELETE_TRAINING: {
      message = 'Помилка! Не вдалося видалити тренування!';
      break;
    }

    case training.Type.UPDATE_TRAINING: {
      message = 'Помилка! Не вдалося оновити тренування!';
      break;
    }

    case training.Type.TOGGLE_IS_BOOK_READ: {
      message = 'Помилка! Не вдалося відмітити книгу як прочитану!';
      break;
    }

    case training.Type.ADD_RESULT: {
      message = 'Помилка! Не вдалося додати результат прочитаних сторінок!';
      break;
    }

    case training.Type.DELETE_RESULT: {
      message = 'Помилка! Не вдалося видалити результат прочитаних сторінок!';
      break;
    }

    default:
      message = action.error.message;
      break;
  }

  console.error(message);
  const error = action.error;
  error.pnotifyMessage = message;

  return error;
}

export function pnotifyAbout(errMsg) {
  PNotify.defaults.delay = '2000';
  PNotify.defaults.styling = 'material';
  return PNotify.error({
    text: errMsg,
    stack: {
      dir1: 'down',
      dir2: 'left', // Position from the top left corner.
      firstpos1: 90,
      firstpos2: 90, // 90px from the top, 90px from the left.
    },
  });
}
