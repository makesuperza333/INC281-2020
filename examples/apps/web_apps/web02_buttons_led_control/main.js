
/*
function main() {

    const link = new WSLink();

    const btn0 = new Button({
        text: "LED1 ON",
        className: "danger",
        iconLeft: "lightbulb-o",
        iconRight: "none",
        uid: 0,
        callback: () => {
            // LED1 - ON
            link.ledSet(1);
        }
    });

    const btn1 = new Button({
        text: "LED1 OFF",
        className: "secondary",
        iconLeft: "lightbulb-o",
        iconRight: "none",
        uid: 1,
        callback: () => {
            // LED1 - OFF
            link.ledClr(1);
        }
    });
}
*/

function main(){

    const link = new WSLink();

    const btnTexts = ["LED3",    "LED2",   "LED1",    "LED0"];
    const clsNames = ["success", "danger", "primary", "secondary"];


    btnTexts.map( (s, i) => {
        new Button({
            text: s,
            uid:  3-i,
            className: clsNames[i],
            iconLeft: "lightbulb-o",
            iconRight: "none",
            callback: (b) => {
                link.ledInv(b.uid);
            }
        });
    } );

    // let id = 3;
    // btnTexts.forEach(txt => {
    //     new Button({
    //         text: txt,
    //         uid:  id,
    //         callback: (b) => {
    //             link.ledInv(b.uid);
    //         }
    //     });
    //     id--;
    // });


    // for(let i=0; i<btnTexts.length; i++) {
    //     new Button({
    //         text: btnTexts[i],
    //         uid: 3-i, // 3,2,1,0
    //         callback: (b) => {
    //             let id = b.uid;
    //             link.ledInv(id);
    //         }
    //     })
    // }
}
