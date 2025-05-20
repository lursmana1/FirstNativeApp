const RandomNumberGenerator = (min, max, exclude) => {
  const randomNumber = Math.floor(Math.random() * (max - min) + min);
  if (randomNumber === exclude) {
    return RandomNumberGenerator(min, max, exclude);
  } else {
    return randomNumber;
  }
};
export default RandomNumberGenerator;
