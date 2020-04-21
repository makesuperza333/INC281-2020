
let Leds = null;
let Data = [false,false,false,false];

function init(link, ui) {
    example1(link, ui);
}


function example1(link, ui) {
    Leds = createLeds(link);
    setInterval( () => {
       for(let i=0; i<Data.length; i++) {
           Leds[3-i].setStatus(Data[i]);
       }
    },250);
}

function updateSwitchStatus() {

    for(let i=0; i<Data.length; i++) {
        if(Data[i] == true) {
            Data[i] = false;
            Leds[3-i].setStatus(true);
            setTimeout(() => {
                Leds[3-i].setStatus(false);
            }, 200);

        }
    }
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

function main(ui) {
    const link = new WSLink({
        conCallback: (ws) => { },
        datCallback: (ws, evt) => { },
        ledCallback: (ch, sts) => { },
        pswCallback: (ch, sts, info) => { Data[ch]=info!='KEY_UP'; },
        adcCallback: (ch, val, dif, dir) => { }
    });
    init(link, ui);
}
