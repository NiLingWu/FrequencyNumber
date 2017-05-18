describe("Player", function() {
  var Player = require('../../lib/jasmine_examples/Player');
  //var Song = require('../../lib/jasmine_examples/Song');
  var player;
 // var song;

  beforeEach(function() {
    player = new Player();
  //  song = new Song();
  });

  it("should return ''when given ''", function() {

    expect(player.main('')).toEqual('');

    //demonstrates use of custom matcher
 //   expect(player).toBePlaying(song);
  });

});
 