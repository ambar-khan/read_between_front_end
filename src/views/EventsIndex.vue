<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <div v-for="event in events">
      <p>{{ event.name }}</p>
      <router-link v-bind:to="'/events/' + event.id">
        <img v-bind:src="event.image">
      </router-link>
    </div>
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