<template>
  <main>
    <Hero
      style="
        background-image: url('/OutsideHouseView.jpg');
        background-position: center;
      "
      title="Contact Us"
    />

    <section
      class="w-full grid grid-cols-1 md:grid-cols-2 px-5 pt-20 md:px-20 gap-10 md:gap-20 text-cabin"
    >
      <h1
        class="col-span-1 md:col-span-2 text-center font-bold text-4xl md:text-5xl"
      >
        Get in touch
      </h1>

      <div class="flex bg-grey items-center justify-center border-cabin">
        <div class="mx-auto w-full max-w-[700px]">
          <form ref="form" @submit.prevent="sendEmail">
            <div class="mb-5">
              <label
                for="name"
                class="mb-3 block text-base font-bold text-cabin"
              >
                Name
              </label>
              <input
                required
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                class="w-full text-cabin rounded-md border border-cabin bg-white py-3 px-6 text-base font-medium outline-none focus:border-cabin focus:shadow-md"
              />
            </div>

            <div class="mb-5">
              <label
                for="email"
                class="mb-3 block text-base font-bold text-cabin"
              >
                Email Address
              </label>
              <input
                type="email"
                required
                name="email"
                id="email"
                placeholder="example@domain.com"
                class="w-full text-cabin rounded-md border border-cabin bg-white py-3 px-6 text-base font-medium outline-none focus:border-cabin focus:shadow-md"
              />
            </div>

            <div class="mb-5">
              <label
                for="number"
                class="mb-3 block text-base font-bold text-cabin"
              >
                Phone Number
              </label>
              <input
                type="tel"
                name="number"
                id="number"
                placeholder="Phone number"
                maxlength="12"
                pattern="[0-9]*"
                inputmode="numeric"
                class="w-full text-cabin rounded-md border border-cabin bg-white py-3 px-6 text-base font-medium outline-none focus:border-cabin focus:shadow-md"
              />
            </div>

            <div class="mb-5">
              <label
                for="message"
                class="mb-3 block text-base font-bold text-cabin"
              >
                Message
              </label>
              <textarea
                required
                rows="4"
                name="message"
                id="message"
                placeholder="Type your message"
                class="w-full text-cabin resize-none rounded-md border border-cabin bg-white py-3 px-6 text-base font-medium outline-none focus:border-cabin focus:shadow-md"
              ></textarea>
            </div>

            <div>
              <button
                class="hover:shadow-form rounded-md btn hover:bg-custom cursor-pointer bg-cabin py-3 px-8 text-base font-semibold text-white outline-none"
              >
                Submit
              </button>
              <dialog id="my_modal_2" ref="modal" class="modal text-clay">
                <div class="modal-box bg-custom">
                  <h3 class="text-lg font-bold">Email Sent Successfully</h3>
                  <hr />
                  <p class="py-4">
                    Thank you for your email, we will get back to you as soon as
                    possible.
                  </p>
                </div>
                <form method="dialog" class="modal-backdrop">
                  <button @click="closeModalRefresh">close</button>
                </form>
              </dialog>
            </div>
          </form>
        </div>
      </div>

      <aside>
        <img class="w-full h-auto" src="/Misty.avif" />
      </aside>
    </section>
  </main>
</template>

<script>
import emailjs from "@emailjs/browser";
import Hero from "../components/Hero.vue";
export default {
  components: { Hero },
  methods: {
    sendEmail() {
      emailjs
        .sendForm(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          this.$refs.form,
          {
            publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
          }
        )
        .then(
          () => {
            this.$refs.modal.showModal();
          },

          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    },
    closeModalRefresh() {
      this.$refs.form.reset();
      this.$refs.modal.close();
    },
  },
};
</script>

<style>
/* You can remove or leave this empty */
</style>
