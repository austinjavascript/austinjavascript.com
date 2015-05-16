---
layout: default
---

## Recent Posts

{% for post in site.posts limit:5 %}
- [{{ post.title }}]({{ post.url }})
{% endfor %}
