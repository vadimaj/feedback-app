export function countTotalFeedback(feedback) {
  return Object.values(feedback).reduce((prev, item) => prev + item, 0);
}
export function countPositiveFeedback(good, total) {
  return Math.round((good * 100) / total);
}
