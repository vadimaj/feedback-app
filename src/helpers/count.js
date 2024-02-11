export function countTotalFeedback(good, bad, neutral) {
  return good + bad + neutral;
}
export function countPositiveFeedback(good, total) {
  return Math.round((good * 100) / total);
}
