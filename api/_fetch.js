const got = require('got');

module.exports = async (pid) => {
  const result = await got('https://leetcode.com/api/problems/algorithms/', {
    responseType: 'json'
  })
  console.log(Object.keys(result.body));
  const { stat: { question__title_slug } } = result.body.stat_status_pairs.find(question =>
    question.stat.question_id === pid
  );
  return question__title_slug;
};
