---
README: >
  as soon as we know the date for the next meetup, `cp _drafts/meetup.md
  _posts/YYYY-MM-DD-meetup.md`, remove this README, and add a `when` property to this
  section. the front page will update to let folks know that we've got
  something in the works.
title: PWA's and TLA's, but definitely not SPA's
author: aaron
layout: post
categories:
- posts
- meetups
when: 2016-08-16T19:30:00-05:00
---

{% assign speakr = 'Dave Rupert' %}
{% assign handle = 'davatron5000' %}
{% assign twiturl = 'https://twitter.com/davatron5000' %}
{% assign speakurl = 'http://daverupert.com' %}
{% assign avi = 'http://daverupert.com/images/about/daverupert.jpg' %}
{% assign sponsurl = 'https://nodesource.com/' %}

<!--
.wowowow {
  display: inline-block;
  animation: wow 2s infinite;
}

@keyframes wow {
  0%   {transform: scale(1.0,1.0);}
  30%  {transform: scale(1.1,1.1);}
  60%  {transform: scale(1.2,1.2);}
  80%  {transform: scale(1.2,1.0);}
  100% {transform: scale(0.9,1.0);}
}
-->

<style>.wowowow {
  display: inline-block;
  -webkit-animation: wow 2s infinite;
          animation: wow 2s infinite;
}

@-webkit-keyframes wow {
  0%   {-webkit-transform: scale(1.0,1.0);transform: scale(1.0,1.0);}
  30%  {-webkit-transform: scale(1.1,1.1);transform: scale(1.1,1.1);}
  60%  {-webkit-transform: scale(1.2,1.2);transform: scale(1.2,1.2);}
  80%  {-webkit-transform: scale(1.2,1.0);transform: scale(1.2,1.0);}
  100% {-webkit-transform: scale(0.9,1.0);transform: scale(0.9,1.0);}
}

@keyframes wow {
  0%   {-webkit-transform: scale(1.0,1.0);transform: scale(1.0,1.0);}
  30%  {-webkit-transform: scale(1.1,1.1);transform: scale(1.1,1.1);}
  60%  {-webkit-transform: scale(1.2,1.2);transform: scale(1.2,1.2);}
  80%  {-webkit-transform: scale(1.2,1.0);transform: scale(1.2,1.0);}
  100% {-webkit-transform: scale(0.9,1.0);transform: scale(0.9,1.0);}
}</style>

Come out next Tuesday, <x-date>{{ site.categories.meetups[0].when | date_to_xmlschema }}</x-date>, as [{{ speakr }}][] tells us how to <strike>make the mobile web great again</strike> make <span class="wowowow">Progressive Web Apps!</span>

<strong>Update</strong>: <a href="https://speakerdeck.com/davatron5000/progressive-web-apps">Slides are posted!</a>

<div class="media-object speaker-bio">
  <a href="{{ twiturl }}">
    <img alt="{{ speakr }} @{{ handle }} on Twitter" src="{{ avi }}" />
  </a>
  <div>
    When <a href="{{ twiturl }}"><strong>{{ speakr }}</strong></a>

    is not committing atrocities like <a href="http://daverupert.com/2016/06/dave-goes-build/#edge">saying nice things about IE</a> and <a href="https://www.godaytrip.com">artisanally hand-crafting locally-owned-and-sourced social networks</a>, he's <a href="http://daverupert.com/2015/04/davegoeswindows/">fighting the good fight against device monoculture</a> and <a href="http://daverupert.com/2016/08/hidden-expectations/#empathy">teaching empathy</a> to our cold digital hearts.
  </div>
</div>

Thanks to [Frog][] for hosting and [NodeSource][] for sponsoring!

{% include give-em-the-business.html %}

[Frog]: https://www.frogdesign.com/contact/austin.html
[NodeSource]: {{ sponsurl }}
[{{ speakr }}]: {{ speakurl }}
