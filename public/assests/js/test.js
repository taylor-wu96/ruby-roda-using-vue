// When button clicked
// alert('jquery_test.js loaded');
console.log('jquery_test.js loaded');
const { createApp, ref } = Vue
window.onload = function() {
  document.querySelector('#app').innerHTML = '{{message}}';
  createApp({
    setup() {
      const message = ref('Welcome to Vue 3!')
      return {
        message
      }
    }
  }).mount('#app')
}




$('#my-button').on('click', function() {

  // Update div text
  $('#message').text('Button clicked!');

});
