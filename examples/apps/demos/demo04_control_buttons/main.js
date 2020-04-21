
function init(link) {

    //example1(link);

    example2(link);

}

function example1(link) {

    const button = new Button({
        text     : 'Toggle LED #0',
        uid      : 0,
        className: 'success',
        iconLeft : 'lightbulb-o',
        iconRight: 'none',
        callback : ( btn ) => {
            link.ledInv( btn.uid ); // Toggle status of the LED #0
            link.buzzer(100, 500);  // Beep sound, 0.1 sec, 500 Hz
        }
    });
}

function example2(link) {

    const classes = ['success', 'info', 'primary', 'danger'];
    const labels  = ['Toggle LED #3', 'Toggle LED #2', 'Toggle LED #1', 'Toggle LED #0'];
    let uid = 0;
    labels.forEach(label => {
        const button = new Button({
            text     : label,
            uid      : 3-uid,
            className: classes[uid],
            iconLeft : 'lightbulb-o',
            iconRight: 'none',
            callback : ( btn ) => {
                link.ledInv( btn.uid );         // Toggle status of the target LED
                link.buzzer(100, 500*(1+btn.uid));  // Beep sound, 0.1 sec, 500 Hz
            }
        });
        uid++;
    });
}



function main() {
    const link = new WSLink({
        conCallback: (ws) => { },
        datCallback: (ws, evt) => { },
        ledCallback: (ch, sts) => {  },
        pswCallback: (ch, sts) => { },
        adcCallback: (ch, val, dif, dir) => { }
    });
    init(link);
}
