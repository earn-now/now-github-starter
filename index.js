const { format } = require('silly-datetime');
const ejs = require('silly-ejs');
const TPL = '<div><h1><%= name %><% if (age > 17) { %> (adult)<% } %></h1><%- html %></div>';


module.exports = (req, res) => {
  const data = {
    name: 'Hans Chan',
    age: 18,
    html: `<p>Now is ${format(new Date())}</p>`
  };
  const html = ejs(TPL, data);
  res.end(html);
}
