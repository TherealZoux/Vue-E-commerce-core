`
<script setup>
import { onMounted } from 'vue'
import { useProductStore } from '../stores/products'
import { useCartStore } from '../stores/cart'
import { useRoute } from 'vue-router'
import CardComponent from "../components/CardComponent.vue"

const router = useRoute();
const productStore = useProductStore()
const cartStore = useCartStore()

onMounted(() => {
  productStore.fetchProducts()
})

const addToCart = (product) => {
  cartStore.addToCart(product)
}
/*const viewProduct = (productId) => {
  router.push(`/products/${productId}`)
}*/

</script>

<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold mb-8">All Products</h1>

    <div v-if="productStore.loading" class="text-center">
      <i class="pi pi-spin pi-spinner text-4xl"></i>
    </div>

    <div v-else-if="productStore.error" class="text-red-500">
      {{ productStore.error }}
    </div>

    <div v-else class="flex flex-wrap gap-16 justify-center">
      <CardComponent v-for="product in productStore.products" :key="product.id" :product="product"
        class="bg-white rounded-lg shadow-md p-4 cursor-pointer hover:shadow-lg transition-shadow" />
    </div>
  </div>
</template>`
