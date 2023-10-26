console.log('jquery_test-2.js loaded');

window.onload = function() {

  const app = Vue.createApp({
    data() {
      return {
        product: {
          name: 'Vue T-Shirt',
          description: 'A nice shirt for Vue developers', 
          price: 29.99
        }
      }
    },
    methods: {
      addToCart() {
        alert('Added to cart!')
      }
    } 
  })
  
  app.mount('#app')
}


