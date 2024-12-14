<script setup>
import { useCartStore } from './stores/cart'
import Footer from "./components/Footer.vue"
const cartStore = useCartStore()
</script>

<template>
  <div class="min-h-screen bg-gray-100">
    <nav class="bg-white shadow-md mb-8">
      <div class="container mx-auto px-4">
        <div class="flex justify-between items-center h-16">
          <router-link to="/" class="text-xl font-bold">Vue E-commerce</router-link>

          <div class="flex items-center space-x-8">
            <router-link to="/" class="hover:text-blue-500">Home</router-link>
            <router-link to="/products" class="hover:text-blue-500">Products</router-link>
            <router-link to="/cart" class="relative hover:text-blue-500">
              <i class="pi pi-shopping-cart text-xl"></i>
              <span v-if="cartStore.itemCount > 0"
                class="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                {{ cartStore.itemCount }}
              </span>
            </router-link>
            <router-link class="bg-blue-500 w-[4rem] p-1  rounded text-white text-center">Login</router-link>
          </div>
        </div>
      </div>
    </nav>

    <router-view></router-view>
    <Footer />
  </div>
</template>
