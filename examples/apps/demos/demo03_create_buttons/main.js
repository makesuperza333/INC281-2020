
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
            console.log( btn.uid );
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
                console.log( btn.uid );
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
