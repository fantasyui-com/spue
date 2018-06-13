const fs = require('fs');
const PNG = require('pngjs').PNG;

module.exports = function({input},cb){

fs.createReadStream(input)
    .pipe(new PNG({
        filterType: 4
    }))
    .on('parsed', function() {
      const response = [];
      //console.log(this.height , this.width)
        if(this.height >= this.width){
          // Read Y
          for (var y = 0; y < this.height; y = y + this.height/10) {
            const x = this.width / 2;
            var idx = (this.width * y + x) << 2;
            const red = this.data[idx];
            const green = this.data[idx+1];
            const blue = this.data[idx+2];
            const alph = this.data[idx+3];
            const alpha = parseFloat(((100.0 * alph / 255)/100).toPrecision(1));

            //console.log(`y: rgba(${red},${green}, ${blue}, ${alpha});`);
            response.push([red, green, blue, alpha])
          }
        }else{
          let y = this.height / 2;
          for (var x = 0; x < this.width; x = x + this.width/10) {
            var idx = (this.width * y + x) << 2;
            const red = this.data[idx];
            const green = this.data[idx+1];
            const blue = this.data[idx+2];
            const alph = this.data[idx+3];
            const alpha = parseFloat(((100.0 * alph / 255)/100).toPrecision(1));

            //console.log(`x: rgba(${red},${green}, ${blue}, ${alpha});`);
            response.push([red, green, blue, alpha])
          }
        } // if

        if(cb){
          cb(null, response);
        }else{
          console.log(JSON.stringify(response));
        }

    });
}
