<template>
    <div id="app">
        <div id="top-banner" class="parallax-container">
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
                        <button class="call-to-action chatbutton" hidden>
                            <font-awesome-icon icon="comment" /> Chat with me, I'm online</button>
                    </div>
                    <div class="row hide-on-large-only center">
                        <a class="white-text btn-flat" v-deobfuscate href="mailto:archie...trajano...net">[[icon "envelope-o" "fw" "left"]] archie...trajano...net</a>
                        <br class="hide-on-med-only">
                        <a class="white-text btn-flat" v-deobfuscate href="tel:+One FourOneSix-EightFiveSix-SixSixFiveFive">[[icon "phone" "fw" "left"]] FourOneSix-EightFiveSix-SixSixFiveFive</a>
                    </div>
                    <div id="skip-to-content">
                        <a class="btn-floating btn-large waves-effect waves-light hoverable" href="#mainnav">
                            <font-awesome-icon icon="arrow-down" size="lg" />
                        </a>
                    </div>
                </div>
                <div class="parallax">
                    <img src="/assets/hiro.jpg" alt="Hiro close-up">
                </div>
            </div>
        </div>
        <div id="mainnav" class="scrollspy">
            <nav role="navigation" id="mainnav-nav">
                <div class="nav-wrapper">
                    <a id="logo-container" href="#" class="brand-logo left">
                        <img src="/assets/portfolio-logo.png" alt="Trajano">
                    </a>
                    <ul id="nav-desktop" class="right hide-on-med-and-down table-of-contents">
                        <li>
                            <a href="#mainnav">About Archie</a>
                        </li>
                        <li>
                            <a href="#projects">Personal Projects</a>
                        </li>
                        <li>
                            <a href="#social">Social</a>
                        </li>
                        <li>
                            <a href="#resume">Resume</a>
                        </li>
                        <li>
                            <a href="/blog/" title="Archimedes Trajano Blog">Blog</a>
                        </li>
                        <li>
                            <a href="#contact">Contact Me</a>
                        </li>
                    </ul>
                    <ul id="nav-mobile" class="side-nav table-of-contents">
                        <li>
                            <div class="userView z-depth-1">
                                <div class="background">
                                    <d-img src="/assets/snow-in-scarborough.jpg" alt="Snow in Scarborough" class="darken" />
                                </div>
                                <d-img src="/assets/avatar.jpg" alt="Archimedes Trajano gravatar" class="circle" />
                                <span class="white-text name">Archie</span>
                                <a href="mailto:archie...trajano...net" v-deobfuscate>
                                    <span class="white-text email">archie...trajano...net</span>
                                </a>
                                <a href="tel:+One FourOneSix-EightFiveSix-SixSixFiveFive" v-deobfuscate>
                                    <span class="white-text tel">FourOneSix-EightFiveSix-SixSixFiveFive</span>
                                </a>
                            </div>
                        </li>
                        <li>
                            <a href="#mainnav">About Archie</a>
                        </li>
                        <li>
                            <a href="#projects">Personal Projects</a>
                        </li>
                        <li>
                            <a href="#social">Social</a>
                        </li>
                        <li>
                            <a href="#resume">Resume</a>
                        </li>
                        <li>
                            <a href="https://trajano.net/blog/" title="Archimedes Trajano Blog">Blog</a>
                        </li>
                        <li>
                            <div class="divider"></div>
                        </li>
                    </ul>
                    <a href="#" data-activates="nav-mobile" class="button-collapse right">
                        <font-awesome-icon icon="bars" />
                    </a>
                </div>
            </nav>
        </div>
        <div class="container">
            <div class="section">
                <div class="row">
                    <my-feature :icon="['fab', 'github']" heading="I'm a full-stack coder">I design and develop enterprise applications in a variety of languages including but not limited to Java, JavaScript and SQL. I work to make sure everything is integrated on the enterprise scale.</my-feature>
                    <my-feature icon="building" heading="Hands-on enterprise consultant">I architect solutions that scale up thinking on the enterprise level, but I also know enough about the development, deployment and application management processes to make sure they are doable and sustainable.</my-feature>
                    <my-feature icon="graduation-cap" heading="I'm an IT polymath">A person whose expertise spans a significant number of different subject areas; such a person is known to draw on complex bodies of knowledge to solve specific problems. As such I get called upon to deal with integrating multiple technologies that are present in enterprise systems.</my-feature>
                </div>
                <div class="row">
                    <my-feature icon="bolt" heading="I'm agile">I worked on projects using the Scrum methodology at varying degrees and work with others to use the methology effectively.</my-feature>
                    <my-feature icon="users" heading="Cúram expert">I've been working with the Curam Enterprise Framework since 2002 and primarily do programming and integrations with external systems.</my-feature>
                    <my-feature icon="cogs" heading="DevOps">I script whereever I can from development to deployment and circle back with ELK integration and analysis for production.</my-feature>
                </div>
            </div>
        </div>
        <div class="parallax-container valign-wrapper scrollspy" id="projects">
            <div class="section no-pad-bot">
                <div class="container">
                    <div class="row center">
                        <h5 class="header col s12 light">My personal projects at least a sampling of it. Many more can be found in
                            <a href="https://github.com/trajano" class="yellow-text">my GitHub profile</a>.</h5>
                    </div>
                </div>
            </div>
            <div class="parallax">
                <d-img class="darken" src="https://trajano.net/wp-content/uploads/2016/12/Archimedes-fossil.jpg" alt="Archimedes fossil" />
            </div>
        </div>
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
                                <d-img src="assets/phoenix-hiro.jpg" alt="Phoenix and Hiro" class="activator" />
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
        <div class="parallax-container valign-wrapper scrollspy" id="social">
            <div class="section no-pad-bot">
                <div class="container">
                    <div class="row center">
                        <h5 class="header col s12 light">Social networking. My presence on the Internet.</h5>
                    </div>
                </div>
            </div>
            <div class="parallax">
                <d-img class="darken" src="https://trajano.net/wp-content/uploads/2016/12/hearthstone.jpg" alt="Hearthstone" />
            </div>
        </div>
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
                                <d-img src="https://trajano.net/wp-content/uploads/2016/12/My-old-drive-array-300x300.jpg" alt="My old drive array" class="darken" />
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
                    <a class="collection-item waves-effect waves-light" href="https://github.com/trajano/">[[icon "github" "fw"]]GitHub</a>
                    <a class="collection-item waves-effect waves-light" href="https://linkedin.com/in/trajano">[[icon "linkedin" "fw"]]LinkedIn</a>
                    <a class="collection-item waves-effect waves-light" href="https://trajano.yelp.com">[[icon "yelp" "fw"]]Yelp</a>
                    <a class="collection-item waves-effect waves-light" href="http://stackoverflow.com/story/trajano">[[icon "stack-overflow" "fw"]]Stack Overflow</a>
                    <a class="collection-item waves-effect waves-light" href="https://www.facebook.com/archimedes.trajano">[[icon "facebook" "fw"]]Facebook</a>
                    <a class="collection-item waves-effect waves-light" href="https://twitter.com/trajano">[[icon "twitter" "fw"]]@trajano</a>
                </div>
            </div>
        </div>
        <div class="parallax-container valign-wrapper scrollspy" id="resume">
            <div class="section no-pad-bot">
                <div class="container">
                    <div class="row center">
                        <h5 class="header col s12 light">My resume... available in various formats, but if you want the complete picture, it's best to look in
                            <a href="http://stackoverflow.com/story/trajano" class="yellow-text">my Developer Story</a>.</h5>
                    </div>
                </div>
            </div>
            <div class="parallax">
                <d-img src="assets/phoenix-hiro.jpg" alt="Phoenix and Hiro" />
            </div>
        </div>
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
                    <a title="Archimedes Trajano Resume in Word Format" class="collection-item waves-effect waves-light " href="assets/Archimedes%20Trajano.docx">[[icon "file-word-o" "fw"]] Word</a>
                    <a title="Archimedes Trajano Resume in PDF format" class="collection-item waves-effect waves-light " href="assets/Archimedes%20Trajano.pdf">[[icon "file-pdf-o" "fw"]] PDF</a>
                </div>
            </div>
        </div>
        <footer class="page-footer scrollspy" id="contact">
            <div class="container">
                <div class="row">
                    <div class="col m6 l8 hide-on-small-only">
                        <h5 class="white-text">Bio</h5>
                        <p class="grey-text text-lighten-4">Archie has been working professionally over 16 years. He enjoys programming, playing video games on his 3DS and sucking badly at Heroes of the Storm. About the only "normal" thing he likes doing is eating food.
                        </p>
                    </div>
                    <div class="col m6 l4 s12">
                        <h5 class="white-text">Contact me</h5>
                        <p>
                            <a class="white-text waves-effect btn-flat" v-deobfuscate href="mailto:archie...trajano...net">
                                <font-awesome-icon :icon="['far', 'envelope']" :fixed-width="true" /> archie...trajano...net</a>
                        </p>
                        <p>
                            <a class="white-text waves-effect btn-flat" v-deobfuscate href="tel:+One FourOneSix-EightFiveSix-SixSixFiveFive">
                                <font-awesome-icon icon="mobile-alt" :fixed-width="true" /> FourOneSix-EightFiveSix-SixSixFiveFive</a>
                        </p>
                        <p>
                            <button class="white-text waves-effect btn-flat chatbutton" hidden>
                                <font-awesome-icon icon="comment" :fixed-width="true" /> Chat with me I'm online</button>
                        </p>
                    </div>
                </div>
            </div>
            <div class="footer-copyright">
                <div>© 2016-{{currentYear}} Trajano.
                    <a class="yellow-text" href="https://trajano.net/privacy-policy">Privacy policy</a>
                    <div id="152146877" class="right"></div>
                </div>
            </div>
        </footer>
    </div>
