
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
            let ratio = val / 100;
            link.pwmDutyRatio(uid, ratio);
        }
    });
}


function example2(link) {
    const classes = ['danger', 'warning', 'success', 'info'];
    let pwmId = 3;
    classes.forEach(c => {
        const knob = new Knob({
            className: c,
            uid: pwmId,
            callback: (uid, val) => {
                let ratio = val / 100;
                link.pwmDutyRatio(uid, ratio);
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
