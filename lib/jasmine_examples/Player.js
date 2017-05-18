function Player() {
}

Player.prototype.main = function(words) {
  if (words !== '')
  {
    var wordArry = words.split(' ');
    return wordArry.map((w) => format(w,1)).join( '\n');
  }
  return '';
};
var format = function(words,count)
{
  return words + ' ' + count;
}

module.exports = Player;
