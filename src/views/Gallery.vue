<template>
  <main class="bg-fog text-cabin min-h-screen p-5 md:p-20 grid text-center">
    <section>
      <h1 class="my-20 text-4xl md:text-5xl font-bold">The Property</h1>
      <div class="grid-cols-1 md:grid-cols-3 grid gap-4">
        <a
          v-for="image in propertyImages"
          :key="image.src"
          :href="image.src"
          class="glightbox"
        >
          <img
            :src="image.src"
            class="overflow-hidden transition-transform duration-300 transform hover:scale-103 cursor-pointer"
            alt="Property image"
          />
        </a>
      </div>
    </section>
    <section>
      <h1 class="my-20 text-3xl md:text-5xl font-bold">Animals and wildlife</h1>
      <div class="grid-cols-1 md:grid-cols-3 grid gap-4">
        <a
          v-for="image in animalImages"
          :key="image.src"
          :href="image.src"
          class="glightbox"
        >
          <img
            class="overflow-hidden transition-transform duration-300 transform hover:scale-103"
            :key="image"
            :src="image.src"
          />
        </a>
      </div>
    </section>
    <section>
      <h1 class="my-20 text-3xl md:text-5xl font-bold">The House</h1>
      <div class="grid-cols-1 md:grid-cols-3 grid gap-4">
        <a
          v-for="image in houseImages"
          :key="image.src"
          :href="image.src"
          class="glightbox"
        >
          <img
            class="overflow-hidden transition-transform duration-300 transform hover:scale-103"
            :key="image"
            :src="image.src"
          />
        </a>
      </div>
    </section>
  </main>
</template>

<script>
import GLightbox from "glightbox";
export default {
  data() {
    return {
      propertyImages: [
        { src: "/Misty.avif" },
        { src: "/rainbow.avif" },
        { src: "/dam.jpg" },
        { src: "/farm.avif" },
        { src: "/fire.avif" },
        { src: "/view.avif" },
        { src: "/Sunset.avif" },
        { src: "/mistMountain.jpg" },
        { src: "/sunSet.jpg" },
      ],

      animalImages: [
        { src: "/lamb.avif" },
        { src: "/horse1.avif" },
        { src: "/frog.avif" },
        { src: "/parrot.avif" },
        { src: "/galah.avif" },
        { src: "/kangaroo.avif" },
        { src: "/sheep.avif" },
        { src: "/horse.jpeg" },
        { src: "/mistyHorse.jpg" },
      ],

      houseImages: [
        { src: "/House1.avif" },
        { src: "/House2.avif" },
        { src: "/House3.avif" },
        { src: "/Boonah.jpg" },
        { src: "/OutsideHouse.jpg" },
        { src: "/OutsideHouseView.jpg" },
      ],
    };
  },
  mounted() {
    //lightbox settings
    this.lightbox = GLightbox({
      selector: ".glightbox",
    });
  },
};
</script>

<style></style>
