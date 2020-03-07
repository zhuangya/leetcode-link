const fetchSlugMapping = require("./_fetch");
const { spellUrl } = require('./_util');

module.exports = async (req, res) => {
  try {
    const slugMapping = await fetchSlugMapping(req.query.pid);
    const slug = slugMapping[req.query.pid];
    if (slug) {
      const destUrl = spellUrl(slug);

      res.writeHead(301, {
        'Cache-Control': 'max-age=60, s-maxage=86400',
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
