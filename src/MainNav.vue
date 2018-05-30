<template>
     <div id="mainnav" class="scrollspy">
        <nav role="navigation" id="mainnav-nav">
            <div class="nav-wrapper">
                <a id="logo-container" href="#" class="brand-logo left"><img src="/assets/portfolio-logo.png" alt="Trajano"></a>
                <ul id="nav-desktop" class="right hide-on-med-and-down table-of-contents">
                    <li><a href="#mainnav">About Archie</a></li>
                    <li><a href="#projects">Personal Projects</a></li>
                    <li><a href="#social">Social</a></li>
                    <li><a href="#resume">Resume</a></li>
                    <li><a href="/blog/" title="Archimedes Trajano Blog">Blog</a></li>
                    <li><a href="#contact">Contact Me</a></li>
                </ul>
                <ul id="nav-mobile" class="side-nav table-of-contents">
                    <li>
                        <div class="userView z-depth-1">
                            <div class="background">
                                [[dimg "https://trajano.net/wp-content/uploads/2016/12/Snow-in-Scarborough-1038x576.jpg" "Snow in Scarborough" "darken"]]
                            </div>
                            [[dimg "assets/avatar.jpg" "Archimedes Trajano gravatar" "circle"]]
                            <span class="white-text name">Archie</span>
                            <a href="mailto:archie...trajano...net" class="obfuscate"><span class="white-text email">archie...trajano...net</span></a>
                            <a href="tel:+One FourOneSix-EightFiveSix-SixSixFiveFive" class="obfuscate"><span class="white-text tel">FourOneSix-EightFiveSix-SixSixFiveFive</span></a>
                        </div>
                    </li>
                    <li><a href="#mainnav">About Archie</a></li>
                    <li><a href="#projects">Personal Projects</a></li>
                    <li><a href="#social">Social</a></li>
                    <li><a href="#resume">Resume</a></li>
                    <li><a href="https://trajano.net/blog/" title="Archimedes Trajano Blog">Blog</a></li>
                    <li>
                        <div class="divider"></div>
                    </li>
                </ul>
                <a href="#" data-activates="nav-mobile" class="button-collapse right">[[icon "bars"]]</a>
            </div>
        </nav>
    </div>
</template>


<script>
export default {
  name: "main-nav"
};
</script>

<style>
</style>