
// attachEvent()
// jQuery on

// type, timestamp, defaultPrevented
// target, toElement, srcElement, currentTarget,
// clientX, clienty, screenX, screenY
// altkey, ctrlkey, shiftkey, keyCode

document.getElementById('owl').addEventListener('click', function(e){
console.log(e);
36
}, false) // true for capturing, false for bubbling

// what is event propagation? 
// -> event propagation is the way events bubble up or down the DOM tree.


// what is event bubbling? 
// -> bubbling is when an event starts from the target element and bubbles up to its ancestors.


// what is event capturing? 
// -> capturing is when an event starts from the root and goes down to the target element.


// what is event delegation? 
// -> event delegation is a technique where a single event listener is added to a parent element to manage events for multiple child elements.


// what is event.target? 
// -> event.target is the element that triggered the event.


// what is event.currentTarget?
//  -> event.currentTarget is the element to which the event listener is attached.


// what is event delegation? 
// -> event delegation is a technique where a single event listener is added to a parent element to manage events for multiple child elements.


// what is event delegation? 
// -> event delegation is a technique where a single event listener is added to a parent element to manage events for multiple child elements.


// event.stopPropagation() -> prevents the event from bubbling up or capturing down the DOM tree.