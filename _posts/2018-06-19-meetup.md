---
title: 
author: lon
layout: post
categories:
- posts
- meetups
when: 2018-06-19T19:30:00-05:00
---

{% assign speakr = 'Anton Astashov' %}
{% assign twiturl = 'https://twitter.com/anton_astashov' %}
{% assign huburl = 'https://github.com/astashov/' %}

Who is ready to optimize your user's spa experience? <a href="{{ twiturl }}">{{ speakr }}</a>
is going to tell us the secrets to making your visitors feel pampered in no time
flat! Anton will share all the tricks of the trade, from how to improve time to
first relaxation to HTTP/2 aromatherapy tips.

### Lessons learned optimizing performance on Mixbook.com

Anton has recently been working on optimizing performance for mixbook.com, and
he’d like to tell y'all about their experience: what worked and what didn't.

Topics include,

* how they got rid of all external CSS to avoid blocking network calls
* how they started inlining some server-side data right into JS bundles and
rebuilt/redeployed the app automatically when that data changes
* how we used webpack with custom loaders to automate all that stuff
* and more and more :)

### Our speaker

<div class="media-object speaker-bio">
  <a href="{{ twiturl }}">
    <img alt="{{ speakr }} @anton_astashov on Twitter"
      src="https://avatars3.githubusercontent.com/u/12795?v=3&s=400" />
  </a>
  <div>
  <a href="{{ twiturl }}"><strong>{{ speakr }}</strong></a>

  is <a href="{{ huburl }}">a real-deal code slinger</a> based in Austin and
  currently working at <a href="http://www.mixbook.com">Mixbook.com</a>.
  </div>
</div>

Make sure to thank our gracious hosts [Spredfast][], and our sponsors
[Magento][] for the food and drinks!

{% include give-em-the-business.html location='spredfast' %}

Check back here or <a href="{{ site.twitter.url }}">follow us on Twitter</a>
for updates.

[Magento]: https://magento.com/careers
[Spredfast]: https://www.spredfast.com/
