<template>
  <div>    
		<section class="wrapper style3 container special">
			<header class="major">
				<h2>Upcoming Book Discussions!</h2><br>
			</header>
      <div class="row">
      <div class="col-6 col-12-narrower" v-for="event in events"><br>
        <p>{{ event.name }}<br>
        {{ event.date }}</p>
        <router-link v-bind:to="'/events/' + event.id">
        <img v-bind:src="event.image">
        </router-link>
      </div>
      </div>
    </section>
   </div>
</template>

<style>
</style>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      message: "Upcoming Events!",
      events: [],
    };
  },
  created: function () {
    console.log("in created");
    this.eventsIndex();
  },
  methods: {
    eventsIndex: function () {
      console.log("events index..");
      axios.get("/api/events").then((response) => {
        console.log(response.data);
        this.events = response.data;
      });
    },
  },
};
</script>