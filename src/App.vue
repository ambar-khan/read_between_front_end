<template>
  <div id="app">
      <div id="page-wrapper">
        
		<!-- Header -->
				<header id="header" class="alt">
					<h1 id="logo"><a href="index.html">ReadBetween</a></h1>
					<nav id="nav">
						<ul>
							<li class="current"><a href="index.html">Welcome</a></li>
							<li class="current"><a href="/login">Login</a>
							<li class="current"><a href="/logout">Logout</a></li>	
							<li><a href="/signup" class="button primary">Sign Up</a></li>
						</ul>
					</nav>
				</header>        

        <router-view/>
      </div>
  </div>
</template>



