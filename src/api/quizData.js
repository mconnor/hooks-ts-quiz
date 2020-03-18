const data = require('./data.json');

module.exports = (req, res) => {
    const jsonData = res.json(data);
    res.status(200).send(jsonData);
  };
  