export function taskFirst() {
  // \n
  const task = 'I prefer const when I can.';
  return task;
}// \n

export function getLast() {
  return ' is okay';
}

export function taskNext() {
  let combination = 'But sometimes let';
  combination += getLast();

  return combination;
}
