const assert = require('assert');
const spue = require('./index.js');

const input = {input:'rgb.png'};
const expected = [[255,0,0,1],[255,0,0,1],[255,0,0,1],[0,255,0,1],[0,255,0,1],[0,255,0,1],[0,255,0,1],[0,0,255,1],[0,0,255,1],[0,0,255,1]];

const done = function(error, actual){

  assert.deepEqual( actual , expected );

}

spue(input, done);
