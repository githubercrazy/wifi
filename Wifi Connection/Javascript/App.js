setInterval ( () =>{
    document.body.classList[navigator.onLine ? 'remove' : 'add' ]('disabled')
}, 1000);
