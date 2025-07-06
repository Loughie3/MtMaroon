<template>
  <Hero
    style="background-image: url('/farm.avif'); background-position: center"
    title="Book Today"
  />

  <section class="font-bold mt-20 px-10 text-center text-cabin">
    <p>Please check the availability through the calendar below.</p>

    <p>Click on the available date and make the booking through Airbnb.</p>
    <p>
      *Available dates below may be inaccurate, please confirm on Airbnb
      Website*
    </p>
  </section>

  <div class="sm:mx-10 py-10 overflow-x-auto max-w-full">
    <div class="sk-ww-airbnb-calendar" :data-embed-id="embedId"></div>
  </div>
</template>

<script>
import Hero from "../components/Hero.vue";
export default {
  components: { Hero },
  name: "AirbnbCalendarWidget",
  props: {
    embedId: {
      type: String,
      default: "25555873", // Your default embed ID
    },
  },
  mounted() {
    this.loadWidget();
  },
  methods: {
    loadWidget() {
      if (window.SKWidgets) {
        window.SKWidgets.load(); // If already loaded
      } else {
        const script = document.createElement("script");
        script.src =
          "https://widgets.sociablekit.com/airbnb-calendar/widget.js";
        script.defer = true;
        script.onload = () => {
          if (window.SKWidgets) {
            window.SKWidgets.load();
          }
        };
        document.body.appendChild(script);
      }
    },
  },
};
</script>
