<template>
  <div id="app">
    <div class="header">
            <div class="top_menu">
              <div class="container">
                  <div class="top_menu--logo">
                    <a href="#">
                    <img
                        src="./assets/img/banner_img.png"
                        class="image preview"
                        height="37px"/>
                    </a>
                  </div>
                  <div class="d-inline-block d-md-none" data-controller="mobile-menu" style="margin-left: auto;">
                    <a class="top_menu--group py-2" data-action="mobile-menu#toggle">
                    <i class="fas fa-bars fa-2x"></i>
                    </a>
                    <div class="d-inline-block d-md-none mobile_menu hidden" data-target="mobile-menu.content">
                        <a class="mobile_menu--link mobile_menu--exit py-2" data-action="mobile-menu#toggle" style="text-align: center;">
                        <i class="far fa-times-circle fa-2x"></i>
                        </a>
                        <a href="#" class="mobile_menu--link py-2">
                        Home
                        </a>
                        <a href="#" class="mobile_menu--link py-2">
                        Watch Now
                        </a>
                        <a href="#" class="mobile_menu--link py-2">
                        Live
                        </a>
                        <a href="#" class="mobile_menu--link py-2">
                        Kits
                        </a>
                        <a href="#" class="mobile_menu--link py-2">
                        Coaching
                        </a>
                        <a href="#" class="mobile_menu--link py-2">
                        Sign In
                        </a>
                        <a href="#" class="mobile_menu--link py-2">
                        CONTESTS!
                        </a>
                    </div>
                  </div>
                  <router-link to="/" class="top_menu--link py-2 d-none d-md-inline-block">
                  Home
                  </router-link>
                  <router-link to="/" class="top_menu--link py-2 d-none d-md-inline-block">
                  Watch Now
                  </router-link>
                  <router-link to="/" class="top_menu--link py-2 d-none d-md-inline-block">
                  Live
                  </router-link>
                  <router-link to="/" class="top_menu--link py-2 d-none d-md-inline-block">
                  Kits
                  </router-link>
                  <router-link to="/" class="top_menu--link py-2 d-none d-md-inline-block">
                  Coaching
                  </router-link>
                  <router-link to="/" class="top_menu--link py-2 d-none d-md-inline-block">
                  Sign In
                  </router-link>
                  <router-link to="/" href="#" class="top_menu--link py-2 d-none d-md-inline-block">
                  CONTESTS!
                  </router-link>
              </div>
            </div>
        </div>
    
      
   
    <router-view/>
    <div class="footer">
              <div class="container">
                  <div class="row">
                    <div class="col-md-3 footer--copyright">
                        Copyright © Blue Studios.io, Inc. 2020
                    </div>
                    <div class="col-md-6 footer--links">
                        <a href="#" class="footer--link py-2 d-none d-md-inline-block">
                        About
                        </a>
                        <a href="#" class="footer--link py-2 d-none d-md-inline-block">
                        Free Trial
                        </a>
                        <a href="#" class="footer--link py-2 d-none d-md-inline-block">
                        Rewards!
                        </a>
                        <a href="#" class="footer--link py-2 d-none d-md-inline-block">
                        Give a Gift
                        </a>
                        <a href="#" class="footer--link py-2 d-none d-md-inline-block">
                        FAQs
                        </a>
                        <a href="#" class="footer--link py-2 d-none d-md-inline-block">
                        Help Center
                        </a>
                        <a href="#" class="footer--link py-2 d-none d-md-inline-block">
                        Terms of Service
                        </a>
                        <a href="#" class="footer--link py-2 d-none d-md-inline-block">
                        Privacy Policy
                        </a>
                    </div>
                    <div class="col-md-3">
                        <div class="footer--social">
                          <a href="#" target="_blank">
                          <i class="fab fa-instagram"></i>
                          </a>
                          <a href="#" target="_blank">
                          <i class="fab fa-facebook-square"></i>
                          </a>
                          <a href="#" target="_blank">
                          <i class="fab fa-twitter-square"></i>
                          </a>
                        </div>
                        <div>
                        </div>
                    </div>
                  </div>
              </div>
            </div>
  </div>
</template>

<style>


.header .top_menu .top_menu--link,
.header .top_menu .top_menu--link:hover,
.header .top_menu .dropdown--head-link,
.header .top_menu .dropdown--head-link:hover,
.top_menu .container a,
.top_menu .container a:hover,
.top_menu .container .dropdown--body a,
.top_menu .container .dropdown--body a:hover {
	color: #00AEEF;
}

.top_menu .container .mobile_menu--link,
.dropdown--body,
.dropdown--body a {
	border-color: #00AEEF;
}

.header .dropdown,
.header .fas,
.header .top_menu--link {
	color: #00AEEF;
}

.header .top_menu .dropdown--action svg>g>g {
	fill: #00AEEF;
}

.top_menu .container .mobile_menu--link,
.top_menu .container .mobile_menu--exit,
.top_menu .container .mobile_menu--exit .far,
.dropdown--body {
	background-color: #f6f5f6;
}

.header {
	background-color: #f6f5f6;
}

a,
.top_menu .container .mobile_menu--link a,
.top_menu .container .mobile_menu--link a:hover,
.top_menu .container .mobile_menu--link a:focus,
.top_menu .container .mobile_menu--link,
.top_menu .container .mobile_menu--link:hover {
	color: #00AEEF;
}

.top_menu .container .mobile_menu--link a svg>g>g {
	fill: #00AEEF;
}

html,
body {
	background-color: #ffffff;
}

li {
	margin-left: 20px;
	padding-left: 10px;
}

.program--category-link {
	background: #00aeef;
}
.btn--light:hover {
	background-color: #00aeef;
}
.cce--upgrade-button,
.btn--primary,
.btn--outline {
	background: #00aeef;
}
.primary-hover-color:hover {
	color: #00aeef !important;
}
.author--profile {
	border-color: #00aeef;
	color: #00aeef;
}
.tabs .tab.active {
	color: #00aeef;
}
.tabs .tab.active svg>g>g {
	fill: #00aeef;
}
.testimonial svg #theme-1 {
	fill: #00aeef;
}
.categories-home-page--block h3 {
	color: ;
}
.coming-soon--block h3 {
	color: ;
}
.cce--document-chapter.cce--video-active .cce--document-icon svg,
.cce--document-chapter.cce--video-active .cce--video-icon svg,
.cce--document-chapter:hover .cce--document-icon svg,
.cce--document-chapter:hover .cce--video-icon svg,
.cce--video-chapter.cce--video-active .cce--document-icon svg,
.cce--video-chapter.cce--video-active .cce--video-icon svg,
.cce--video-chapter:hover .cce--document-icon svg,
.cce--video-chapter:hover .cce--video-icon svg {
	fill: #00aeef !important;
}
.cce .vjs-volume-panel .vjs-volume-level,
.cce .vjs-play-progress {
	background-color: rgba(0, 174, 239, 0.8) !important;
}
.cce .vjs-load-progress {
	background-color: rgba(0, 174, 239, 0.2) !important;
}
@media only screen and (max-width:767px) {
	.hero_banner .top_menu .container a,
	.hero_banner .top_menu .container a:hover {
		color: #00aeef;
	}
}
li {
	list-style-type: disc !important;
}
</style>
