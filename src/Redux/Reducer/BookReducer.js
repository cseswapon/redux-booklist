// as simple as BookReducer is a "Dokerder" or Function, it is a simple motorize with a single action.it is two parameter i) state ii) action

import book from "../../fakeData/books.json";

const intilizeState = {
  discover: book,
  readingList: [],
  finishList: [],
};

function BookReducer(state = intilizeState, action) {
  switch (action.type) {
    case "ADD_TO_READING_LIST": {
      return {
        ...state,
        readingList: [...state.readingList, action.payload],
      };
    }
    case "REMOVE_TO_READING_LIST": {
      return {
        ...state,
        readingList: state.readingList.filter(
          (book) => book.id !== action.payload
        ),
      };
    }
    default:
      return state;
  }
}

export default BookReducer;
