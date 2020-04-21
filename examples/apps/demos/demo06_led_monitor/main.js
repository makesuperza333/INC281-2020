
function init(link, ui) {

    example1(link, ui);
}


function example1(link, ui) {
    leds = createLeds(link);
    ui.Utils.newLine();
    btns = createControlButtons(link, leds);



    let targetId = 0;
    setInterval( () => {
        link.ledGet(targetId, (uid, sts, err) => {      // Get status of the target led on the MCU board.
            leds[3-uid].setStatus( sts );               // Update led status on the webpage.
        });
        targetId = (targetId+1)%4;  // 1, 2, 3, 0, 1, 2, 3, 0, ...
    }, 250);
}

function createLeds(link) {
    const types  = ['red', 'green', 'yellow', 'violet'];
    const labels = ['LED #3', 'LED #2', 'LED #1', 'LED #0'];
    let uid  = 0;
    const leds = [];
    types.forEach(type => {
        let led = new Led( {
            type:  type,
            uid:   3-uid,       // 3, 2, 1, 0
            label: labels[uid],
        });
        led.setTextColor('#fff');
        uid++;
        leds.push(led);
    });
    return leds;
}


function createControlButtons(link, leds) {

    const classes = ['success', 'info', 'primary', 'danger'];
    const labels  = ['Toggle LED #3', 'Toggle LED #2', 'Toggle LED #1', 'Toggle LED #0'];
    let uid = 0;
    const buttons = [];
    labels.forEach(label => {
        const button = new Button({
            text     : label,
            uid      : 3-uid,       // 3, 2, 1, 0
            className: classes[uid],
            iconLeft : 'lightbulb-o',
            iconRight: 'none',
            callback : ( btn ) => {
                const id = btn.uid;
                link.ledInv( id );               // Toggle status of the target LED
            }
        });
        uid++;
        buttons.push(button);
    });
}



function main(ui) {
    const link = new WSLink({
        conCallback: (ws) => { },
        datCallback: (ws, evt) => { },
        ledCallback: (ch, sts) => {  },
        pswCallback: (ch, sts) => { },
        adcCallback: (ch, val, dif, dir) => { }
    });
    init(link, ui);
}
