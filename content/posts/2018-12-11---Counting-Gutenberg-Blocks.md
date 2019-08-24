---
title: Counting Gutenberg Blocks
date: "2018-12-11"
template: "post"
slug: "/posts/counting-gutenberg-blocks/"
category: "Development"
tags: ["WordPress"]
draft: false
---

This week I was tasked with performing a quick audit on an existing client site for WordPress 5.0 compatibility. The site had already made use of Gutenberg so we were curious just how many blocks were in use.

For those of you who don't know, Gutenberg blocks are stored in the `post_content` field and look something like this:

```
<!-- wp:paragraph {"align":"center"} -->
<p>Now, this is a story all about how My life got flipped-turned upside down And I'd like to take a minute Just sit right there I'll tell you how I became the prince of a town called Bel Air
<!-- /wp:paragraph -->
```

Now, since every block begins with the same pattern, `<!-- wp:`, we now have something we can target in a SQL query. The trick is to count the number of times that pattern occurs in each `post_content` field.

After a lot of research and consulting my amazing colleagues over at WebDevStudios I finally landed on a query that will get a count of every Gutenberg block published on your site. Here it is:

```mysql
SELECT 
    SUM( LENGTH( REPLACE ( post_content, "<!-- wp:", "}") ) - LENGTH( REPLACE ( post_content, "<!-- wp:", "" ) ) ) AS block_count
FROM wp_posts
WHERE post_status = 'publish';
```

Just copypasta that query into your favorite MySQL client (or the cli if you're hardcore) and you should see the magic number.

![Query Result](/media/sql-result.png)