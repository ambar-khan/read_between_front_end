<template>
<body class="contact is-preload">
  <div class="signup">
    <div id="page-wrapper">

			<!-- Main -->
				<article id="main">

					<header class="special container">
						<span class="icon solid fa-book"></span>
						<h2>Create an Account</h2>
						<p>Use the form to signup for a ReadBetween account.</p>
					</header>

					<!-- One -->
						<section class="wrapper style4 special container medium">

							<!-- Content -->
								<div class="content">
									<form v-on:submit.prevent="submit()">
                    <ul>
                    <li class="text-danger" v-for="error in errors">{{ error }}</li>
                  </ul>
										<div class="row gtr-50">
											<div class="col-4 col-12-mobile">
												<input type="text" v-model="first_name" placeholder="First Name" />
											</div>
											<div class="col-4 col-12-mobile">
												<input type="text" v-model="last_name" placeholder="Last Name" />
											</div>
                      <div class="col-4 col-12-mobile">
												<input type="email" v-model="email" placeholder="Email" />
											</div>
											<div class="col-6 col-12-mobile">
												<input type="password" v-model="password" placeholder="Password" />
											</div>
                      <div class="col-6 col-12-mobile">
												<input type="password" v-model="passwordConfirmation" placeholder="Password Confirmation" />
											</div>
											<div class="col-12">
												<ul class="buttons">
													<li><input type="submit" class="btn btn-primary" value="Submit"></li>
												</ul>
											</div>
										</div>
									</form>
								</div>

						</section>

				</article>

		</div>

  </div>
</body>
</template>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      passwordConfirmation: "",
      errors: [],
    };
  },
  methods: {
    submit: function () {
      var params = {
        first_name: this.first_name,
        last_name: this.last_name,
        email: this.email,
        password: this.password,
        password_confirmation: this.passwordConfirmation,
      };
      axios
        .post("/api/users", params)
        .then((response) => {
          this.$router.push("/login");
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>