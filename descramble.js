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

    descramble: function(target, ascii_art) {
        solved = [];
        this.timer = setInterval(solved = this.writeAll.bind(this, target, ascii_art, solved), this.delay);
    },

    writeAll: function(target, text) { 
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

            this.write(target, output.join("\n"));
            pos++;
        }
        
        this.iterations++;
        
        if (this.iterations > this.max_iter) {
            clearInterval(this.timer);
        }
        
        return solved;
    },

    write: function(target, out) { 
        document.getElementById(target).innerHTML = out;
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
