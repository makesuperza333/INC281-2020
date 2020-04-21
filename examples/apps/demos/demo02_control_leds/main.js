
function init(link) {

    // example1(link);

    example2(link);

}

function example1(link) {
    const targetId = 0;
    const led = new Led({
        type: 'white',          // red, green, yellow, orange, cyan, violet, blue, white
        label: 'LED #0',        // Text displayed below the led.
        uid:   targetId,        // UID of the led.
        callback: () => {       // on-click callback function.

            link.ledGet(targetId, (uid, sts, err) => {
                if(!err) {
                    let status = !sts;
                    console.log(status);
                    link.ledWrt(targetId, status);  // Write data to the LED on the microcontrller board
                    led.setStatus(status);          // Set status of the led on the webpage.
                }
            });
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
            uid:   3-uid,
            label: labels[uid],
            callback: (targetLed, evt) => {

                link.ledGet(targetLed.uid, (uid, sts, err) => { // Get status of the LED on the MCU board.
                    if(!err) {
                        let status = sts;                       // Status of the LED on the MCU board.
                        link.ledWrt(targetLed.uid, !status);    // Write the inversed status to the LED on the microcontrller board.
                        led.setStatus(status);                  // Set status of the led on the webpage.
                    }
                });
            }
        });
        led.setTextColor('#08f');
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
