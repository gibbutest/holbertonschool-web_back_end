const cleanSet = (set, startString) => {
  if (!startString || typeof startString !== 'string') return '';

  return Array.from(set)
    .filter((value) => value.startsWith(startString))
    .map((value) => value.substring(startString.length))
    .join('-');
};
