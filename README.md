# hugo-theme-portfolio

### Configuration

Here is an example configuration.

```toml
baseurl = "https://jasonraimondi.com/"
title = "Full Stack Software Engineer"
theme ="developer-theme"
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
  profileURL = "/assets/misc/me/avatar.png"
  resumePDF = "/assets/resume/JasonRaimondi-Resume-3.2.6.pdf"
  resumeJSON = "/assets/resume/resume.json"
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
