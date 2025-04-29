/*
 * With love from Archwisp
 */
var Descramble = 
{
    timer: null,
    iterations: 0,
    min_iter: 10,
    max_iter: 50,
    delay: 100,

    init: function(ascii_art) {
        solved = [];
        this.timer = setInterval(solved = this.writeAll.bind(this, ascii_art, solved), this.delay);
    },

    writeAll: function(text) {
        pos = 0;
        output = [];

        while (pos < text.length) {
            if (typeof(solved[pos]) !== "undefined") {
                output[pos] = text[pos];
            } else {
                roll = Math.floor(Math.random() * 10);
                
                if (roll === 0 && this.iterations > this.min_iter) {
                    solved[pos] = true;
                } else {
                    shuffled = this.shuffle(text[pos].split("")).join("");
                    output[pos] = shuffled;
                }
            }

            this.write(output.join("\n"));
            pos++;
        }
        
        this.iterations++;
        
        if (this.iterations > this.max_iter) {
            clearInterval(this.timer);
        }
        
        return solved;
    },

    write: function(out) {
        document.getElementById("descramble").innerHTML = out;
    },

    shuffle: function(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;
        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    }
}
