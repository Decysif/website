# Website for iDemo Project Decysif

## General

- Site is built with the [Hugo static website
  generator](https://gohugo.io/documentation/)
- The base Hugo Theme we use is
  [gohugo-theme-ananke](https://github.com/theNewDynamic/gohugo-theme-ananke/tree/91df000ca82769a7578df81fa142d1a18e446bc0)
- The site is deployed again with every merge onto `main`, or manually through
  the github Actions tab in the repository. As of today, a staging website is
  built only on your fork of the website **if you activate a Github Action for
  it**. We have not yet changed the CI triggers to look at merge-requests
  towards `main`.

## Local run method

- [Install Hugo](https://gohugo.io/installation/).
- Have latest version of the website available locally.
- From the root of the project, use the following:
```shell-session
$ rm -rf public resources && HUGO_ENV="production" hugo --gc --minify server --noHTTPCache --logLevel info
[...]
Built in 98 ms
Environment: "production"
Serving pages from disk
Running in Fast Render Mode. For full rebuilds on change: hugo server --disableFastRender
Web Server is available at http://localhost:1313/ (bind address 127.0.0.1) 
Press Ctrl+C to stop
_
```

## Source tree

Some directories have been intentionally left out the tree below in order to
reduce clutter.

```tree
.
├── assets
│   ├── js
│   └── sass
│
├── content
│   ├── en
│   │   ├── contact.md
│   │   ├── deliverables.md
│   │   ├── _index.md
│   │   └── post
│   │       └── [...]
│   └── fr
│       ├── contact.md
│       ├── deliverables.md
│       ├── _index.md
│       └── post
│           └── [...]
├── hugo.toml
│
├── layouts
│   ├── index.html
│   ├── page
│   │   ├── deliverables.html
│   │   └── single.html
│   ├── partials
│   │   └── [...]
│   ├── post
│   │   └── [...]
│   ├── shortcodes
│   │   ├── form-contact.html
│   │   └── presentation.html
│   │
│   └── [...]
│
├── README.md
├── static
│   ├── images
│   │   └── [...]
│   └── pdf
│       └── [...]
├── themes
│   └── ananke
└── [...]
```

- `assets`: all scripts, CSS and JS to be processed and loaded;
- `content`: all website's content dataset. Files are `.md` but we only really
  use Hugo's [`Front
  Matter`](https://gohugo.io/content-management/front-matter/) feature. This
  allows us to reference the content through the variables defined in the
  `Front Matter` and keep templates nice and tidy;
- `layouts`: the website's functional center. This directory holds all
  [`templates`](https://gohugo.io/templates/) used to generate the website. I
  recommended looking into Hugo's [Lookup
  Order](https://gohugo.io/templates/lookup-order/) to understand the logic
  behind it but you can have an intuition of it when looking at the
  similarities between the `content` and the `layouts` directories;
- `layouts/shortcodes`: read up on shortcodes
  [here](https://gohugo.io/content-management/shortcodes/#what-a-shortcode-is);
- `layouts/partials`: read up on partials
  [here](https://gohugo.io/templates/partial/);
- `static/**`: static files like downloadable content and images;
- `theme`: a git submodule pointing to the `ananke` theme;

