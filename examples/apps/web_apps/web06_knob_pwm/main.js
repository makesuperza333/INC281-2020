/*
function main() {
    const link = new WSLink();
    link.pwmFrequency(1, 10);
    const knob0 = new Knob({
        className: "warning",
        min      : 0,
        max      : 100,
        value    : 20,
        uid      : 0,
        callback: function(uid, value, error) {
            link.pwmDutyRatio(1, value/100);
        }
    });
}
*/

function ready(link) {
    const cls = ["success","warning","info","danger"];
    link.pwmFrequency(0, 10);
    cls.map((c, i) => {
        new Knob({
            className: c,
            uid: 3-i,
            min: 1,
            max: 99,
            callback : (id, val, err) => {
                link.pwmDutyRatio(id, val/100);
                console.log(id, val, err);
            }
        });
    });
}
function main() {
    const link = new WSLink({
        conCallback: () => {
            ready(link);
        }
    });
}
