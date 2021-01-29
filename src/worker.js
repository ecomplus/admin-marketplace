addEventListener('message', event => {
  console.log('worker received message!')
  postMessage('worker send message!')
})