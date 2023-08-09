<template>
  <div id="registration-form" class="form form-pop">
    <form
      name="form_registration"
      id="form_registration"
      @submit.prevent="submitRegistration"
    >
      <!-- Username -->
      <div class="form-group">
        <label for="username">Username</label>
        <input
          type="text"
          name="user_name"
          v-model="username"
          class="form-control"
          :class="{ 'is-invalid': errors.user_name.length > 0 }"
        />
        <div class="invalid-feedback" v-if="errors.user_name.length > 0">
          <div v-for="error in errors.username" :key="error">
            {{ error }}
          </div>
        </div>

        <!-- First Name -->
        <div class="form-group">
          <label for="first_name">First Name</label>
          <input
            type="text"
            name="first_name"
            v-model="first_name"
            class="form-control"
            :class="{ 'is-invalid': errors.first_name.length > 0 }"
          />
          <div class="invalid-feedback" v-if="errors.first_name.length > 0">
            <div v-for="error in errors.first_name" :key="error">
              {{ error }}
            </div>
          </div>
        </div>

        <!-- Last Name -->
        <div class="form-group">
          <label for="last_name">Last Name</label>
          <input
            type="text"
            name="last_name"
            v-model="last_name"
            class="form-control"
            :class="{ 'is-invalid': errors.last_name.length > 0 }"
          />
          <div class="invalid-feedback" v-if="errors.last_name.length > 0">
            <div v-for="error in errors.last_name" :key="error">
              {{ error }}
            </div>
          </div>
        </div>

        <!-- Email -->
        <div class="form-group">
          <label for="email">Email</label>
          <input
            type="email"
            name="email"
            v-model="email"
            class="form-control"
            :class="{ 'is-invalid': errors.email.length > 0 }"
          />
          <div class="invalid-feedback" v-if="errors.email.length > 0">
            <div v-for="error in errors.email" :key="error">
              {{ error }}
            </div>
          </div>
        </div>

        <!-- Password -->
        <div class="form-group">
          <label for="password">Password</label>
          <input
            type="password"
            name="password"
            v-model="password"
            class="form-control"
            :class="{ 'is-invalid': errors.password.length > 0 }"
          />
          <div class="invalid-feedback" v-if="errors.password.length > 0">
            <div v-for="error in errors.password" :key="error">
              {{ error }}
            </div>
          </div>
        </div>
        <!-- Password confirmation -->
        <div class="form-group">
          <label for="password2">Confirm Password</label>
          <input
            type="password"
            name="password2"
            v-model="password2"
            class="form-control"
            :class="{ 'is-invalid': errors.password2.length > 0 }"
          />
          <div class="invalid-feedback" v-if="errors.password2.length > 0">
            <div v-for="error in errors.password2" :key="error">
              {{ error }}
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "RegistrationForm",
  data() {
    return {
      user_name: "", // Set initial value for username
      first_name: "", // Set initial value for first_name
      last_name: "", // Set initial value for last_name
      password: "", // Set initial value for password
      password2: "", // Set initial value for password2
      email: "", // Set initial value for email
      errors: {
        user_name: [], // Set initial value as an empty array
        first_name: [], // Set initial value as an empty array
        last_name: [], // Set initial value as an empty array
        password: [], // Set initial value as an empty array
        password2: [], // Set initial value as an empty array
        email: [], // Set initial value as an empty array
      },
    };
  },
  methods: {
    submitRegistration() {
      // Implement the logic for registration submission
      // You can access the form data using this.username, this.password, this.password2, this.email
      // Send the form data to the server using a POST request with the appropriate post URL
      // Handle the response and update the errors object if there are any validation errors
    },
  },
};
</script>

<style scoped>
.form-pop {
  background-color: #f5f5f5;
  border-radius: 0.25rem;
  border: 1px solid #ccc;
  padding: 1rem;
  margin: 1rem;
}

.form-pop label {
  display: block;
  margin-bottom: 0.5rem;
}

.form-pop input {
  display: block;
  width: 90%;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  margin: auto;
}

.form-group {
  margin: 1rem;
}
</style>
