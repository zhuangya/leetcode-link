module.exports = (req, res) => {
  const { id } = req.query;

  res.status(200).send({ id });
};
