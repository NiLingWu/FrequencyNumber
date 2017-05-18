function Player() {
}

Player.prototype.main = function(words) {
  if (words !== '')
  {
    return format(words ,1);
  }
  return '';
};
var format = function(words,count)
{
  return words + ' ' + count;
}

module.exports = Player;
