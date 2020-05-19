# Contributing to meeting posts

On this page:

* [Editing](#editing)
* [Creating](#creating)
* [Publishing](#publishing)

---

## Editing

There are two ways to edit an existing post:

1. Directly edit [post files](https://github.com/austinjavascript/austinjavascript.com/tree/master/_posts) online and submit Pull Request.
1. Clone the repo locally (see next section), edit/save, git commit/push, and then open a Pull Request.

## Creating

### Setup local environment

1. Fork the [Austin JavaScript GitHub](https://github.com/austinjavascript/austinjavascript.com/) repo to your org.
1. Clone your repo to a local directory, replacing `{my-username}` below with your username.

    ```sh
    git clone https://github.com/{my-username}/austinjavascript.com.git
    cd austinjavascript.com
    ```

1. Set the `upstream` remote repo to "austinjavascript". (If you look at `.git/config`, you should see that your fork is the `origin` remote.)

    ```sh
    git remote add upstream https://github.com/austinjavascript/austinjavascript.com.git
    ```

2. Create a new git branch for your work.

    ```sh
    git checkout -b new-post
    ```

3. To review your work, you may want to run [Eleventy](https://11ty.dev/) — a JavaScript static site generator.

    ```sh
    npm install
    ```

    Once all the packages are done loading, you can start a local server.

    ```sh
    npm start
    ```

    Once the server is up and running, point your browser to the address that shows up in the terminal (e.g., http://localhost:8080) and enjoy the scenery.

### Create new file

To create a new meetup post, copy the `/_drafts_/YYYY-MM-DD-meetup.md` file to the `/_meetups/` directory, changing `YYYY-MM-DD` to the appropriate year, month, and date.

> **IMPORTANT:** Make sure the date part of the file name is the **event date**. This will be used for all related event data.

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
    slides: {presentation slides URL}
    video: {presentation video URL}
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

    <!-- markdownlint-disable md023 -->
    #### YAML tips

    > NOTE: `speakers` is a YAML array, so each `name` should be preceded by a dash. For example:
    >
    > ```yaml
    > speakers:
    >   - name: Pat Anser
    >     title: Developer Extraordinaire at Austin JavaScript
    >     ..
    >   - name: Dale Andhill
    >     title: Another Developer
    >     ..
    > ```
    >
    > If there are no speakers for the meetup, leave only the `speakers:` field and remove the rest of the array (e.g., `-name: ...`).
    >

    > NOTE: Should any front matter value start with a `[` or `{` character, it will confuse the YAML parser (it thinks it's an array or object) and throw an error. If you need to start the value with one of those characters, be sure to wrap the entire value with quotes.
    >
    > ```yaml
    > ..
    > bio: [Bob](https://bobross.com) is an American icon.    ## throws error
    > bio: "[Bob](https://bobross.com) is an American icon."  ## works
    > ..
    > ```
    >

    > NOTE: For multline YAML, start the 1st line with a pipe, then start the content on the next line, indented.
    >
    > ```yaml
    > ..
    > bio: |
    >   This is a sentence.
    >
    >   This is another sentence.
    >
    >   * This is a list item
    >   * This is another list item
    > ..
    > ```
    >

    #### Data tips

    > NOTE: For `sponsor`, if a key to the sponsor info exists in the `/_data/organizations.yaml` file, then use it alone.
    >
    > ```yaml
    > ..
    > sponsor: {key_name}
    > venue: ...
    > ..
    > ```
    >
    > If an org key doesn't exist, then add the fields: `name`, `url`, `careerUrl` (optional), `logo` (optional), and `message` (optional wholesale replacement text for sponsor template).
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
      logo: {org logo URL}
      location: {org full street address + floor and/or room}
      note: {additional notes}
    ```

* The _{Markdown content}_ follows the [CommonMark spec](https://commonmark.org/help/) for creating formatted HTML from plain text. Some tips for content:

    * Provide context for presentation. What was the problem, solution, drama?
    * Hyperlink all the things! ...and use Markdown syntax (e.g., `[Eleventy](https://11ty.dev/)`).

## Publishing

Save and commit. Then push to your repo.

```sh
git add .
git commit -m "Add new meetup post"
git push origin new-post
```

Open your browser to the [austinjavascript.com](https://www.github.com/austinjavascript/austinjavascript.com/) repo (or your fork) and open a Pull Request.
