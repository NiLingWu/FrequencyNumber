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

  it("should return 'is 1'when given 'is" , function() {

    expect(player.main('is')).toEqual('is 1');

    //demonstrates use of custom matcher
 //   expect(player).toBePlaying(song);
  });
  it("should return 'he 1\n is 1'when given 'he is" , function() {

    expect(player.main('he is')).toEqual('he 1\nis 1');

    //demonstrates use of custom matcher
 //   expect(player).toBePlaying(song);
  })
  it("should return 'he 2\n is 1'when given 'he he is" , function() {

    expect(player.main('he he is')).toEqual('he 2\nis 1');

    //demonstrates use of custom matcher
 //   expect(player).toBePlaying(song);
  });
  it("should return 'is 2\n he 1'when given 'he is is" , function() {

    expect(player.main('he is is')).toEqual('is 2\nhe 1');

    //demonstrates use of custom matcher
 //   expect(player).toBePlaying(song);
  });

});
