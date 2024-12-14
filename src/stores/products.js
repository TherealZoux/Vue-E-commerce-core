import { defineStore } from 'pinia'
import axios from 'axios'

export const useProductStore = defineStore('products', {
  state: () => ({
    products: [],
    loading: false,
    error: null
  }),
  
  actions: {
    async fetchProducts() {
      this.loading = true;
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        this.products = response.data; // Save to state
      } catch (error) {
        this.error = error.message;
      } finally {
        this.loading = false;
      }
    },
    
    async fetchProductById(id) {
      this.loading = true;
      try {
        const response = await axios.get(`https://fakestoreapi.com/products/${id}`)
        return response.data
      } catch (error) {
        this.error = error.message
        return null
      }
      finally{
        this.loading = false;
      }
    },
    getSuggestions(productCategory){
      return products.filter((item) => item.category === productCategory)
    }

  }
})
