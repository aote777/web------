setTimeout(function () {
  console.log('setTimeout 1')
  new Promise(function (resolve) {
    console.log('promise 1')
    resolve()
  }).then(function () {
    console.log('promise then')
  })
})
async function async1() {
  console.log('async1 start')
  await async2()
  console.log('async1 end')
  await async3()
}

async function async2() {
  console.log('async2')
}

async function async3() {
  console.log('async3')
}

console.log('eventLoop')

async1()

new Promise(function (resolve) {
  console.log('promise 2')
  resolve()
}).then(function () {
  console.log('promise2 then')
})

new Promise(function (resolve) {
  console.log('promise 4')
  resolve()
}).then(function () {
  console.log('promise4 then')
})

console.log('eventLoop end')


// eventLoop
// async1 start
// async2
// promise 2
// promise 4
// eventLoop end

// promise2 then
// promise4 then
// async1 end
// async3

// setTimeout 1
// promise 1
// promise then

// ventLoop 
// async1 start      
// async2            
// promise 2         
// promise 4         
// eventLoop end     
// async1 end        
// async3            
// promise2 then     
// promise4 then     
// setTimeout 1      
// promise 1         
// promise then      
