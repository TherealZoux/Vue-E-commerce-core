`<script setup>
import { useCartStore } from '../stores/cart'

const cartStore = useCartStore()

const updateQuantity = (productId, quantity) => {
  if (quantity < 1) {
    cartStore.removeFromCart(productId)
  } else {
    cartStore.updateQuantity(productId, quantity)
  }
}
</script>

<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold mb-8">Shopping Cart</h1>
    
    <div v-if="cartStore.items.length === 0" class="text-center text-gray-500">
      Your cart is empty
    </div>
    
    <div v-else>
      <div class="bg-white rounded-lg shadow-md">
        <div v-for="item in cartStore.items" :key="item.id" class="flex items-center p-4 border-b">
          <img :src="item.image" :alt="item.title" class="w-20 h-20 object-contain mr-4">
          <div class="flex-grow">
            <h3 class="text-lg font-semibold">{{ item.title }}</h3>
            <p class="text-gray-600">${{ item.price }}</p>
          </div>
          <div class="flex items-center">
            <button @click="updateQuantity(item.id, item.quantity - 1)"
                    class="px-2 py-1 bg-gray-200 rounded">
              -
            </button>
            <span class="mx-4">{{ item.quantity }}</span>
            <button @click="updateQuantity(item.id, item.quantity + 1)"
                    class="px-2 py-1 bg-gray-200 rounded">
              +
            </button>
          </div>
          <div class="ml-8 font-bold">
            ${{ (item.price * item.quantity).toFixed(2) }}
          </div>
          <button @click="cartStore.removeFromCart(item.id)"
                  class="ml-4 text-red-500 hover:text-red-700">
            <i class="pi pi-trash"></i>
          </button>
        </div>
      </div>
      
      <div class="mt-8 flex justify-between items-center">
        <div class="text-2xl font-bold">
          Total: ${{ cartStore.cartTotal.toFixed(2) }}
        </div>
        <button class="bg-green-500 text-white px-8 py-3 rounded-lg hover:bg-green-600">
          Checkout
        </button>
      </div>
    </div>
  </div>
</template>`