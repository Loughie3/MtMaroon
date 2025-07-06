<template>
  <main>
    <h1 class="text-4xl md:text-5xl text-center font-bold mb-6">Reviews</h1>

    <section
      class="px-10 py-10 w-full shadow-2xl overflow-y-auto rounded-lg"
      style="max-height: 600px"
    >
      <div class="sk-ww-airbnb-reviews" :data-embed-id="embedId"></div>
    </section>
  </main>
</template>

<script>
export default {
  name: "TestimonialSection",
  props: {
    embedId: {
      type: String,
      default: "25555846",
    },
  },
  mounted() {
    this.loadWidget(); // this is now in the correct place
  },
  methods: {
    showReviews() {
      this.reviews = true;

      this.$nextTick(() => {
        this.loadWidget();
      });
    },
    loadWidget() {
      if (window.SKWidgets) {
        window.SKWidgets.load();
      } else {
        const script = document.createElement("script");
        script.src = "https://widgets.sociablekit.com/airbnb-reviews/widget.js";
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
