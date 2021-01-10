<template>
  <div id="app">
      <div id="page-wrapper">
        
		<!-- Header -->
				<header id="header" class="alt">
					<h1 id="logo"><a href="/">ReadBetween</a></h1>
					<nav id="nav">
						<ul>
							<li class="current"><a href="/">Welcome</a></li>
							<li v-if="!isLoggedIn()" class="current"><a href="/login">Login</a></li>
							<li v-if="isLoggedIn()" class="current"><a href="/logout">Logout</a></li>
							<li v-if="isLoggedIn()" class="current"><a href="/events">Upcoming Events</a></li>
							<li v-if="isLoggedIn()" class="current"><a href="/events/new">Start a Discussion</a></li>
							<li v-if="!isLoggedIn()"><a href="/signup" class="button primary">Sign Up</a></li>
						</ul>
					</nav>
				</header>        

			<router-view/>

      </div>
  </div>
</template>

<script>
export default {
  methods: {
    isLoggedIn: function () {
      if (localStorage.getItem("jwt")) {
        return true;
      } else {
        return false;
      }
    },
    getUserId: function () {
      console.log("getting user id...");
      return localStorage.getItem("user_id");
    },
  },
};
</script>



