/*
 * With love from Archwisp
 */
var Typer = {
    type: function(text, target) {
        this.do_loop(text, target, 0);
    },
    do_loop: function(text, target, pos) {
        output = text.substring(0, pos + 1);
        this.show_output(output, target);
        delay = Math.floor(Math.random() * 500);
        pos++;

        if (pos < text.length) {
            setTimeout(this.do_loop.bind(this), delay, text, target, pos);
        }
    },
    show_output: function (output, target) {
        document.getElementById(target).innerHTML = output;
    }
}
