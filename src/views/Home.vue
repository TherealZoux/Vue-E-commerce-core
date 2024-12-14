<script setup>
import { onMounted } from 'vue'
import { useProductStore } from '../stores/products'
import { useRouter } from 'vue-router'
import CardComponent from "../components/CardComponent.vue"
const productStore = useProductStore()
const router = useRouter()

onMounted(() => {
  productStore.fetchProducts()
})

</script>

<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-4xl font-bold mb-8">Welcome to Vue E-commerce</h1>

    <div v-if="productStore.loading" class="text-center">
      <i class="pi pi-spin pi-spinner text-4xl"></i>
    </div>

    <div v-else-if="productStore.error" class="text-red-500">
      {{ productStore.error }}
    </div>

    <div v-else class="flex flex-wrap gap-16 justify-center  ">
      <CardComponent v-for="product in productStore.products.slice(0, 8)" :key="product.id" :product="product"
        class="bg-white rounded-lg shadow-md p-4 cursor-pointer hover:shadow-lg transition-shadow"
        @click="viewProduct(product.id)" />


    </div>
  </div>
</template>
