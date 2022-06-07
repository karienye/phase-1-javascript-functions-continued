// code your solution here

function saturdayFun (fun = "roller-skate") {

    console.log(`This Saturday i want to ${fun}.`);
  }
console.log (saturdayFun());

function mondayWork () {
    const activity = "go to the office"
    console.log(`This Monday, I will ${activity} .`);
  }
  function wrapAdjective () {
    const part1 = "special";
  return function () {
    const part2 = "ideas";
    return function () {
      console.log(`you are ${part1()} where ${part2} `);
    };
  };
}

console.log (wrapAdjective)()();
