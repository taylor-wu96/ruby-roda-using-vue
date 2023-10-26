console.log('jquery_test-3.js loaded'); 
const ProductDetails = {
  template: `
    <div>
      <h1>{{ product.name }}</h1>
      <img :src="product.image">
      <p>{{ product.description }}</p>
      <p>Price: $ {{ product.price }}</p>
      <button @click="addToCart">Add to Cart</button>
    </div>
  `,

  data() {
    return {
      product: {
        name: 'Vue T-Shirt',
        image: '/img/shirt.jpg',
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
}
window.onload = function() {


const app = Vue.createApp({
  components: {
    ProductDetails
  }
})

app.mount('#app')
}
