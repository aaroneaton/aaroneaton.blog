---
title: Using WP_Mock with PhpSpec
date: "2016-09-09T21:12:30Z"
template: "post"
slug: "/posts/using-wp_mock-phpspec/"
category: "Development"
tags: ["Testing"]
draft: false
---
Over the last few weeks I've begun a push to increase our test coverage in [OptinMonster](https://aaroneaton.blog/wp/recommends/optinmonster/) with [PhpSpec](http://www.phpspec.net/en/stable/). Doing so will allow the team to release features with greater confidence and reduce bugs throughout the codebase. As tests were being written I quickly ran into issues mocking WordPress functions. Yep! [OptinMonster is written on top of WordPress](https://thomasgriffin.io/using-wordpress-as-a-saas-platform-with-optinmonster/)!

After trying out a couple of different testing frameworks we've settled on [PhpSpec](http://www.phpspec.net/en/stable/) as our framework of choice. You and I could argue over the merits of our decision but it comes down to this: Compared to the dominant PHPUnit, PhpSpec seems to be more conducive to onboarding new or junior developers and the tests read more like plain English. Which of the tests below read easier for you?

<div class="oembed-gist">
  <noscript>
    View the code on <a href="https://gist.github.com/channeleaton/9701eef8c3b18d3f9c9bd9191f47f012">Gist</a>.
  </noscript>
</div>

## What's WordPress got to do with this?

With frameworks architected in an object-oriented manner from the very beginning (i.e. Laravel, Symfony) mocking dependencies is a trivial matter. Those frameworks avoid placing functions in the global scope and when they do those functions are usually wrappers for encapsulated functionality. WordPress is a different story. Now, this isn't an article about the pros & cons of WordPress. There's been more than enough written on that subject. So, the point is mocking most of WordPress' functionality which presents an interesting challenge. Thankfully the [ever-hiring](http://is10uphiring.com/) team at 10up has created a mocking framework specifically for WordPress called [WP_Mock](https://github.com/10up/wp_mock). This creates an API that makes WordPress-related mocks quick and painless.

## Wait. What are mocks?

In unit testing mocks are basically copies of dependencies within your code. The purpose is to isolate the behavior of the class/methods you are testing from those dependencies. The hope is those dependencies already have good unit tests behind them so you can easily fake their behavior.

## Great. Let's get to the point.

With all of the explanations out of the way I can finally show you how to get WP\_Mock working with PhpSpec. The WP\_Mock documentation shows how to easily get up and running with PHPUnit and luckily the ideas translate over to PhpSpec really well. Instead of using `setUp()` and `tearDown()` PhpSpec provides similar methods called `let()` and `letGo()`. Those methods should be written as so:

<div class="oembed-gist">
  <noscript>
    View the code on <a href="https://gist.github.com/channeleaton/9701eef8c3b18d3f9c9bd9191f47f012">Gist</a>.
  </noscript>
</div>

With that in place we are free to use WP_Mock as we would in PHPUnit. Here's a simple test for our Todo class. We need to make sure that when we call our `save()` method on the Todo that the proper WordPress function is called with specific arguments so that it can be saved to the database. Since we are mocking `wp_insert_post()` the database won't actually be changed which greatly simplifies testing and helps us focus only on the code we are writing.

<div class="oembed-gist">
  <noscript>
    View the code on <a href="https://gist.github.com/channeleaton/9701eef8c3b18d3f9c9bd9191f47f012">Gist</a>.
  </noscript>
</div>

That's it! If you have any questions about unit testing your own WordPress plugins let me know in the comments!