<template>
  <div
    class="
      component-container
      flex flex-col flex-none
      items-center
      justify-center
      align-self-center
      justify-self-center
      bg-gray-50
      w-9/12
      md:w-2/3
      lg:w-5/8
      rounded
      border border-solid border-gray-200
      p-5
      mx-auto
      mt-10
    "
  >
    <template v-if="regError == true">
      <div
        class="
          m-auto
          bg-transparent
          border border-double border-green-100
          rounded
          justify-center
          p-10
        "
      >
        <span>
          We have already received an application with this email address. We
          will get back to you within 72 hours of your submission.
        </span>
        <br />
        <button
          class="p-4 w-full mx-auto mt-10 bg-green-200 rounded-md border-none"
          @click.prevent="closeBox()"
        >
          Close
        </button>
      </div>
    </template>
    <template v-else-if="regStatus == true">
      <div
        class="
          m-auto
          bg-transparent
          border border-double border-green-100
          rounded
          justify-center
          p-10
        "
      >
        <span>
          You have successfully submitted your application form! Your
          application will be reviewed and you will receive an email with
          further details within 72 hours.
        </span>
        <br />
        <button
          class="p-4 w-full mx-auto mt-10 bg-green-200 rounded-md border-none"
          @click.prevent="closeBox()"
        >
          Close
        </button>
      </div>
    </template>
    <template v-else-if="errMessage">
      <div
        class="
          m-auto
          bg-transparent
          border border-double border-green-100
          rounded
          justify-center
          p-10
        "
      >
        <span> { errMessage } </span>
        <br />
        <button
          class="p-5 w-full mx-auto mt-10 bg-green-200 rounded-md border-none"
          @click.prevent="closeBox()"
        >
          Close
        </button>
      </div>
    </template>
    <template v-else>
      <h1 class="text-xl font-medium mb-5">Kindly Register for the Program</h1>

      <form @submit.prevent="submitForm()">
        <label class="mb-1">First Name:</label>
        <br />
        <input
          required
          class="
            h-8
            mb-3
            bg-white
            border-2 border-double border-green-100
            rounded-lg
            w-full
          "
          type="text"
          v-model.trim="form.firstName"
        />

        <br />

        <label class="mb-1">Last Name:</label>
        <br />
        <input
          required
          class="
            h-8
            mb-3
            bg-white
            border-2 border-double border-green-100
            rounded-lg
            w-full
          "
          type="text"
          v-model.trim="form.lastName"
        />

        <br />

        <label class="mb-1">Email:</label>
        <br />
        <input
          required
          class="
            h-8
            mb-3
            bg-white
            border-2 border-double border-green-100
            rounded-lg
            w-full
          "
          type="text"
          v-model.trim="form.email"
        />

        <br />

        <label class="mb-1">Statement of Purpose:</label>
        <br />
        <small class="text-xs">
          (In no more than 250 words, introduce yourself, detailing what you
          intend to benefit from the program as well as why you should be
          selected)
        </small>
        <br />
        <textarea
          required
          class="
            h-16
            mb-3
            bg-white
            border-2 border-double border-green-100
            rounded-lg
            w-full
          "
          type="text"
          v-model.trim="form.intent"
        />

        <br />

        <button
          class="
            bg-green-300
            rounded-lg
            w-full
            h-8
            border border-solid border-green-400
            mt-3
          "
          type="submit"
        >
          Submit
        </button>
      </form>
    </template>
  </div>
</template>

<style>
.component-container {
  font-family: "Skyhook Mono", "Courier New", Courier, monospace;
}
</style>

<script>
import { mapGetters } from "vuex";

export default {
  data: () => {
    return {
      form: {
        firstName: "",
        lastName: "",
        email: "",
        intent: "",
      },
    };
  },
  methods: {
    submitForm: function () {
      this.$store.dispatch("addApplicant", {
        firstName: this.form.firstName,
        lastName: this.form.lastName,
        email: this.form.email,
        intent: this.form.intent,
      });
    },
    closeBox: function () {
      this.$store.dispatch("setRegStatus", false);
      this.$store.dispatch("setRegError", false);
      this.$store.dispatch("setErrMessage", "");
      this.form.firstName = "";
      this.form.lastName = "";
      this.form.email = "";
      this.form.intent = "";
    },
  },
  computed: {
    ...mapGetters(["regStatus", "regError", "errMessage"]),
  },
};
</script>
