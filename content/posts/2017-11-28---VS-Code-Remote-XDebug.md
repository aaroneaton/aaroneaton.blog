---
title: Using remote XDebug with Visual Studio Code
date: "2017-11-28"
template: "post"
slug: "/posts/vs-code-remote-xdebug/"
category: "Development"
tags: ["Debugging"]
draft: false
description: "Foo"
---

I was happy in Jetbrains land. Everything was familiar. Everything fit into my workflow perfectly. For 4 years every bit of development was completed in PhpStorm. Then things started to go sour. Constant re-indexing would bring my computer to a crawl. RAM usage far exceeded that of Slack (yeah). And that's just the start of it.

A few colleagues of mine began extolling the virtues of Visual Studio Code in the first half of this year. Given my jaded history with Microsoft I was, at first, put off by the idea of using a Microsoft IDE. Their preachings were ignored for a while.

But they kept preaching. And FOMO kicked in.

In September I decided to give VSC a chance. The inagaural project was a fully drag & drop campaign builder for OptinMonster. The project is 100% JS so it seemed like a perfect fit. It was, but I still found myself sneaking back to PhpStorm for all of my backend development. There was just too much missing in VSC for me to go all in.

Over time I was able to close all of those gaps except one: remote debugging. I, like most PHP developers these days, run my development environments on virtual machines. This means our language interpreters XDebug run within the confines of the VM. Visual Studio Code does not support this configuration out of the box so I've written up everything I learned.

## Prerequisites
You will need PHP 7+ with XDebug running on a virtual machine.

## Install the necessary extension
Since VSC isn't really set up for PHP from the get-go you'll need to install the [PHP Debug](https://marketplace.visualstudio.com/items?itemName=felixfbecker.php-debug) extension. This creates an adapter between XDebug and the built-in VSC debug functionality.

## Make XDebug talk to the outside world
In your VM, open up `php.ini` and you'll hopefully find a section for XDebug. Make sure the following settings exist:

```
[Xdebug]
xdebug.remote_enable = 1
xdebug.remote_autostart = 1
xdebug.remote_connect_back = 1
```

Don't forget to restart PHP after making this change!

## Create the debug config
Debug configurations in VSC are, like every other config, a JSON file. You'll need to create a configuration for PHP. Open up the Debug panel in VSC, click the gear icon (should have a red dot) and select PHP as your environment. 

![Create a debug config](/media/create-config.png)

You should see a new file open up called `launch.json`.

## Set up path mappings
The default PHP debug config will allow you to listen for remote XDebug sessions but you'll likely need to tell VSC where to find your files on the server. Skipping this step really just renders the debug features worthless. Your config should look something like this:

```
{
    "name": "Listen for XDebug",
    "type": "php",
    "request": "launch",
    "port": 9000,
    "pathMappings": {
        "/app/public": "${workspaceRoot}"
    }
},
```

You should set up all of the necessary path mappings. Their format should be `"/path/on/server": "${workspaceRoot}/local/path"`.

## Start debugging
Now start a debugging session (`F5`) and create a breakpoint in your code. If everything has been set up correctly the next time you load your app you'll see all of the debug info in the VSC sidebar. Here it is in action:

![Debugging](/media/debugging.gif)

---

So with XDebug working beautifully in Visual Studio Code I've removed my last hurdle to switching.

Have any great tips or extensions to share for VSC? Hit me up on Twitter!