const fetchSlug = require("./_fetch");

module.exports = async (req, res) => {
  try {
    const slug = await fetchSlug(req.query.pid);
    const destUrl = `https://leetcode.com/${slug}`;

    res.writeHead(301, {
      Location: destUrl
    });

    res.end(`<a href="${destUrl}" rel="noopener">Redirect...</a>`);
  } catch (e) {
    res.status(400).end("bad request");
  }
};
