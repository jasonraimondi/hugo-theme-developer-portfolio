# Hugo Theme

This is the hugo theme currently powering https://jasonraimondi.com.


**Features**

* Vue.js in markdown
* PostCSS with autoprefixer
* Related posts

### Getting Started

```bash
hugo new site mywebsite
cd mywebsite
git submodule add https://github.com/jasonraimondi/hugo-theme-developer-portfolio.git themes/hugo-theme-developer-portfolio
hugo new my-first-post.md
```

### Configuration

Copy the configuration file [here](../../config.toml).

```toml
baseurl = "https://jasonraimondi.com/"
baseurl = "/"
title = "Full Stack Software Engineer"
theme ="hugo-theme-developer-portfolio"
languageCode = "en-us"
enableEmoji = true
copyright = "© 2019 Jason Raimondi"

pygmentsCodeFences=true
pygmentsUseClasses=true

defaultContentLanguage = "en"

[Permalinks]
  post = "posts/:slug"

[Params]
  description = "Jason Raimondi is a Full Stack Software Engineer in Los Angeles. My focus has been in web systems, building and deploying server and client web applications. I am a technologist and all around computer geek; give me a computer and I will be hacking in minutes, occupied for days."
  twitter = "jsonmamondi"
  name = "Jason Raimondi"
  email = "jason@raimondi.us"
  profileURL = "https://placehold.it/150x150"
  resumePDF = "https://jasonraimondi.com/assets/resume/JasonRaimondi-Resume-3.2.6.pdf"
  resumeJSON = "https://jasonraimondi.com//assets/resume/resume.json"
  analyticsSnippet = """
<!-- Fathom - simple website analytics - https://github.com/usefathom/fathom -->
<script>
    (function(f, a, t, h, o, m){
        a[h]=a[h]||function(){
            (a[h].q=a[h].q||[]).push(arguments)
        };
        o=f.createElement('script'),
            m=f.getElementsByTagName('script')[0];
        o.async=1; o.src=t; o.id='fathom-script';
        m.parentNode.insertBefore(o,m)
    })(document, window, '//analytics.jasonraimondi.com/tracker.js', 'fathom');
    fathom('set', 'siteId', '####');
    fathom('trackPageview');
</script>
"""

[Params.MainMenu]
  title = "Projects"
[[Params.MainMenu.Link]]
  name = "Categories"
  url = "/categories"
[[Params.MainMenu.Link]]
  name = "About"
  url = "/about"

[Params.ProjectsMenu]
  title = "Projects"
[[Params.ProjectsMenu.Link]]
  name = "Traverse"
  url = "/posts/traverse"
[[Params.ProjectsMenu.Link]]
  name = "Can I Poop?"
  url = "/posts/can-i-poop"
[[Params.ProjectsMenu.Link]]
  name = "Flip"
  url = "/posts/flipp"

[Params.ExternalMenu]
  title = "Over There"
[[Params.ExternalMenu.Link]]
  name = "Gitea"
  url = "https://git.jasonraimondi.com/jason?tab=activity"
[[Params.ExternalMenu.Link]]
  name = "GitHub"
  url = "https://github.com/jasonraimondi"
[[Params.ExternalMenu.Link]]
  name = "GoodReads"
  url = "https://www.goodreads.com/jasonraimondi"
[[Params.ExternalMenu.Link]]
  name = "Leetcode"
  url = "https://leetcode.com/jasonraimondi"
[[Params.ExternalMenu.Link]]
  name = "LinkedIn"
  url = "https://linkedin.com/in/jasonraimondi"
[[Params.ExternalMenu.Link]]
  name = "Vimeo"
  url = "https://vimeo.com/jasonraimondi"

[languages]
  [languages.en]
    lang = "en"
    languageName = "English"
    weight = 1

[sitemap]
  changefreq = "monthly"
  filename = "sitemap.xml"
  priority = 0.5
```

## Dockerfile

You can see an example Docker usage in the [example-site](./example-site/Dockerfile).

```dockerfile
FROM digitalcanvasdesign/hugo-nodejs-builder as builder
WORKDIR /app
COPY .git /app/.git
COPY .gitmodules /app/.gitmodules
RUN apk update \
    && apk upgrade \
    && apk add --no-cache bash git openssh \
    && git submodule update --init --recursive \
    && cd /app/themes/developer-theme && npm install
COPY ./content/ /app/content/
COPY ./static/ /app/static/
COPY ./config.toml /app/config.toml
RUN cd /app && hugo --destination /dist --cleanDestinationDir --minify

FROM nginx:alpine
COPY ./nginx /etc/nginx/
COPY --chown=nginx:nginx --from=builder /dist/ /app/
```
