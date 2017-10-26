---
title: Finally. An easy way to style dropdowns (select elements)
date: "2015-05-20T09:35:43Z"
path: "/an-easy-way-to-style-dropdowns/"
image: /app/uploads/2015/05/Select_js_–_Styleable_select_elements_built_on_Tether_js-825x414.png
category:
  - Development
---
Do you know what I hate the most about CSS? Styling form elements.

Yes, most browsers provide some sensible defaults, but clients never seem to want those in their designs. Good luck getting the form to look the same across all browsers. Some even say it's <a href="http://www.smashingmagazine.com/2013/02/27/css-form-elements-problem/" target="_blank">downright impossible</a>.

Do you know what I _loathe_ about CSS? Styling dropdowns (select elements).

It may be simple to style the select box itself, but what about the options? As far as I know, no browser provides a way to do so.

On a recent client project the designer requested custom styling for both the select box and its options. After throwing a fit for 30 seconds I went to work on finding someone who had been kind enough to do this for me. Eventually I came across <a href="http://github.hubspot.com/select/docs/welcome/" target="_blank">Select.js</a> from the wonderful team at HubSpot.

How does it work? Well. I haven't really looked into the code too much so for now I'll just say &#8220;Magic.&#8221; All you have to do to use it is include the proper javascript & CSS files, add 3 lines of JS to your project and you're good to go! Check out the <a href="http://github.hubspot.com/select/" target="_blank">documentation</a> for all of the details. It's even easily themeable!

Here's my client's form after Select.js has been applied:

[<img class="alignnone size-full wp-image-628" src="http://channeleaton.com/content/uploads/2015/05/nice-form.png" alt="Nice Form" width="605" height="286" srcset="https://aaroneaton.blog/app/uploads/2015/05/nice-form.png 605w, https://aaroneaton.blog/app/uploads/2015/05/nice-form-300x142.png 300w" sizes="(max-width: 605px) 100vw, 605px" />](http://channeleaton.com/content/uploads/2015/05/nice-form.png)

&nbsp;

If you're looking for something geared towards more complex dropdowns, take a look at <a href="http://harvesthq.github.io/chosen/" target="_blank">Chosen</a> from the <a href="https://www.getharvest.com/" target="_blank">Harvest</a> team.