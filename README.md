# Hugo Theme

This is the hugo theme currently powering https://jasonraimondi.com.

**Features**

* PostCSS with postcss-preset-env stage 1
* Related posts

## Getting Started

```bash
hugo new site mywebsite
cd mywebsite
git submodule add https://github.com/jasonraimondi/hugo-theme-developer-portfolio.git themes/hugo-theme-developer-portfolio
hugo new my-first-post.md
```

## Support for the following [shortcodes](https://gohugo.io/templates/shortcode-templates/):

### Video Containers

```md
{{< video/html5 mp4="https://jasonraimondi.com/assets/posts/2017/11/flipp/flipp-mp4.mp4" webm="https://jasonraimondi.com/assets/posts/2017/11/flipp/flipp-webm.webm" poster="https://jasonraimondi.com/assets/posts/2017/11/flipp/flipp-screenshot.png" >}}
```

outputs 

```html
<div class="">
    <video controls="" poster="https://jasonraimondi.com/assets/posts/2017/11/flipp/flipp-screenshot.png">
        <source src="https://jasonraimondi.com/assets/posts/2017/11/flipp/flipp-mp4.mp4" type="video/mp4">
        <source src="https://jasonraimondi.com/assets/posts/2017/11/flipp/flipp-webm.webm" type="video/webm">
        <source src="mp4" type="video/mp4">
        <source src="webm" type="video/webm">
        Your browser doesn't support HTML5 video tag.
    </video>
</div>
```
### Create Image-Pop action

```md
{{< image/pop src="https://placehold.it/350x350?text=image-1" alt="Image 1" >}}
```

outputs

```html
<div class="image-pop-container ">
    <img src="https://placehold.it/350x350?text=image-1" alt="Image 1" title="Image 1" class="pops">
    <small class="image-pop-title">Image 1</small>
</div>
```

### Create Image Galleries

```md
{{< image/gallery/frame >}}
    {{< image/gallery/image src="https://placehold.it/350x350?text=image-1" alt="Image 1" >}}
    {{< image/gallery/image src="https://placehold.it/350x350?text=image-2" alt="Image 2" >}}
    {{< image/gallery/image src="https://placehold.it/350x350?text=image-3" alt="Image 3" >}}
{{< /image/gallery/frame >}}
```

outputs

```html
<div class="image-gallery-container">
    
    <a class="image-gallery-anchor" href="https://placehold.it/350x350?text=image-1">
        <img class="image-gallery-image" src="https://placehold.it/350x350?text=image-1" alt="Image 1" title="Image 1">
        <small class="image-alt-text">Image 1</small>
    </a>

    <a class="image-gallery-anchor" href="https://placehold.it/350x350?text=image-2">
        <img class="image-gallery-image" src="https://placehold.it/350x350?text=image-2" alt="Image 2" title="Image 2">
        <small class="image-alt-text">Image 2</small>
    </a>

    <a class="image-gallery-anchor" href="3">
        <img class="image-gallery-image" src="3" alt="Image 3" title="Image 3">
        <small class="image-alt-text">Image 3</small>
    </a>


</div>
```

### Support for Asciinema

```
{{< asciinema id="1hB16TAx2eD0g6sy50XjAELaZ" description="A demonstration of the RESTful API will be working with." >}}
```

outputs

```html
<script id="asciicast-1hB16TAx2eD0g6sy50XjAELaZ" src="https://asciinema.org/a/1hB16TAx2eD0g6sy50XjAELaZ.js" async></script>
```
## Theme Configuration

Copy the configuration file [here](example-site/config.toml).

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

## Bundle your site using docker

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
