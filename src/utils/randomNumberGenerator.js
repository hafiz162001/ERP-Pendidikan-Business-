export default function randomNumberGenerator(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
