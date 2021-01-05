<template>
  <div class="home">
    <!-- Banner -->
				<section id="banner">

					<!--
						".inner" is set up as an inline-block so it automatically expands
						in both directions to fit whatever's inside it. This means it won't
						automatically wrap lines, so be sure to use line breaks where
						appropriate (<br />).
					-->
					<div class="inner">
            <p>Stories are better when they're shared.</p>
            <br />
						<header>
              <h2>ReadBetween</h2>
						</header>
						<p>An app that connects a community of boook lovers
						<br />
						through virtual discussions about their favorite reads.</p>
					</div>

				</section>
    <!-- <h2>{{ events }}</h2> -->
  </div>
</template>

<style>
</style>

<script>
import axios from "axios";
import $ from "jquery";

export default {
  data: function () {
    return {
      message: "Welcome to ReadBetween!",
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
