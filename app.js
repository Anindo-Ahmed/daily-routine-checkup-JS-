const counter = document.querySelectorAll(".unit");
let time = 300;

counter.forEach(unit => {
    let updateCount = () => {
        let target = +unit.getAttribute('data_target');
        let count = +unit.innerText;

        let reqTime = target / time;

        if(count < target) {
          unit.innerText = Math.ceil(count + reqTime); // retuns the round number

          setTimeout(updateCount, 10 );
        } else {
          unit.innerText = target;
        }
    };
    updateCount();

});