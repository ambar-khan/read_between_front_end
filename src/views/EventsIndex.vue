<template>
 <body class="no-sidebar is-preload">
		
    <article id="main">

		<header class="special container">
			<span class="icon solid fa-book"></span>
				<h2>Upcoming Book Discussions!</h2>
        
		</header>

		<section class="wrapper style3 container special">

    <div class="content">
      <div class="row">  
        <div class="col-3 col-12-narrower">        
      </div>
      <div class="col-6 col-12-narrower">
        <p>Search: <input type="text" placeholder="Author or Title" v-model="searchTerm"></p>
      </div>
      <div class="col-3 col-12-narrower">
      </div>  
      </div>
    </div>
      <div class="content">
      <div class="row">
      <div class="col-6 col-12-narrower" v-for="event in orderBy(filterBy(events, searchTerm, 'book_title', 'book_author'), 'book_title', 'book_author')"><br>
        <p>{{ event.name }}<br>
        {{ event.date }}</p>
        <router-link v-bind:to="'/events/' + event.id">
        <img v-bind:src="event.image">
        <p>{{ event.book_title }}<br>
        By: {{ event.book_author }}</p>
        </router-link>
      </div>
      </div>
      </div>
    </section>
 
  </article>
</body>    
</template>

<style>
</style>

<script>
import axios from "axios";
import Vue2Filters from "vue2-filters";

export default {
  mixins: [Vue2Filters.mixin],
  data: function () {
    return {
      message: "Upcoming Events!",
      events: [],
      searchTerm: "",
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