<template>
  <div class="login">
    <div id="page-wrapper">
      <article id="main">
			<header class="special container">
				<span class="icon solid fa-book"></span>
				<h2>Login</h2>
				<p>Use the form to login into your ReadBetween Account.</p>
				</header>

    <section class="wrapper style4 special container medium">    
    <form v-on:submit.prevent="submit()">
      <ul>
        <li class="text-danger" v-for="error in errors">{{ error }}</li>
      </ul>
      <div class="form-group">
        <label>Email:</label>
        <input type="email" class="form-control" v-model="email" placeholder="Email">
      </div>
      <div class="form-group">
        <label>Password:</label>
        <input type="password" class="form-control" v-model="password" placeholder="Password">
      </div>
      <br>
      <input type="submit" class="btn btn-primary" value="Submit">
    </form>
    </section>
    </article>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      email: "",
      password: "",
      errors: [],
    };
  },
  methods: {
    submit: function () {
      var params = {
        email: this.email,
        password: this.password,
      };
      axios
        .post("/api/sessions", params)
        .then((response) => {
          axios.defaults.headers.common["Authorization"] =
            "Bearer " + response.data.jwt;
          localStorage.setItem("jwt", response.data.jwt);
          this.$router.push("/events");
        })
        .catch((error) => {
          this.errors = ["Invalid email or password."];
          this.email = "";
          this.password = "";
        });
    },
  },
};
</script>