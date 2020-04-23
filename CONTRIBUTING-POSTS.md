# Contributing to meeting posts

## Editing

There are two ways to edit an existing post:

1. Directly edit [post files](https://github.com/austinjavascript/austinjavascript.github.io/tree/master/_posts) online and submit Pull Request.
1. Clone the repo locally (see next section), edit/save, git commit/push, and then open a Pull Request.

## Creating

### Setup local environment

1. Fork the [Austin JavaScript GitHub](https://github.com/austinjavascript/austinjavascript.github.io/) repo to your org.
1. Clone your repo to a local directory, replacing `{my-username}` below with your username.

    ```sh
    git clone https://github.com/{my-username}/austinjavascript.github.io.git
    cd austinjavascript.github.io
    ```

1. Set the `upstream` remote repo to "austinjavascript". (If you look at `.git/config`, you should see that your fork is the `origin` remote.)

    ```sh
    git remote add upstream https://github.com/austinjavascript/austinjavascript.github.io.git
    ```

2. Create a new git branch for your work.

    ```sh
    git checkout -b new-post
    ```

3. To review your work, you'll want to run [Jekyll](https://jekyllrb.com/) — a Ruby application. There are two ways to do this:

    Start-up a [Docker](https://www.docker.com/) container. Frankly, this is the easier of the two choices. You'll need [Docker Desktop](https://www.docker.com/products/docker-desktop) if you don't already have it.

    > NOTE: the first time you run this script, it will install all the necessary Ruby Gems which may take some time.

    ```sh
    docker-compose up -d   ## to install and start
    docker-compose down    ## to stop
    ```

    If you're a glutton for punishment, then here's the basic, old-skool [Jekyll install](https://jekyllrb.com/docs/) path.

    ```sh
    gem install bundle   # only needed the 1st time, may require sudo
    bundle install --path vendor/bundle
    bundle exec jekyll serve
    ```

    Either way, when the server is up and running, point your browser to http://localhost:4000 and enjoy the scenery.

### Create new file

To create a new meetup post, copy the `/_drafts_/YYYY-MM-DD-meetup.md` file to the `/_posts/` directory, changing `YYYY-MM-DD` to the appropriate year, month, and date.

> **IMPORTANT:** Make sure the date part of the file name is **today's date**, not the date of the meetup. If the date in the file's name is the meetup date, it won't actually publish. ¯\\\_(ツ)\_/¯ that's just how Jekyll works.

### Add meetup details and content

Open the [Markdown](https://commonmark.org/) file and notice the file structure.

```yaml
---
{YAML front matter}
---
{Markdown content}
```

* The *{[YAML front matter](https://jekyllrb.com/docs/front-matter/)}* contains all the variables that will be used by a magical template (`/_layouts/meetup.html`) to generate posts. It has the format:

    ```yaml
    ---
    layout: meetup
    title: {presentation title}
    when: {ISO-8601 date-- e.g., 2019-04-16T19:30:00-05:00}
    speakers:
      - name: {full name - REQUIRED}
        title: {professional title}
        avatar: {twitter image URL}
        bio: {short bio blurb}
        email: {email address}
        homepage: {homepage url}
        twitter: {profile name}
        github: {profile name}
        linkedin: {profile name}
    sponsor: {key to sponsor data}
      name: {sponsor full name}
      url: {sponsor homepage URL}
      careerUrl: {sponsor career page URL}
      logo: {sponsor logo URL}
    venue: {key to host venue data - REQUIRED}
    after: {key to "after party" data}
    organizers:
      - {key to people data}
    ---
    ```

    > NOTE: `speakers` is a YAML array, so each `name` should be preceded by a dash. For example:
    >
    > ```yaml
    > speakers:
    >   - name: Pat Anser
    >     title: Developer Extraordinaire at Austin JavaScript
    >     ...
    >   - name: Dale Andhill
    >     title: Another Developer
    >     ...
    > ```

    > NOTE: For `sponsor`, if a key to the sponsor info exists in the `/_data/organizations.yaml` file, then use it alone.
    >
    > ```yaml
    > ..
    > sponsor: {key_name}
    > venue: ...
    > ..
    > ```
    >
    > If an org key doesn't exist, then add the `name` and `url` (and optionally `careerUrl`) fields.
    >
    > ```yaml
    > ..
    > sponsor:
    >   name: {sponsor name}
    >   url: {sponsor URL}
    > venue: ...
    > ..
    > ```

    The `sponsor`, `venue`, and `after` key values can be found in or added to `/_data_/organizations.yaml`. The format for that YAML file is:

    ```yaml
    {key - REQUIRED}:
      name: {org full name - REQUIRED}
      url: {org homepage URL}
      careerUrl: {org career page URL}
      location: {org full street address + floor and/or room}
      note: {additional notes}
    ```

* The _{Markdown content}_ follows the [CommonMark spec](https://commonmark.org/help/) for creating formatted HTML from plain text. Some tips for content:

    * Provide context for presentation. What was the problem, solution, drama?
    * Hyperlink all the things! ...and use Markdown syntax (e.g., `[Gatsby](https://gatsbyjs.org)`). This gets transformed by the compiler into proper external links.

## Publishing your meetup post

Save and commit. Then push to your repo.

```sh
git add .
git commit -m "Add new meetup post"
git push origin new-post
```

Open your browser to the [austinjavascript.github.io](https://www.github.com/austinjavascript/austinjavascript.github.io/) repo (or your fork) and open a Pull Request.
