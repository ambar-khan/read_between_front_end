<template>
<div class="events-edit">
  <div id="page-wrapper">
    <article id="main">
		<header class="special container">
			<span class="icon solid fa-book"></span>
			<h2>Update Your Event</h2>
			<p>Use the form below to make any changes to your upcoming book discussion event.<br>
      </p>
		</header>

    <section class="wrapper style3 special container medium">   
  <div class="events-new">
    <form v-on:submit.prevent="submit()">
      <ul>
        <li class="text-danger" v-for="error in errors">{{ error }}</li>
      </ul>
      <h3><strong>Event Information</strong></h3>
      <div class="form-group">
        <label>Name: </label> 
       <input type="text" class="form-control" v-model="name">
      </div>
      
      <div class="row gtr-50">
        <div class="col-6 col-12-mobile">
          <div class="form-group" >       					
            <label>Date: </label>
            <input type="text" class="form-control" v-model="date">
          </div>
        </div>        
				<div class="col-6 col-12-mobile">
          <div class="form-group">
            <label>Time: </label>
            <input type="text" class="form-control" v-model="time">
          </div> 
        </div>
      </div>  
     
      <div class="form-group">
        <label>Meeting Link: </label>
        <input type="text" class="form-control" v-model="meeting_link">
      </div>
      <br>

      <h3><strong>Book Information</strong></h3>
      <div class="form-group">
        <label>ISBN13: </label><br>
        <input type="text" class="form-control" v-model="book_id">
        <h7><strong>**Please note to auto-populate book's title, author and description you must enter correct ISBN13.</strong></h7>        
      </div>
      <br>
      <div class="row gtr-50">
        <div class="col-4 col-12-mobile">
          <div class="form-group" >       					
            <label>Title: </label>
            <input type="text" class="form-control" v-model="book_title">
          </div>
        </div>        
				<div class="col-4 col-12-mobile">
          <div class="form-group">
            <label>Subtitle: </label>
            <input type="text" class="form-control" v-model="book_subtitle">
          </div> 
        </div>
        <div class="col-4 col-12-mobile">
          <div class="form-group">
            <label>Author: </label>
            <input type="text" class="form-control" v-model="book_author">
          </div> 
        </div>
      </div>       

    <div class="form-group">
        <label>Description: </label>
        <input type="text" class="form-control" v-model="description">
    </div>
        <div class="form-group">
        <label>Book Cover Image Link: </label>
        <input type="text" class="form-control" v-model="image">
        <h7><strong>**Goodreads Book Cover Images Recommended</strong></h7>
    </div>
      
      <br>
      <input type="submit" class="btn btn-primary" value="Submit">
    </form>
  </div>
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
      name: "",
      date: "",
      time: "",
      meeting_link: "",
      image: "",
      book_id: "",
      book_title: "",
      book_author: "",
      book_subtitle: "",
      book_description: "",
      errors: [],
    };
  },
  created: function () {
    console.log("in create...");
    this.getEventData();
  },
  methods: {
    submit: function () {
      var params = {
        name: this.name,
        date: this.date,
        time: this.time,
        meeting_link: this.meeting_link,
        image: this.image,
        book_id: this.book_id,
        book_title: this.book_title,
        book_author: this.book_author,
        book_subtitle: this.book_subtitle,
        book_description: this.book_description,
      };
      axios
        .patch("/api/events", params)
        .then((response) => {
          this.$router.push("/events");
        })
        .catch((error) => {
          this.error = error.response.data.errors;
        });
    },
    getEventData: function () {
      axios.get("/api/events/" + this.$route.params.id).then((response) => {
        console.log(response.data);
        this.name = response.data.name;
        this.date = response.data.date;
        this.time = response.data.time;
        this.meeting_link = response.data.meeting_link;
        this.image = response.data.image;
        this.book_id = response.data.book_id;
        this.book_title = response.data.book_title;
        this.book_author = response.data.book_author;
        this.book_subtitle = response.data.book_subtitle;
        this.book_description = response.data.book_description;
      });
    },
  },
};
</script>