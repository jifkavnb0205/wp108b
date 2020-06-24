var x = { 狗: 'dog', 貓: 'cat', 一隻: 'a', 追: 'chase', 吃: 'eat' };
function mt (c) {
  var y = [];
  for (let i in c) {
    var eword = c[i];
    var cword = x[eword];
    y.push(cword);
  }
  return y;
}
var y = mt(process.argv.slice(2));
console.log(y);