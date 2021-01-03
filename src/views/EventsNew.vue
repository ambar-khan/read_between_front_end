<template>
  <div class="events-new">
    <form v-on:submit.prevent="submit()">
      <h1>Create a New Event</h1>
      <ul>
        <li class="text-danger" v-for="error in errors">{{ error }}</li>
      </ul>
      <div class="form-group">
        <label>Event Name: </label> 
       <input type="text" class="form-control" v-model="name">
      </div>
      <div class="form-group">
        <label>Event Date: </label>
        <input type="text" class="form-control" v-model="date">
      </div>
      <div class="form-group">
        <label>Event Time: </label>
        <input type="text" class="form-control" v-model="time">
      </div>
      <div class="form-group">
        <label>Meeting Link: </label>
        <input type="text" class="form-control" v-model="meeting_link">
      </div>
      <div class="form-group">
        <label>Book Cover Image: </label>
        <input type="text" class="form-control" v-model="image">
      </div>
      <input type="submit" class="btn btn-primary" value="Submit">
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      name: "",
      date: "",
      time: "",
      meeting_link: "",
      image: "",
      errors: [],
    };
  },
  methods: {
    submit: function () {
      var params = {
        name: this.name,
        date: this.date,
        time: this.time,
        meeting_link: this.meeting_link,
        image: this.image,
      };
      axios
        .post("/api/events", params)
        .then((response) => {
          this.$router.push("/events");
        })
        .catch((error) => {
          this.error = error.response.data.errors;
        });
    },
  },
};
</script>