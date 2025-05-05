/*
 * With love from Archwisp
 */
var Typer = {
    type: function(target, text) {
        this.do_loop(target, text, 0);
    },
    do_loop: function(target, text, pos) {
        output = text.substring(0, pos + 1);
        this.show_output(target, output);
        delay = Math.floor(Math.random() * 500);
        pos++;

        if (pos < text.length) {
            setTimeout(this.do_loop.bind(this), delay, target, text, pos);
        }
    },
    show_output: function (target, output) {
        document.getElementById(target).innerHTML = output;
    }
}
