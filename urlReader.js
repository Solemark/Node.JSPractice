var url = require('url');
var address = 'http://localhost:3000/default.htm?year=2022&month=may';
var q = url.parse(address, true);

console.log(q.host);
console.log(q.pathname);
console.log(q.search);

var qdata = q.query;
console.log(qdata.month);
console.log(qdata.year);