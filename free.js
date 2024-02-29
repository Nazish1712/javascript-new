function updateButton(){
   const button = document.querySelector('.js-button');

   button.innerHTML = 'Loading..';
setTimeout(function(){
   button.innerHTML = 'Finished'
}, 1000);}

function addCart(){
   const cart = document.querySelector('.holder');
   cart.innerHTML = 'Added';

   setTimeout(function(){
      cart.innerHTML='';
   },2000);
}

let message = 2;

setInterval(function(){
   if(document.title === 'App'){
      document.title = `(${message}) New messages`;
   }else{
      document.title = 'App';
   }
   if (message === 0 || message < 0){
      document.title = 'App';
   }
}, 1000);

