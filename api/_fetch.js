const got = require("got");

const upstreamApi = "https://leetcode.com/api/problems/algorithms/";

module.exports = async pid => {
  const result = await got(upstreamApi, {
    responseType: "json"
  });

  return result.body.stat_status_pairs.reduce(
    (soFar, current) => ({
      ...soFar,
      [current.stat.question_id]: current.stat.question__title_slug
    }),
    {}
  );
};
