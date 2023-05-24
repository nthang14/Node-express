const getHomePage = (req, res) => {
  res.send([{ id: 1 }, { id: 2 }]);
};
module.exports = {
  getHomePage,
};
