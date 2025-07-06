<template>
  <Hero
    title="Explore the Scenic Rim"
    style="background-image: url('/view.avif'); background-position: center 40%"
  />
  <main class="grid md:grid-cols-1 items-center">
    <section class="text-xl text-cabin py-5 py-20 md:mx-20 mx-10 md:p-20">
      <!-- TEXT SIDE -->
      <div>
        <h2 class="text-4xl md:text-5xl text-center font-bold mb-6">
          The Scenic Rim
          <hr class="mt-4" />
        </h2>

        <p class="mb-4 my-10 font-bold">
          The Scenic Rim is a picturesque region located in southeast
          Queensland, Australia.
        </p>
        <p class="mb-4">
          Known for its stunning landscapes, charming towns, and unique
          experiences, the Scenic Rim is a great spot to visit for those looking
          for an escape from the hustle and bustle of city life.
        </p>
        <p>
          Visitors can explore the region's beautiful national parks, indulge in
          delicious local produce, and take part in a range of outdoor
          activities such as hiking, camping, and horse riding. With its
          friendly locals and relaxed atmosphere, the Scenic Rim offers a truly
          authentic Australian experience that is not to be missed. Come see for
          yourself why The Scenic Rim has been ranked in the world's top 10
          regions to travel to in 2022 by Lonely Planet.
        </p>
      </div>
      <div>
        <h2 class="text-4xl md:text-5xl pt-20 text-center font-bold mb-6">
          Nearby recommendations
          <hr class="mt-4" />
        </h2>
        <ul>
          <li class="my-10">
            <a
              class="font-bold text-2xl hover:text-forest"
              href=" https://www.aussiebushwalking.com/qld/se-qld/mt-barney-np/lower-portals"
              >The Lower Portals Hiking Track:</a
            >
            <p>
              The Lower Portals are a serene section of the Mount Barney
              National Park in the Scenic Rim. Known for their crystal-clear
              rock pools, lush rainforest surroundings, and secluded beauty,
              they’re a popular destination for hikers and nature lovers.
              Accessible via a moderately challenging trail, the Lower Portals
              offer a perfect spot for swimming, picnicking, and wildlife
              spotting in a tranquil, unspoiled setting.
            </p>
          </li>

          <li>
            <a
              class="font-bold text-2xl hover:text-forest"
              href="https://www.blumerestaurant.com.au/"
            >
              Blume Restaurant:
            </a>
            <p>
              This restaurant is sensational, offering a seasonal menu crafted
              from locally sourced ingredients. It’s perfect for food lovers
              looking to enjoy elegant dishes in a cozy, natural setting.
            </p>
          </li>
        </ul>
      </div>
    </section>
  </main>
</template>

<script>
import Hero from "../components/Hero.vue";
export default {
  components: { Hero },
};
</script>

<style></style>
