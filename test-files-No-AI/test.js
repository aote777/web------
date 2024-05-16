setTimeout(function() {
  console.log('setTimeout 1');
  new Promise(function(resolve) {
      console.log('promise 1');
      resolve();
  }).then(function() {
      console.log('promise then')
  })
})
async function async1() {
  console.log( 'async1 start' )
  await async2();
  console.log( 'async1 end' )
  await async3();
}

async function async2() {
  console.log( 'async2' )
}

async function async3() {
  console.log( 'async3' )
}

console.log('eventLoop');
async1();
new Promise(function(resolve) {
  console.log('promise 2');
  resolve();
}).then(function() {
  console.log('promise2 then')
});

new Promise(function(resolve) {
  console.log('promise 4');
  resolve();
}).then(function() {
  console.log('promise4 then')
});

console.log('eventLoop end');


function deepClone(obj , hash = new WeakMap()){

}