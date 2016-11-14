---
title: Data-driven Front-end Development
author: aaron
layout: post
categories:
- posts
- meetups
when: 2016-11-15T19:30:00-06:00
---

{% assign speakr = 'Jon Loyens' %}
{% assign handle = 'jonloyens' %}
{% assign twiturl = 'https://twitter.com/jonloyens' %}
{% assign speakurl = 'https://data.world/jonloyens' %}
{% assign avi = 'https://cdn.filepicker.io/api/file/WNMEjUlFRFedFlZU9QzY' %}

Hey happy Veteran's Day and Marine Corps Birthday! AustinJS is going to get
together Tuesday <x-date>{{ site.categories.meetups[0].when | date_to_xmlschema }}
</x-date> to hear from <a href="{{ speakurl }}">{{ speakr }}</a> about
data-driven front end development `~⭐️for the troops⭐️~`

In his own words:

Much has been made of Lean Startups, A/B testing and building data driven
cultures. In order to be data-driven you need to have a culture of
instrumentation and measurement, but building out the pipelines, client side
instrumentation and an analytics warehouse from the ground up can be tedious,
hard and time-consuming.

To address this problem, I’ll share a roadmap to successfully evolving a web
analytics pipeline that starts by leveraging third party and open source tools
for speed and time to market, but is still robust enough to evolve to owning
your own warehouse. For context, I’ll walk through my experiences of
introducing A/B testing and building out web analytics integrations at
Bazaarvoice, expanding HomeAway’s A/B testing program to nearly 1000 tests a
year, and now helping to architect data.world’s analytics pipeline.

* Do’s and Don’ts for front-end instrumentation:
  * Do use exception track (Sentry) as well as event tracking
  * Don’t use a general purpose tag manager
  * Do leverage third party tools along the way
  * Do plan to own your analytics stack eventually
  * Don’t give away all your data
  * Don’t believe the ‘one line of JS’ hype/No silver bullet
  * Do provide a way for your business team to experiment with tooling
  * Do be explicit
  * Do keep allocation and bucketing in mind
* Tracking all the things vs. tracking the important things
* How our front end tech stack enables all this

<div class="media-object speaker-bio">
  <a href="{{ twiturl }}">
    <img alt="{{ speakr }} @{{ handle }} on Twitter" src="{{ avi }}" />
  </a>
  <div>
    {{ speakr }} is the Chief Product Officer at <a
    href="http://data.world">data.world</a>, an ex-BVer, Python and JS nut,
    Austinite, Canadian, Midgetman, Tennis Player, and Geek.
  </div>
</div>

{% include give-em-the-business.html location='spredfast' %}
