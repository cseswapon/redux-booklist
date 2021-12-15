// as simple as "Dokaner kaj kormo"
/**
 * Note : i) action helper function with redux ii) action as a object
 */
export function addToReadingList(payload) {
  return {
    type: "ADD_TO_READING_LIST",
    payload,
  };
}

export function removeReadingList(payload) {
  return {
    type: "REMOVE_TO_READING_LIST",
    payload,
  };
}
