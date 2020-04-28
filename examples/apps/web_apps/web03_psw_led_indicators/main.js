function main() {

    //                    0         1         2         3
    const labels = ["PSW #3", "PSW #2", "PSW #1", "PSW #0"];
    const colors = ["green", "yellow", "violet", "blue"];

    const leds = [];

    labels.map( (txt, idx) => {

        const led = new Led({
            label: txt,
            type: colors[idx],
            uid: 3-idx
        });

        leds.push(led);
    });

    const link = new WSLink({
        pswCallback: (uid, status, state, error) => {
            leds[3-uid].setStatus(status);
        }
    });

}
