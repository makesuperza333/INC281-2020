/*
function main() {

    const p1 = new Plotter({
        min    : 0,
        max    : 100,
        samples: 20,
        step   : 5
    });

    p1.clear();

    setInterval( () => {
        let v0 = Math.random()*100;
        //let v1 = Math.random()*100;
        //let v2 = Math.random()*100;
        //let v3 = Math.random()*100;
        p1.addPoint([-50, v0, -50, -50]);
        // 0: red
        // 1: green
        // 2: blue
        // 3: yellow
    }, 200 );
}
*/

function main() {
    const p1 = new Plotter({
        min: 0,
        max: 100,
    });
    p1.clear();
    const link = new WSLink();
    let data = [];
    setInterval( () => {
        for(id = 0; id < 4; id++) {
            link.adcGet(id, (uid, value, error)=>{
                if(error == null) {
                    data[uid] = value*100/1023;
                    if(data.length >= 4) {
                        p1.addPoint(data);
                        data = [];
                    }
                }
            });
        }
    }, 1000);
}
