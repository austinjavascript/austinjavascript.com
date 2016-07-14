---
README: >
  as soon as we know the date for the next meetup, `cp _drafts/meetup.md
  _posts/YYYY-MM-DD-meetup.md`, remove this README, and add a `when` property to this
  section. the front page will update to let folks know that we've got
  something in the works.
title: Browser vendors hate him!
author: aaron
layout: post
categories:
- posts
- meetups
when: 2016-07-19T19:30:00-05:00
---

{% assign speakr = 'Andrew Dupont' %}
{% assign handle = 'andrewdupont' %}
{% assign twiturl = 'https://twitter.com/andrewdupont' %}
{% assign avi = 'http://i.imgur.com/Dobsnuk.jpg' %}
{% assign sponsurl = 'https://www.retailmenot.com/corp/careers/' %}

This Tuesday, <x-date>{{ site.categories.meetups[0].when | date_to_xmlschema
}}</x-date>, discover how this one weird extension ***changed the web
forever***. Andrew Dupont will give us a 12 year perspective (most of a century
in internet years) on the ways GreaseMonkey shaped today's browsers and how user scripts give us the opportunity of a better web.

<div class="media-object speaker-bio">
  <a href="{{ twiturl }}">
    <img alt="{{ speakr }} @{{ handle }} on Twitter" src="{{ avi }}" />
  </a>
  <div>
    <a href="{{ twiturl }}"><strong>{{ speakr }}</strong></a>

    spends his days <code>git blame</code>'ing lines of code written by <a href="https://twitter.com/aaronforsander">@aaronforsander</a> and <a href="https://twitter.com/slexaxton">@SlexAxton</a>.
  </div>
</div>

Thanks to [Frog][] for hosting and [RetailMeNot][] for sponsoring!

{% include give-em-the-business.html %}

[Frog]: https://www.frogdesign.com/contact/austin.html
[RetailMeNot]: https://www.retailmenot.com/corp/careers/
