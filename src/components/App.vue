<template>
    <div id="app">
        <v-parallax id="top-banner" :src="require('../assets/hiro.jpg')" alt="Hiro close-up">
            <div class="section">
                <div class="container">
                    <br class="hide-on-small-only">
                    <br class="hide-on-small-only">
                    <h1 class="header center -text text-lighten-2 thin">
                        {{ld.name}}
                    </h1>
                    <div class="row center">
                        <p class="col s12">
                            {{ld.jobTitle}}
                        </p>
                    </div>
                    <div class="row hide-on-med-and-down center">
                        <a class="call-to-action" href="#resume">
                            <font-awesome-icon icon="download" /> View My Resume and Contact Info</a>
                        <button class="call-to-action" :class="{ hide: !smartSuppOnline }" v-on:click="openSmartSupp">
                            <font-awesome-icon icon="comment" /> Chat with me, I'm online</button>
                    </div>
                    <div class="row hide-on-large-only center">
                        <a class="white-text btn-flat" v-deobfuscate href="mailto:archie...trajano...net"><font-awesome-icon :icon="['far', 'envelope']" fixed-width /> archie...trajano...net</a>
                        <br class="hide-on-med-only">
                        <a class="white-text btn-flat" v-deobfuscate href="tel:+One FourOneSix-EightFiveSix-SixSixFiveFive"><font-awesome-icon icon="mobile-alt" fixed-width /> FourOneSix-EightFiveSix-SixSixFiveFive</a>
                    </div>
                    <div id="skip-to-content">
                        <a class="btn-floating btn-large waves-effect waves-light hoverable" href="#mainnav">
                            <font-awesome-icon icon="arrow-down" size="lg" />
                        </a>
                    </div>
                </div>
            </div>
        </v-parallax>
        <main-nav />
        <div class="container">
            <div class="section">
                <div class="row">
                    <my-feature :icon="['fab', 'github']" heading="I'm a full-stack coder">I design and develop enterprise applications in a variety of languages including but not limited to Java, JavaScript and SQL. I work to make sure everything is integrated on the enterprise scale.</my-feature>
                    <my-feature icon="building" heading="Hands-on enterprise architect">I architect solutions that scale up thinking on the enterprise level, but I also know enough about the development, deployment and application management processes to make sure they are doable and sustainable.</my-feature>
                    <my-feature icon="graduation-cap" heading="I'm an IT polymath">A person whose expertise spans a significant number of different subject areas; such a person is known to draw on complex bodies of knowledge to solve specific problems. As such I get called upon to deal with integrating multiple technologies that are present in enterprise systems.</my-feature>
                </div>
                <div class="row">
                    <my-feature icon="bolt" heading="I'm agile">I worked on projects using the Scrum methodology at varying degrees and work with others to use the methology effectively.</my-feature>
                    <my-feature icon="users" heading="Cúram expert">I've been working with the Curam Enterprise Framework since 2002 and primarily do programming and integrations with external systems.</my-feature>
                    <my-feature icon="cogs" heading="DevOps">I script whereever I can from development to deployment and circle back with ELK integration and analysis for production.</my-feature>
                </div>
            </div>
        </div>
        <v-parallax class="valign-wrapper scrollspy" id="projects" v-scroll-spy imageClass="darken" src="//trajano.net/wp-content/uploads/2016/12/Archimedes-fossil.jpg" alt="Archimedes fossil" >
            <div class="section no-pad-bot">
                <div class="container">
                    <div class="row center">
                        <h5 class="header col s12 light">My personal projects at least a sampling of it. Many more can be found in
                            <a href="https://github.com/trajano" class="yellow-text">my GitHub profile</a>.</h5>
                    </div>
                </div>
            </div>
        </v-parallax>
        <div class="container">
            <div class="section">
                <div class="row">
                    <div class="col s12 m6">
                        <div class="card small sticky-action">
                            <div class="card-image waves-effect waves-block waves-light ">
                                <d-img src="https://trajano.net/wp-content/uploads/2016/11/triforce-672x340.png" alt="GitHub, Travis, SonarQube" class="activator darken" />
                                <span class="activator card-title">GitHub, Travis-CI and SonarQube</span>
                            </div>
                            <div class="card-content">
                                <p class="truncate activator">Lately, I wanted to rework my open source projects so it works end to end using free external services rather than my own servers. So I am making my projects use the new tooling.
                                </p>
                            </div>
                            <div class="card-action">
                                <a href="https://trajano.net/2016/11/integrating-travis-sonarqube/">Blog post</a>
                            </div>
                            <div class="card-reveal">
                                <span class="card-title grey-text text-darken-4">GitHub, Travis-CI and SonarQube</span>
                                <p>Lately, I wanted to rework my open source projects so it works end-to-end using the free services rather than my own servers. So I am making my projects use the new tooling.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col s12 m6">
                        <div class="card small sticky-action">
                            <div class="card-image waves-effect waves-block waves-light">
                                <d-img :src="require('../assets/phoenix-cap.jpg?size=800')" alt="Phoenix and Hiro" class="activator darken" />
                                <span class="activator card-title">My portfolio page</span>
                            </div>
                            <div class="card-content">
                                <p class="truncate activator">Seeing as my site's main page was a standard blog, I decided to develop this page you are looking at as my new front page.
                                </p>
                            </div>
                            <div class="card-action">
                                <a href="https://github.com/trajano/trajano-portfolio">GitHub project</a>
                            </div>
                            <div class="card-reveal">
                                <span class="card-title grey-text text-darken-4">My portfolio page</span>
                                <p>Seeing as my site's main page was a standard blog, I decided to develop this page you are looking at as my new front page.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col s12 m6">
                        <div class="card small sticky-action">
                            <div class="card-image waves-effect waves-block waves-light">
                                <d-img src="https://trajano.net/wp-content/uploads/2016/12/logo-with-maven-logo.png" alt="Trajano logo with Maven logo" class="activator darken" />
                                <span class="activator card-title">Trajano Organizational POM</span>
                            </div>
                            <div class="card-content">
                                <p class="light truncate activator">I use Maven on almost every Java project I work with and it is a good practice to have a POM that defines common settings used by your organization.
                                </p>
                            </div>
                            <div class="card-action">
                                <a href="https://site.trajano.net/trajano/">Maven generated site</a>
                                <a href="https://github.com/trajano/trajano">GitHub</a>
                            </div>
                            <div class="card-reveal">
                                <span class="card-title grey-text text-darken-4">Trajano Organizational POM</span>
                                <p>I use Maven on almost every Java project I work with and it is a good practice to have a POM that defines common settings used by your organization.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col s12 m6">
                        <div class="card small sticky-action">
                            <div class="card-image waves-effect waves-block waves-light">
                                <d-img src="https://trajano.net/wp-content/uploads/2016/12/logo-with-wordpress-logo.png" alt="Trajano logo with WordPress logo" class="activator darken" />
                                <span class="activator card-title">My blog</span>
                            </div>
                            <div class="card-content">
                                <p class="light truncate activator">A place where I channel my thoughts about the many things that interest me.
                                </p>
                            </div>
                            <div class="card-action">
                                <a href="/blog/">trajano.net/blog</a>
                            </div>
                            <div class="card-reveal">
                                <span class="card-title grey-text text-darken-4">My blog</span>
                                <p>A place where I channel my thoughts about the many things that interest me.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <v-parallax class="valign-wrapper scrollspy" v-scroll-spy id="social" imageClass="darken" src="https://trajano.net/wp-content/uploads/2016/12/hearthstone.jpg" alt="Hearthstone" >
            <div class="section no-pad-bot">
                <div class="container">
                    <div class="row center">
                        <h5 class="header col s12 light">Social networking. My presence on the Internet.</h5>
                    </div>
                </div>
            </div>
        </v-parallax>
        <div class="container hide-on-small-only">
            <div class="section">
                <div class="row">
                    <div class="col m6 l4">
                        <div class="card small hoverable" data-href="https://github.com/trajano/">
                            <div class="card-image waves-effect waves-block waves-light">
                                <d-img src="https://trajano.net/wp-content/uploads/2016/11/vsto-300x208.png" alt="Visual Studio" class="darken" />
                                <span class="card-title">
                                    <font-awesome-icon :icon="['fab','github']" size="lg" /> GitHub</span>
                            </div>
                            <div class="card-content">
                                <p>Where I have my open source projects hosted on including this portfolio design. Feel free to fork it.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col m6 l4">
                        <div class="card small hoverable" data-href="https://linkedin.com/in/trajano">
                            <div class="card-image waves-effect waves-block waves-light">
                                <d-img src="https://trajano.net/wp-content/uploads/2017/02/img_589a945a82d79.png" alt="Archimedes Trajano resume preview" class="darken" />
                                <span class="card-title">
                                    <font-awesome-icon :icon="['fab', 'linkedin']" size="lg" /> LinkedIn</span>
                            </div>
                            <div class="card-content">
                                <p>My professional profile where I keep the most complete and up to date work experience.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col m6 l4">
                        <div class="card small hoverable" data-href="http://stackoverflow.com/story/trajano">
                            <div class="card-image waves-effect waves-block waves-light">
                                <d-img :src="require('../assets/pc-build-2018.jpg?size=800')" alt="My old drive array" class="darken" />
                                <span class="card-title">
                                    <font-awesome-icon :icon="['fab', 'stack-overflow']" size="lg" /> Stack Overflow</span>
                            </div>
                            <div class="card-content">
                                <p>This is the Q &amp; A site I generally frequent and contribute to.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container hide-on-med-and-up">
            <div class="section">
                <div class="collection">
                    <a class="collection-item waves-effect waves-light" href="https://github.com/trajano/"><font-awesome-icon :icon="['fab', 'github']" full-width="true" />GitHub</a>
                    <a class="collection-item waves-effect waves-light" href="https://linkedin.com/in/trajano"><font-awesome-icon :icon="['fab', 'linkedin']" full-width="true" />LinkedIn</a>
                      <a class="collection-item waves-effect waves-light" href="http://stackoverflow.com/story/trajano"><font-awesome-icon :icon="['fab', 'stack-overflow']" full-width="true" />Stack Overflow</a>
                </div>
            </div>
        </div>
        <v-parallax class="valign-wrapper scrollspy" v-scroll-spy id="resume" :src="require('../assets/phoenix-hiro.jpg')" alt="Phoenix and Hiro" >
            <div class="section no-pad-bot">
                <div class="container">
                    <div class="row center">
                        <h5 class="header col s12 light">My resume... available in various formats, but if you want the complete picture, it's best to look in
                            <a href="http://stackoverflow.com/story/trajano" class="yellow-text">my Developer Story</a>.</h5>
                    </div>
                </div>
            </div>
        </v-parallax>
        <div class="container hide-on-small-only">
            <div class="section">
                <div class="row">
                    <RecuriterAndResumeBlock class="col s12 m12 l12"></RecuriterAndResumeBlock>
                </div>
            </div>
        </div>
        <div class="container hide-on-med-and-up">
            <div class="section">
                <div class="collection">
                    <a title="Archimedes Trajano Resume in Word Format" class="collection-item waves-effect waves-light " href="assets/Archimedes%20Trajano.docx"><font-awesome-icon :icon="['far', 'file-word']" fixed-width /> Word</a>
                    <a title="Archimedes Trajano Resume in PDF format" class="collection-item waves-effect waves-light " href="assets/Archimedes%20Trajano.pdf"><font-awesome-icon :icon="['far', 'file-pdf']" fixed-width /> PDF</a>
                </div>
            </div>
        </div>
        <portfolio-footer />
    </div>
