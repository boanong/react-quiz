const getData = () => {
  const URL =
    'https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean';
  return fetch(URL)
    .then((res) => res.json())
    .then((res) => res.results);
};

export default getData;
