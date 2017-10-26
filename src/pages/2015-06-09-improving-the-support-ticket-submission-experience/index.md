---
title: Improving the support ticket submission experience
date: "2015-06-09T12:18:03Z"
path: "/improving-the-support-ticket-submission-experience/"
image: /app/uploads/2015/06/support-825x510.jpg
category:
  - OptinMonster
---
During the design phase of the new [OptinMonster SaaS](https://aaroneaton.blog/wp/recommends/optinmonster/) we realized that there was one killer feature that could set us apart from our competition. It wasn't more beautiful themes, a super-duper form builder or a brand new type of optin form. Don’t get me wrong. All of those features are important to us and are in the works, but&#8230;

Our killer feature is outstanding customer support.

Without it we lose customers. We lose the opportunity to turn the inevitable frustrated customer into a raving fan.

Yesterday Syed Balkhi wrote about how we at OptinMonster [handle our customer support](https://syedbalkhi.com/how-we-handle-customer-support-behind-the-scenes-look/) from submission to resolution. Today I'd like to take a deeper dive into the support ticket submission experience.

We have focused on creating [lines of defense](http://robinhq.com/customer-service-guide/support-content/) for our support team. While we love talking to our customers, every question answered before a ticket is submitted is a big win for us. Why?

  1. OptinMonster is a small team. We don’t have dozens of staff to throw at customer support.
  2. The less time it takes a customer to get a resolution, the happier they are. Depending on the complexity of the issue, submitting a support ticket with us (or anyone, really) will almost guarantee a 12 hour time-to-resolution.

For those reasons, every customer is funneled through the documentation page before submitting a support ticket. Customers are provided with two different avenues to find what they are looking for, browse or search.

## Browsing

[<img class="alignnone size-full wp-image-644" src="http://channeleaton.com/content/uploads/2015/06/OptinMonster_Docs.png" alt="OptinMonster Documentation Categories" width="980" height="532" srcset="https://aaroneaton.blog/app/uploads/2015/06/OptinMonster_Docs.png 980w, https://aaroneaton.blog/app/uploads/2015/06/OptinMonster_Docs-300x163.png 300w" sizes="(max-width: 767px) 89vw, (max-width: 1000px) 54vw, (max-width: 1071px) 543px, 580px" />](http://channeleaton.com/content/uploads/2015/06/OptinMonster_Docs.png)

All of our documentation is split into 6 categories. We found that 6 was enough to find what you’re looking for but not so many as to overwhelm the customer with choices. Documents can be found in just two clicks.

## Real-time search

[<img class="alignnone size-full wp-image-646" src="http://channeleaton.com/content/uploads/2015/06/OptinMonster_Docs1.png" alt="OptinMonster Documentation Search" width="981" height="296" srcset="https://aaroneaton.blog/app/uploads/2015/06/OptinMonster_Docs1.png 981w, https://aaroneaton.blog/app/uploads/2015/06/OptinMonster_Docs1-300x91.png 300w" sizes="(max-width: 767px) 89vw, (max-width: 1000px) 54vw, (max-width: 1071px) 543px, 580px" />](http://channeleaton.com/content/uploads/2015/06/OptinMonster_Docs1.png)

The jewel of the documentation page is our real-time search. By entering just a few characters in to the search box you can find a list of related articles updating automatically below. All of the search functionality happens on the client-side.

How do we do it? We use a fuzzy-matching script called [Fuse](https://github.com/krisk/Fuse) to search an array containing every help document.

When a customer hits the documentation page, WordPress collects every post of the `optinmonster-docs` type, strips it down to just the title and permalink, and sends it to the browser via [`wp_localize_script()`](https://codex.wordpress.org/Function_Reference/wp_localize_script). Now that we have all of this info in the browser as a Javascript array we can pass it along to Fuse:

<div class="oembed-gist">
  <noscript>
    View the code on <a href="https://gist.github.com/channeleaton/66c0951be2dd65e1f13c">Gist</a>.
  </noscript>
</div>

Any time the user types into the search box the section below is updated with the related docs. We must also rate-limit the input by using the Underscore.js method [`_.throttle`](http://underscorejs.org/#throttle). This is done to keep those fast typers from overwhelming their browser.

<div class="oembed-gist">
  <noscript>
    View the code on <a href="https://gist.github.com/channeleaton/66c0951be2dd65e1f13c">Gist</a>.
  </noscript>
</div>

If you noticed above, we also make use of Underscore tempting to update the docs list. Here’s that template:

<div class="oembed-gist">
  <noscript>
    View the code on <a href="https://gist.github.com/channeleaton/66c0951be2dd65e1f13c">Gist</a>.
  </noscript>
</div>

## Make it super simple to submit a ticket

In the event we do not have documentation for the feature or issue the customer was searching for, we make it extremely easy for them to submit a ticket. When ‘Submit a Ticket’ is clicked they are directed to our ticket submission form which has been pre-populated with all of their customer information. All the customer needs to do is select their affected site, describe the problem and hit ‘Submit’.

We also take this opportunity to learn more about what our customers look for before submitting the ticket. The ‘Submit a Ticket’ button on the documentation page has a little magic added to it. When clicked, we take whatever they customer typed into the search field and add it as a query argument in the submission URL.

<div class="oembed-gist">
  <noscript>
    View the code on <a href="https://gist.github.com/channeleaton/66c0951be2dd65e1f13c">Gist</a>.
  </noscript>
</div>

Data is collected on this query argument during form submission so we can learn exactly where our support line-of-defense failed and correct it for the future. Once we get a few data points containing the same terms we know a support document needs to be written on the subject.

## We’ve come a long way

Compared to our [old support and documentation](https://old.optinmonster.com/docs/) workflow I think we’ve made great strides. Customers are now able to find an answer to their question easier than ever before and we are better equipped to adapt to their changing needs.

[<img class="alignnone size-full wp-image-648" src="http://channeleaton.com/content/uploads/2015/06/optinmonster-old-new.png" alt="Old & New OptinMonster Docs" width="1000" height="484" srcset="https://aaroneaton.blog/app/uploads/2015/06/optinmonster-old-new.png 1000w, https://aaroneaton.blog/app/uploads/2015/06/optinmonster-old-new-300x145.png 300w" sizes="(max-width: 767px) 89vw, (max-width: 1000px) 54vw, (max-width: 1071px) 543px, 580px" />](http://channeleaton.com/content/uploads/2015/06/optinmonster-old-new.png)

I can see us needing to optimize the search functionality in the future. Fuse.js can handle a great number of documents but we must remain vigilant when it comes to front-end speed and experience. There’s also the question of how much data `wp_localize_script()` can handle.

Are you a digital product manager? What improvements can you make to your own support workflow?

And to customers, what are your biggest frustrations when it comes to finding solutions to your problems?

Let me know in the comments.