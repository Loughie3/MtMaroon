<template>
  <!--Fix bug when clicking carousel-->
  <div class="relative mx-auto w-full max-w-[900px]">
    <img
      class="w-full h-[300px] sm:h-[500px] object-cover rounded-lg"
      :src="house[currentIndex].src"
    />

    <button
      v-if="currentIndex"
      @click="previousImage"
      class="absolute top-1/2 left-4 cursor-pointer transform -translate-y-1/2 bg-custom/80 backdrop-blur text-white hover:bg-cabin transition-all duration-200 p-3 rounded-full shadow-lg"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M15 19l-7-7 7-7"
        />
      </svg>
    </button>

    <!-- Next Button -->

    <button
      v-if="currentIndex < 7"
      @click="nextImage"
      :class="[
        'absolute top-1/2 right-4 transform cursor-pointer  -translate-y-1/2 bg-custom/80 backdrop-blur text-white hover:bg-cabin transition-all duration-200 p-3 rounded-full shadow-lg',
        currentIndex === 0 ? 'animate-pulse' : '',
      ]"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M9 5l7 7-7 7"
        />
      </svg>
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentIndex: 0,
      house: [
        { src: "/OutsideHouseView.jpg" },
        { src: "/House1.avif" },
        { src: "/House2.avif" },
        { src: "/House3.avif" },
        { src: "/House4.avif" },
        { src: "/horse1.avif" },
        { src: "/sheep.avif" },
        { src: "/horse.jpeg" },
      ],
    };
  },
  //This method gets rid of the bug where the image would get stuck if I kept pressing "next"
  methods: {
    nextImage() {
      if (this.currentIndex < this.house.length - 1) {
        this.currentIndex++;
      }
    },
    previousImage() {
      if (this.currentIndex > 0) {
        this.currentIndex--;
      }
    },
  },
};
</script>

<style></style>
