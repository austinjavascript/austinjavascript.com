website for the [@AustinJS](https://twitter.com/AustinJS) meetup: http://austinjavascript.com

![travis continuous build status](https://travis-ci.org/austinjavascript/austinjavascript.github.io.svg?branch=master)

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


