website for the [@AustinJS](https://twitter.com/AustinJS) meetup: http://austinjavascript.com

![travis continuous build status](https://travis-ci.org/austinjavascript/austinjavascript.github.io.svg?branch=master)

## adding a new post

- copy [\_drafts/meetup.md][] to `_posts/YYYY-MM-DD-meetup.md` (optionally choosing a different name than `meetup`), where the date is today's date, **not the date of the meetup**.

  > if the date in the file's name is the meetup date, it won't actually publish. idk that's just how jekyll works.

- remove the `README` tag in the post's [yaml front matter](https://jekyllrb.com/docs/front-matter/)

- set the `when` field in the front matter to an ISO-8601 formatted date of the meetup, i.e. `2019-04-16T19:30:00-05:00`. not sure what this should be? run `new Date().toISOString()` in a devtools console, copy the output, and tweak that.

  > also make sure the time isn't an hour off because of daylight savings time.

## previewing changes

as some sort of cruel joke, in order to preview changes you need
[ruby](https://www.ruby-lang.org/en/documentation/installation/). then run the
following to install the jekyll packages and start the dev server:

```
gem install bundle # only needed the first time, may require sudo
bundle install --path vendor/bundle
bundle exec jekyll serve
open http://localhost:4000 # do this manually if you're not on mac
```

> the post file name **CANNOT** be in the future, it must be the today's date or in the past. 
