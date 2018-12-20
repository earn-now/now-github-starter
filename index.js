const { format } = require('silly-datetime');

module.exports = (req, res) => {
  res.end(`Now is ${format(new Date())}`);
}
