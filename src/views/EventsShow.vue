<template>
  <div class="events-show">
    <h2>{{ event.name }}</h2>
    <img v-bind:src="event.image">
    <h2>Event Host: {{ event.user_id }}</h2>
    <h2>Event Date: {{ event.date }}</h2>
    <h2>Event Time: {{ event.time }}</h2>
    <h2>Event Meeting Link: {{ event.meeting_link }}</h2>
  </div>
</template>

<style>
</style>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      event: {},
    };
  },
  created: function () {
    this.eventsShow();
  },
  methods: {
    eventsShow: function () {
      console.log("events show..");

      console.log(this.$route.params.id);
      axios.get("/api/events/" + this.$route.params.id).then((response) => {
        console.log(response.data);
        this.event = response.data;
      });
    },
  },
};
</script>