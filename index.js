addEventListener("fetch", event => {
  event.respondWith(handleRequest(event.request));
});

const handleRequest = async request => {
  const url = new URL(request.url);
  const [id] = url.pathname.split("/").slice(-1);
  const response = await fetch("https://leetcode.com/api/problems/algorithms/", { cf: { cacheEverything: true } });
  const body = await response.json();
  const localMapping = body.stat_status_pairs.reduce((soFar, current) => {
    return {
      ...soFar,
      [current.stat.frontend_question_id]: current.stat.question__title_slug
    };
  }, {});

  const slug = localMapping[id];
  return Response.redirect(`https://leetcode.com/problems/${slug}`, 301);
};
