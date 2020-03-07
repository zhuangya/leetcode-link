const fetchSlugMapping = require("./_fetch");

module.exports = async (req, res) => {
  try {
    const slugMapping = await fetchSlug(req.query.pid);

    const totalCount = Object.keys(slugMapping).length;

    const randomProblemId = Math.floor(Math.random() * totalCount);

    const slug = slugMapping(randomProblemId);
    if (slug) {
      const destUrl = `https://leetcode.com/problems/${slug}`;

      res.writeHead(301, {
        Location: destUrl
      });

      res.end(`<a href="${destUrl}" rel="noopener">Redirect...</a>`);
    } else {
      res.status(404);
      res.end("not found");
    }
  } catch (e) {
    res.status(400).end("bad request");
  }
};
