<h1 align="center">
    aaroneaton.blog
</h1>

<h4 align="center">
  Based on the [Lumen Gatsby Starter](https://github.com/alxshelepenok/gatsby-starter-lumen/)
</h4>

<p align="center">
    [![Netlify Status](https://api.netlify.com/api/v1/badges/0e6be3e6-d708-48bd-97ba-0c0ae006794a/deploy-status)](https://app.netlify.com/sites/aaron-eaton-blog/deploys)
</p>

## Table of contents
+ [Features](http://github.com/alxshelepenok/gatsby-starter-lumen#features)
+ [Web Performance Tests](http://github.com/alxshelepenok/gatsby-starter-lumen#web-performance-tests)
+ [Quick Start](http://github.com/alxshelepenok/gatsby-starter-lumen#quick-start)
+ [Deploy with Netlify](http://github.com/alxshelepenok/gatsby-starter-lumen#deploy-with-netlify)
+ [Folder Structure](http://github.com/alxshelepenok/gatsby-starter-lumen#folder-structure)
+ [Related](http://github.com/alxshelepenok/gatsby-starter-lumen#related)
+ [Contributors](http://github.com/alxshelepenok/gatsby-starter-lumen#contributors)
+ [Backers](http://github.com/alxshelepenok/gatsby-starter-lumen#backers)
+ [Sponsors](http://github.com/alxshelepenok/gatsby-starter-lumen#sponsors)
+ [Credits](http://github.com/alxshelepenok/gatsby-starter-lumen#credits)
+ [License](http://github.com/alxshelepenok/gatsby-starter-lumen#license)

## Features
+ [Lost Grid](http://lostgrid.org).
+ [Modern font stack](https://bitsofco.de/the-new-system-font-stack).
+ Beautiful typography inspired by [matejlatin/Gutenberg](https://github.com/matejlatin/Gutenberg).
+ Syntax highlighting in code blocks using [PrismJS](http://prismjs.com).
+ [Mobile-First](https://medium.com/@mrmrs_/mobile-first-css-48bc4cc3f60f) approach in development.
+ Archive organized by tags and categories.
+ Pagination support.
+ [Netlify CMS](https://www.netlifycms.org) support.
+ Google Analytics.
+ Disqus Comments.
+ [Flow](https://flow.org/) static type checking.

## Web Performance Tests
+ Lighthouse Report - [WebPageTest](https://www.webpagetest.org/result/190510_FE_3f2b13d0beed320f477467d433f56f43/)
+ Visual Comparison - [WebPageTest](https://www.webpagetest.org/video/compare.php?tests=190510_KZ_1228c343ccf04148619a5d0b89a41f71,190510_RE_b3bfad442f32c690a9f420fe46025b8d,190510_RS_3b5f0bff2d95161351dc6934cadbf1cf,190510_SC_5c458c451941f81b12911ccf4171a817,190510_63_52d5edd8743773815fbacb2e9c66d228,190510_AS_741b29f5af5a6e54980d82826d7bb5bb)

## Quick Start

#### Start Developing

Navigate into your new site’s directory and start it up.

```sh
cd blog
gatsby develop
```

#### Open the source code and start editing!

Your site is now running at `http://localhost:8000`!

Note: You'll also see a second link: `http://localhost:8000/___graphql`. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql).

Open the `blog` directory in your code editor of choice and edit `src/templates/index-template.js`. Save your changes and the browser will update in real time!

#### Access Locally
```
$ git clone https://github.com/[GITHUB_USERNAME]/[REPO_NAME].git
$ cd [REPO_NAME]
$ yarn
$ npm run develop
```
To test the CMS locally, you'll need run a production build of the site:
```
$ npm run build
$ gatsby serve
```

## Folder Structure

```
└── content
    ├── pages
    └── posts
└── static
    ├── admin
    └── media
└── src
    ├── assets
    │   └── scss
    │       ├── base
    │       └── mixins
    ├── cms
    │   └── preview-templates
    ├── components
    │   ├── Feed
    │   ├── Icon
    │   ├── Layout
    │   ├── Page
    │   ├── Pagination
    │   ├── Post
    │   │   ├── Author
    │   │   ├── Comments
    │   │   ├── Content
    │   │   ├── Meta
    │   │   └── Tags
    │   └── Sidebar
    │       ├── Author
    │       ├── Contacts
    │       ├── Copyright
    │       └── Menu
    ├── constants
    ├── templates
    └── utils

```
