
function init(link) {

    // example1(link);

    // example2(link);

    example3(link);

}

function example1(link) {

    // 1) Create a red led
    const led1 = new Led({
        type: 'red',            // red, green, yellow, orange, cyan, violet, blue, white
        label: 'Light 1',       // Text displayed below the led.
        callback: () => {       // on-click callback function.
            const sts = led1.getStatus();   // Get status of the led.
            led1.setStatus(!sts);           // Set status of the led.
        }
    });

    // 2) Create a yellow led
    const led0 = new Led({
        type: 'yellow',
        label: 'Light 0',
        callback: () => {
            led0.toggleStatus();    // Toggle the status of the led.
        }
    });
}

function example2(link) {

    const types  = ['red', 'green', 'yellow', 'white'];
    const labels = ['LED #3', 'LED #2', 'LED #1', 'LED #0'];
    let uid  = 0;
    types.forEach(type => {
        let led = new Led( {
            type:  type,
            uid:   uid,
            label: labels[uid],
            callback: (led, evt) => {
                led.toggleStatus();
            }
        });
        led.setTextColor('#f80');   // Set text color, the color of label
        uid++;
    });
}

function example3(link) {
    const types  = ['red', 'green', 'yellow', 'white'];
    const labels = ['LED #3', 'LED #2', 'LED #1', 'LED #0'];
    let   uid  = 0;
    const leds = [];
    types.forEach(type => {
        let led = new Led( {
            type:  type,
            uid:   uid,
            label: labels[uid],
        });
        led.setTextColor('#f80');
        if( uid % 2 ) {
            led.toggleStatus();
        }
        leds.push(led);

        uid++;
    });

    setInterval( () => {
        leds.forEach(led => {
            led.toggleStatus();
        });
    }, 500);
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
