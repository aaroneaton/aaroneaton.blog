---
title: Accessing React refs in React-DnD
date: "2017-11-03"
template: "post"
slug: "/posts/access-refs-react-dnd/"
category: "Development"
tags: ["React"]
draft: false
---

My team and I at OptinMonster are in the process of building a true drag & drop solution for the campaign builder. 
This represents the biggest improvement to the platform in over a year.

We landed on using the excellent [React DnD](http://react-dnd.github.io/react-dnd/) to power the user 
interactions. It provides some high-level components to make use of the HTML5 Drag & Drop API which significantly 
speeds up our development.

One problem I've run into is accessing a child of the drop target element to calculate some hover interactions. The 
React DnD docs suggest using `findDOMNode(component)` but performing the DOM tree searches during the hover callback 
(which fires seemingly every 10ms) can bring the browser to a standstill with any significant number of nodes.

So instead I found React refs are accessible from within the React DnD callbacks with `component.decoratedComponentInstance`. This is a significantly faster method of pulling data out of the DOM and provides 
access only to the DOM elements you really need. Here's how to make use of the refs:

```javascript
/**
* Set `this.targetEl` to your desired element.
*/
class MyComponent extends React.Component {
// ...
render() {
    return (
        <div className="parent">
            <div className="child" ref={el => this.targetEl = el}>Content Here</div>
        </div>
    )
}
// ...
}

/**
* And in your drop target spec `targetEl` will be available.
*/
const dropTarget = {
  hover: (props, monitor, component) => {
    // Get the target bounding rectangle
    const hoverBoundingRect = component.decoratedComponentInstance.targetEl.getBoundingClientRect();
    // ... 
  }
}
```

Have any questions about React, drag & drop, or OptinMonster? Let me know on Twitter!