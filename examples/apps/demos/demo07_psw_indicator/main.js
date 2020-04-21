
let Leds = null;

function init(link, ui) {
    example1(link, ui);
}


function example1(link, ui) {
    Leds = createLeds(link);
}

function createLeds(link) {
    const types  = ['red', 'green', 'yellow', 'violet'];
    const labels = ['PSW #3', 'PSW #2', 'PSW #1', 'PSW #0'];
    let uid  = 0;
    const leds = [];
    types.forEach(type => {
        let led = new Led( {
            type:  type,
            uid:   uid,
            label: labels[uid],
        });
        led.setTextColor('#fff');
        led.setStatus(false);
        uid++;
        leds.push(led);
    });
    return leds;
}

function updateSwitchStatus(ch, sts) {
    let id = 3 - ch;
    Leds[id].setStatus(sts);

    const timer = setTimeout( () => {
        let t = timer;
        Leds[id].setStatus(false);
        console.log(t);
        clearTimeout(t);
    },1000);
}


function main(ui) {
    const link = new WSLink({
        conCallback: (ws) => { },
        datCallback: (ws, evt) => { },
        ledCallback: (ch, sts) => {  },
        pswCallback: (ch, sts, info) => {
            updateSwitchStatus(ch, sts);
        },
        adcCallback: (ch, val, dif, dir) => { }
    });
    init(link, ui);
}
