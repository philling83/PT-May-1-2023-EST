// const wait = (seconds) => {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         resolve();
//       }, seconds * 1000);
//     });
//   };

// wait(1)
// .then(()=> console.log('its been 1 second') )
// .then(()=> wait(1))
// .then(()=> console.log('its been 2 seconds'))
// .then(() => wait(3))
// .then(() => console.log('its been 5 seconds'))

const add5AfterPause = (num) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(num + 5);
      }, 1000);
    });
  };

// add5AfterPause(0)
// .then(sum => add5AfterPause(sum))
// .then(nextSum => {
//     console.log(nextSum);
//     return nextSum
// })
// .then(lastSum => add5AfterPause(lastSum))
// .then(res => console.log(res))

const demo = async () =>{

    let num = 0

    num = await add5AfterPause(num)
    num = await add5AfterPause(num)

    console.log(num);

    num = await add5AfterPause(num)
    
    console.log(num);
}

demo()
