# Contributing to meeting posts

## Editing

There are two ways to edit an existing post:

1. Online via [GitHub](https://www.github.com/austinjavascript/austinjavascript.github.io/).
1. Locally, with a clone of the repo.

*...moar to come...*

## Creating

### Setup local environment

1. Fork the [Austin JavaScript GitHub](https://github.com/austinjavascript/austinjavascript.github.io/) repo to your org.
1. Clone your repo to your local device, replacing `{my-username}` with your username.

     ```sh
     git clone https://github.com/{my-username}/austinjavascript.github.io.git
     cd austinjavascript.github.io
     ```
1. Create a new git branch for your work.

    ```sh
    git checkout -b new-post
    ```

1. To review your work, you'll want to run [Jekyll](https://jekyllrb.com/) — a Ruby application. There are two ways to get started:

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

> **IMPORTANT:** Make sure the date part of the file name is **today's date**, not the date of the meetup. If the date in the file's name is the meetup date, it won't actually publish. ¯\\\_(ツ)_/¯ that's just how Jekyll works.

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
        picUrl: {twitter image URL}
        bio: {short bio blurb}
        url: {homepage url}
        twitter: {profile name}
        github: {profile name}
        linkedin: {profile name}
        email: {email address}
    sponsor:
      key: {key to sponsor data found in `/_data_/organizations.yaml`}
      hiring: {is the sponsor actively recruiting? (true/false)}
    venue:
      key: {key to host venue data found in `/_data_/organizations.yaml` - REQUIRED}
    after:
      key: {key to "after party" data found in `/_data_/organizations.yaml`}
    ---
    ```

    > Note: `speakers` is a YAML array, so each `name` should be preceded by a dash. For example:
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

    The `sponsor`, `venue`, and `after` key values can be found in or added to `/_data_/organizations.yaml`. The format for that YAML file is:

    ```yaml
    {key - REQUIRED}:
      name: {full name of organization - REQUIRED}
      url: {URL to org homepage}
      careerUrl: {URL to org career page}
      location: {full street address + floor and/or room}
      note: {additional notes}
    ```

* The *{Markdown content}* follows the [CommonMark spec](https://commonmark.org/help/) for creating formatted HTML from plain text. Some tips for content:

  * Provide context for presentation. What was the problem, solution, drama?
  * Hyperlink all the things! ...and use Markdown syntax (e.g., `[Gatsby](https://gatsbyjs.org)`). This gets transformed by the compiler into proper external links.

## Publishing your meetup post

Save and commit. Then push to your repo and open a pull request to [Austin JavaScript](https://www.github.com/austinjavascript/austinjavascript.github.io/).

```sh
git add .
git commit -m "Add new meetup post"
git push origin new-post
```
