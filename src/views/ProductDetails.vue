<script setup>
import { ref, onBeforeMount, computed, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useProductStore } from '../stores/products'
import { useCartStore } from '../stores/cart'
import CardComponent from "../components/CardComponent.vue"

const route = useRoute()
const productStore = useProductStore()
const cartStore = useCartStore()
const product = ref({})
const loading = ref(true)
const products = computed(() => productStore.products);

onBeforeMount(async () => {
  product.value = await productStore.fetchProductById(route.params.id);
  loading.value = productStore.loading
  products.value = await productStore.fetchProducts();

});

const addToCart = () => {
  if (product.value) {
    cartStore.addToCart(product.value);
    localStorage.setItem("cartItems", JSON.stringify(cartStore.items))
  }
};

// Computed property for suggested items
const suggestedItems = computed(() => {
  return products.value.filter((item) => item.category === product.value.category && item.id !== product.value?.id);
});
watch(
  () => route.params.id,
  async (newId) => {
    product.value = await productStore.fetchProductById(newId); // Re-fetch on route change
    window.scrollTo(0, 0);

  }
);

</script>

<template>
  <div class="container mx-auto px-4 py-8">
    <div v-if="loading" class="text-center">
      <i class="pi pi-spin pi-spinner text-4xl"></i>
    </div>

    <div v-else class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div class="bg-white p-4 rounded-lg">
        <img :src="product.image" :alt="product.title" class="w-full h-96 object-contain">
      </div>

      <div class="bg-white p-6 rounded-lg">
        <h1 class="text-3xl font-bold mb-4">{{ product.title }}</h1>
        <p class="text-gray-600 mb-4">{{ product.description }}</p>
        <div class="text-2xl font-bold mb-4">${{ product.price }}</div>
        <button @click="addToCart" class="w-full bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600">
          Add to Cart
        </button>
      </div>
    </div>
    <h1 class=" mt-[4rem] text-2xl font-bold">You may like too</h1>

  </div>

  <div class="flex gap-16 px-8 mt-4 flex-wrap rounded justify-center items-center">

    <CardComponent v-for="suggs in suggestedItems" :product="suggs" />

  </div>
</template>
