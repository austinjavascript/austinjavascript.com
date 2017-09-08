---
title: Not so locally sourced JavaScript
author: lon
layout: post
categories:
- posts
- meetups
when: 2017-09-19T19:30:00-05:00
---

{% assign speakr = 'Ben Vinegar' %}
{% assign handle = 'bentlegen' %}
{% assign twiturl = 'https://twitter.com/bentlegen' %}

Source maps, huh, yeah. What are they good for? Absolutely... some things.

We have an extra special treat this month thanks to our gracious hosts and good
friends at [Spredfast][]: <a href="{{ speakurl }}">{{ speakr }}</a> is coming
all the way from "San Francisco" to tell us everything about how source maps
work. Join us Tuesday <x-date>{{ site.categories.meetups[0].when | date_to_xmlschema }}</x-date> for a special Bae Area AustinJS!

<h3>Talk summary</h3>

You may already be familiar with source maps. They let you debug your original,
unminified, and untranspiled code in the browser. But have you ever wondered how
they actually work? Ben will take a deep dive into the source map format to see
what’s under the hood, exploring source map generation tools, parsers, and how
to manipulate source maps directly for fun and profit.

<h3>Our speaker</h3>

<div class="media-object speaker-bio">
  <a href="https://twitter.com/bentlegen">
    <img alt="Ben Vinegar @bentlegen on Twitter"
      src="https://avatars2.githubusercontent.com/u/2153?v=4&s=460" />
  </a>
  <div>
  <a href="https://twitter.com/bentlegen"><strong>Ben Vinegar</strong></a>
  is VP Engineering at @getsentry, and co-author of Third-party JavaScript.
  People respected him in 2013.
  </div>
</div>

Not only did [Spredfast][] fly Ben out, but they are providing food and drink,
so be sure to tell them thanks!

{% include give-em-the-business.html location='spredfast' %}

[Spredfast]: https://www.spredfast.com/
