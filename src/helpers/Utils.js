const isArrayEmpty = array => {
  if (array !== undefined && array !== null && array.length > 0) {
    return false;
  } return true;
};

export default isArrayEmpty;
