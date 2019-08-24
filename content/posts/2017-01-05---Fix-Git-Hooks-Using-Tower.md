---
title: Fix your git hooks when using Tower
date: "2017-01-05T20:36:54Z"
template: "post"
slug: "/posts/fix-git-hooks-using-tower/"
category: "Development"
tags: ["Git"]
draft: false
---
One of our newest OptinMonster developers has already made a big splash by introducing even more automation to our development flow. For the past two years (TWO!) this has been our usual conversation after pushing some changes:

> The changes you pushed aren't working.
> 
> (┛◉Д◉)┛彡┻━┻
> 
> Do I need to run anything after pulling this down?
> 
> Yeah. `composer install` in the core plugin and theme. `npm install` in the theme. `gulp scripts` in the theme.
> 
> Ah! There we go! 

It was time to put an end to it. The new dev created a few git hooks, installed with a script, that run all of the necessary build steps after a pull from our GitHub repository. Only problem is the hooks don't work if you're using [Tower](https://www.git-tower.com) or any other GUI for git. Luckily the fix is simple. Add this to the very top of all of your git hook scripts:

`export PATH=$PATH:/usr/local/bin:/usr/local/sbin`
    

This give Tower the correct paths to find whatever scripts you use in your git hooks. In our case it was `node`.