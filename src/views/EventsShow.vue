<template>
<div class="events-show">
<body class="right-sidebar is-preload">  
  <div id="page-wrapper">
<!-- Main -->
		<article id="main">

      <header class="special container">
				<span class="icon solid fa-book"></span>
				<h2>{{ event.name }}</h2>
				<p>Hosted by: {{ event.first_name }} {{ event.last_name }}</p><br>
				
			</header>   
    
						<section class="wrapper style4 container">

							<div class="row gtr-150">
								<div class="col-6 col-12-narrower">
									<!-- Content -->
										<div class="content">
											<section>
												<a href="#" class="image featured"><img v-bind:src="event.image" alt="" /></a>
											</section>
										</div>

								</div>
								<div class="col-6 col-12-narrower">

									<!-- Sidebar -->
										<div class="sidebar">
											<section>
												<header>
													<h3>Event Information:</h3>
												</header>
												<p><strong>Host Email:</strong><a v-bind:href="'mailto:' + event.email"> {{ event.email }}</a><br>
												<strong>Event Date:</strong> {{ event.date }}<br>
                        <strong>Event Time:</strong> {{ event.time }}<br>
                        <strong>Meeting Link:</strong> {{ event.meeting_link }}
												<br>
												<br>
												<router-link v-if="$parent.getUserId() == event.user_id" v-bind:to="`/events/${event.id}/edit`">Update Event Information</router-link>
                        </p>												
											</section>

                      <section>
												<a href="#" class="image featured"><img src="images/pic04.jpg" alt="" /></a>
												<header>
													<h3>Book Information</h3>
												</header>
												<p><strong>Title:</strong> {{ event.book_title }}{{ event.book_subtitle }} <br>
                           <strong>Author:</strong> {{ event.book_author }}<br>
                           <strong>ISBN13:</strong> {{ event.book_id }}<br>
                        </p>												
													<strong>Summary:</strong><br>
												<p>{{ event.book_description }}</p>
                        <!-- <footer>
													<ul class="buttons">
														<li><a href="#" class="button small">Register for Event</a></li>
													</ul>
												</footer> -->
											</section>

										</div>

								</div>
							</div>
						</section>



    </article>
    </div>
</body>   
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