<template>
  <router-link :to="`/products/${props.product.id}`">

    <div class="w-[16rem] h-[28rem] flex flex-col justify-between items-center p-4 bg-white ">
      <img :src="product.image" :alt="product.title" class="w-full bg-cover h-48 object-contain mb-4">
      <div class="">
        <h3 class="text-lg font-semibold mb-2">{{ props.product.title }}</h3>
        <p class="text-gray-600 mb-2 line-clamp-2">{{ props.product.description }}</p>
      </div>
      <div class="flex justify-between gap-4 items-center">
        <span class="text-xl font-bold">${{ props.product.price }}</span>
        <button class="bg-blue-500 text-white px-4 py-2 z-10 rounded hover:bg-blue-600">
          View Details
        </button>
      </div>
    </div>
  </router-link>

</template>

<script setup>
const props = defineProps({
  product: { type: Object },
});

</script>

<style lang="scss" scoped></style>
