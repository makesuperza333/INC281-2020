
function init(link, ui) {
    // example1(link);
    example2(link);
}

function example1(link) {
    const pwmId = 0;
    new Knob({
        className: 'warning',
        uid: pwmId,
        callback: (uid, val) => {
            let freq = 20 * (val + 1);
            link.buzzer(100, freq);
        }
    });
}


function example2(link) {
    const classes = ['danger', 'warning'];
    let pwmId = 1;
    let freq  = 500;
    let period = 100;
    classes.forEach(c => {
        const knob = new Knob({
            className: c,
            uid: pwmId,
            callback: (uid, val) => {
                if(uid == 0) {
                    freq = 20 * (val + 1);  // 20 to 20*101 Hz
                }
                else if(uid == 1) {
                    period = 20 + val * 20; // 20 to 20+2000 mS
                }
                link.buzzer(period, freq);
            }
        });
        pwmId -= 1;
    });
}

function main(ui) {
    const link = new WSLink({
        conCallback: (ws) => { },
        datCallback: (ws, evt) => { },
        ledCallback: (ch, sts) => {  },
        pswCallback: (ch, sts) => { },
        adcCallback: (ch, val, dif, dir) => {  }
    });
    init(link, ui);
}