</template>
<script>
import ld from "../ld.json";
import RecuriterAndResumeBlock from "./RecruiterAndResumeBlock";
import MyFeature from "./MyFeature";
import DImg from "./DImg";
import $script from "scriptjs";
import $ from "jquery";

export default {
  name: "App",
  components: { DImg, MyFeature, RecuriterAndResumeBlock },
  data() {
    const currentYear = new Date().getFullYear();
    return {
      ld,
      currentYear
    };
  },
  mounted() {
    if (global.__PRERENDER_INJECTED) {
      return;
    }

    $("#mainnav-nav").pushpin({
      top: $("#mainnav").offset().top
    });

    $(".button-collapse").sideNav({
      edge: "right",
      closeOnClick: true
    });
    $(".scrollspy").scrollSpy({
      scrollOffset: 0
    });
    $(".parallax").parallax();

    $(".card[data-href]").bind("click", function(event) {
      event.preventDefault();
      window.location.href = $(this).data("href");
    });

    // Media.net ads
    global._mNHandle = {
      queue: [
        () => window._mNDetails.loadTag("152146877", "728x20", "152146877")
      ]
    };

    $script("//contextual.media.net/dmedianet.js?cid=8CU21S9US&https=1");

    // Smartsupp Live Chat script
    global._smartsupp = global._smartsupp || {};
    global._smartsupp.key = "1164536eedc7355cdbbac4c037e82b31531fcd0f";

    $script("//www.smartsuppchat.com/loader.js", () => {
      global.smartsupp("on", "status", status => {
        if (status == "online") {
          $(".chatbutton").show();
        } else {
          $(".chatbutton").hide();
        }
      });
      $(".chatbutton").on("click", () => {
        window.smartsupp("chat:open");
      });
    });
  }
};
</script>
<style lang="scss">
footer.page-footer {
  .footer-copyright {
    background-color: color("green", "darken-4");
    padding: 0 1.6rem;
  }
  .footer-copyright > div {
    width: 100%;
  }
}
</style>
