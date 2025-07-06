<template>
  <main class="text-cabin bg-fog">
    <Hero style="background-image: url('/Boonah.jpg')" buttonText="Book Now" />
    <!-- Welcome Section -->
    <section class="mt-10 text-xl md:mx-20 mx-10 py-5 md:p-10">
      <div class="grid md:grid-cols-2 gap-20 items-center">
        <!-- TEXT SIDE -->
        <div>
          <h2
            class="text-4xl md:text-5xl text-center font-custom font-bold mb-6"
          >
            Welcome To Mt Maroon View Farm Stay
            <hr class="mt-4" />
          </h2>

          <p class="mb-4 font-bold font-custom">
            Nestled in the heart of the Scenic Rim, take a break and unwind at
            this secluded couples retreat. With majestic views of Mt Maroon and
            surrounding mountains.
          </p>
          <p class="mb-4 font-bold">
            *Please note this accommodation is only intended for singles or
            couples*
          </p>
          <p class="mb-4">
            Our farmhouse is the perfect retreat for that getaway, all within
            less than a 90-minute drive from Brisbane/Gold Coast. Only 15
            minutes from Boonah and 3 minutes from Maroon Dam, this picturesque
            farm is ideal for a Scenic Rim getaway, writers retreat, artist
            inspiration, or wedding accommodation.
          </p>
          <p>
            The farmhouse is perched on the highest point of the property,
            commanding 180° views of the valley and mountains. Enjoy the
            ever-changing colours of Mt Maroon from two decks and wander across
            five paddocks.
          </p>
        </div>

        <!-- IMAGE SIDE -->
        <aside>
          <div class="card bg-base-100 shadow-sm">
            <figure>
              <video
                src="/movie.mp4"
                autoplay
                muted
                loop
                playsinline
                class="w-full h-150 object-cover rounded-lg"
              />
            </figure>
          </div>
        </aside>
      </div>
    </section>

    <!-- The property -->
    <section class="py-5 mt-10 text-xl md:mx-20 mx-10 md:p-10">
      <div class="grid md:grid-cols-2 gap-20 items-center">
        <!-- IMAGE SIDE -->
        <aside>
          <div class="card bg-base-100 shadow-sm">
            <figure>
              <video
                src="/Video.mp4"
                autoplay
                muted
                loop
                playsinline
                class="w-full h-150 object-cover rounded-lg"
              ></video>
            </figure>
          </div>
        </aside>
        <!-- TEXT SIDE -->
        <div>
          <h2 class="text-4xl md:text-5xl text-center font-bold mb-6">
            The Property
            <hr class="mt-4" />
          </h2>
          <p class="mb-4 font-bold">
            Our farm is home to 24 sheep and two friendly, cheeky horses who are
            always keen for a snack—carrots and apples are their favourites!
            Guests are welcome to feed them and wander the paddocks. If you are
            lucky you will see the heartwarming sight of baby lambs exploring
            their new world.
          </p>
          <p class="mb-4">
            The nearest supermarket is in Boonah (Drakes IGA). While you're in
            town, be sure to stop by Oppy's Fruit and Veg for fresh, local
            produce. We also highly recommend the two excellent butchers in
            Boonah for quality meat.
          </p>
          <p class="mb-4">
            On clear nights, gather around the fire pit and soak up the peaceful
            rural atmosphere under the stars. Please note that fire restrictions
            can apply from time to time, depending on the season. Extra firewood
            is available for purchase at the farm if you'd like to keep the
            flames going a little longer.
          </p>
          <p>
            If you need to work during your stay, there's a dedicated office
            space complete with an extra monitor to help you stay productive
            while enjoying the peaceful surroundings.
          </p>
        </div>
      </div>
    </section>

    <!-- House Section -->
    <section class="py-5 mt-10 text-xl md:mx-20 mx-10 md:p-10">
      <div class="grid md:grid-cols-2 gap-20 items-center">
        <!-- TEXT SIDE -->
        <div>
          <h2 class="text-4xl md:text-5xl text-center font-bold mb-6">
            The House
            <hr class="mt-4" />
          </h2>
          <p class="mb-4 font-bold">
            Our house is the perfect retreat for a couple
          </p>
          <p class="mb-4">
            Offering three decks and outdoor undercover areas with stunning
            views. Enjoy outdoor dining with the fold-out tables provided, or
            relax in one of our two hammocks. For entertainment, we have an HD
            TV and an open Netflix account.
          </p>

          <h3 class="text-xl font-semibold mb-2">House Features:</h3>
          <ul class="list-disc list-inside space-y-1">
            <li>1x Queen Sized Bed</li>
            <li>HD TV</li>
            <li>StarLink WiFi</li>
            <li>Netflix Account</li>
            <li>Pizza Oven</li>
            <li>Well Equipped Kitchen</li>
            <li>Oven + Electric Stove Top</li>
            <li>Indoor/Outdoor Fire Pit</li>
            <li>Hammocks</li>
            <li>Office with a Computer monitor</li>
          </ul>
        </div>

        <!-- IMAGE SIDE -->
        <aside>
          <Carousel />
        </aside>
      </div>
    </section>

    <!-- Banner Image Section -->
    <section class="h-[30vh] max-w-screen flex justify-center mt-20 mb-20">
      <img
        src="/Banner.avif"
        alt="Sunset Banner"
        class="w-full h-full object-cover"
      />
    </section>

    <!-- Testimonial Section -->
    <section class="mx-5 md:mx-10 lg:mx-40">
      <TestimonialSection />
    </section>
  </main>
</template>

<script>
import Hero from "../components/Hero.vue";
import Carousel from "../components/Carousel.vue";
import TestimonialSection from "../components/TestimonialSection.vue";

export default {
  components: { TestimonialSection, Carousel, Hero },
  data() {},
};
</script>

<style></style>