</template>
<script>
import ld from '../ld.json'
import MainNav from './MainNav'
import RecuriterAndResumeBlock from './RecruiterAndResumeBlock'
import MyFeature from './MyFeature'
import DImg from './DImg'
import PortfolioFooter from './PortfolioFooter'
import $script from 'scriptjs'
import $ from 'jquery'
import '../store'
import {mapState} from 'vuex'
import smartSupp from '../smartSupp'
import FontFaceObserver from 'fontfaceobserver'
import VParallax from './VParallax'

export default {
  name: 'App',
  components: { DImg, MainNav, MyFeature, PortfolioFooter, RecuriterAndResumeBlock, VParallax },
  data() {
    const currentYear = new Date().getFullYear()
    return {
      ld,
      currentYear
    }
  },
  computed: {
    ...mapState({
      smartSuppOnline: state => state.SmartSupp.smartSuppOnline
    })
  },
  methods: {
    openSmartSupp() {
      global.smartsupp('chat:open')
    }
  },
  mounted() {
    if (global.__PRERENDER_INJECTED) {
      return
    }

    $('.button-collapse').sideNav({
      edge: 'right',
      closeOnClick: true
    })
    $('.scrollspy').scrollSpy({
      scrollOffset: 0
    })

    $('.card[data-href]').bind('click', function(event) {
      event.preventDefault()
      window.location.href = $(this).data('href')
    })

    // Media.net ads
    global._mNHandle = {
      queue: [
        () => window._mNDetails.loadTag('152146877', '728x20', '152146877')
      ]
    }

    global.dataLayer = global.dataLayer || []
    global.dataLayer.push({
      'gtm.start': new Date().getTime(),
      event: 'gtm.js'
    })

    Promise.all(
      [new FontFaceObserver('Lato', {
        weight: 100
      }).load(), new FontFaceObserver('Lato', {
        weight: 300
      }).load(),
      new FontFaceObserver('Lato', {
        weight: 400
      }).load()]).then(() => {
      document.documentElement.classList.add('font-loaded')
    })

    $script('//www.googletagmanager.com/gtm.js?id=GTM-KB96BNB')
    $script('//contextual.media.net/dmedianet.js?cid=8CU21S9US&https=1')
    smartSupp('1164536eedc7355cdbbac4c037e82b31531fcd0f')
  }
}
</script>
