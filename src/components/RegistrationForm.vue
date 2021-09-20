<template>
  <div
    class="
      flex flex-col flex-none
      items-center
      justify-center
      align-self-center
      justify-self-center
      w-80
      rounded
      border border-solid border-gray-200
      p-5
    "
  >
    <template v-if="regStatus">
      <template v-if="regError">
        <div>
          <span>
            This email has already been registered. No need to re-register.
            <button @click.prevent="closeBox()">Close</button>
          </span>
        </div>
      </template>
      <template v-else>
        <div>
          <span>
            You have successfully submitted your registration form. You will
            receive an email on or before the 3rd if you have been selected for
            the interviewing process.
          </span>
          <button @click.prevent="closeBox()">Close</button>
        </div>
      </template>
    </template>
    <template v-else>
      <h1 class="text-4xl font-medium mb-5">Kindly Register For The Event</h1>

      <form @submit.prevent>
        <label class="mb-1">First Name</label>
        <input
          required
          class="
            h-8
            mb-2
            bg-white
            border-2 border-double border-gray-400
            w-full
          "
          type="text"
          v-model.trim="form.firstName"
        />

        <label class="mb-1">Last Name</label>
        <input
          required
          class="
            h-8
            mb-2
            bg-white
            border-2 border-double border-gray-400
            w-full
          "
          type="text"
          v-model.trim="form.lastName"
        />

        <label class="mb-1">Email</label>
        <input
          required
          class="
            h-8
            mb-2
            bg-white
            border-2 border-double border-gray-400
            w-full
          "
          type="text"
          v-model.trim="form.email"
        />

        <label class="mb-1">Statement of Purpose</label>
        <input
          required
          class="
            h-8
            mb-2
            bg-white
            border-2 border-double border-gray-400
            w-full
          "
          type="text"
          v-model.trim="form.intent"
        />

        <button
          class="
            register__signUpButton
            bg-yellow-button
            rounded-sm
            w-full
            h-8
            border border-solid
            mt-3
            border-yellow-border
          "
          @click="submitForm()"
        >
          Submit
        </button>
      </form>
    </template>
  </div>
</template>

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
      for (let field in this.form) {
        if (field === "" || field !== "") {
          field = "";
        }
      }
      this.$store.dispatch("setRegStatus", true);
    },
    closeBox: function () {
      this.$store.dispatch("setRegStatus", false);
      this.$store.dispatch("SetRegError", false);
    },
  },
  computed: {
    ...mapGetters(["regStatus", "regError"]),
  },
};
</script>
