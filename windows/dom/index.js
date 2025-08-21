//* ==============================
//* DOM IN JAVASCRIPT
//* ==============================

//? When a web browser loads an HTML document, it parses the HTML source code and creates a tree-like structure known as the Document Object Model (DOM).
// This DOM tree represents the structure of the HTML document, with each HTML element being a "node" in the tree.

// 1. DOM Tree: A webpage = DOM tree.
// The top root = document (special object representing the whole HTML).
// The DOM tree has nodes (everything is a node).

//? DOM And DOM API:
// The DOM is the tree structure of your page.
// The DOM API (Application Programming Interface) is a set of methods and properties provided by browsers so developers can interact with the DOM(like changing text,color etc anything we use to work with DOM)

// 2. Node vs Object in DOM:
// Node = basic unit of DOM (can be element, attribute, text, comment, etc).
// Object = JavaScript representation of that node (you can use properties/methods on it).

// Example:
// let name = document.querySelector(".age")
// In this name is a object make by using the age node.
// REMEMBER: Every node is an object, but not every object is a node.

// 3. Node vs Element in DOM:
// Use Node methods when you need everything (text, comments, etc.)
// Use Element methods when you want only real elements. More specific, deals with HTML tags + attributes + CSS.

// 3.(a) Node Types (main ones):
// ELEMENT_NODE (1) → e.g. <div>, <p>
// ATTRIBUTE_NODE (2) → attributes inside tags(like id, class, src)
// TEXT_NODE (3) → text inside an element
// COMMENT_NODE (8) → <!-- comment -->
// DOCUMENT_NODE (9) → whole document
// DOCUMENT_TYPE_NODE (10) → <!DOCTYPE html>

// A node type is just a number that tells us what kind of node we are dealing with.
// Example: 1 = element, 2 = attribute,  3 = text, 8 = comment, 9 = document.

// 3.(b) Element types are based on the HTML tag name.
// Examples:
// <div> → HTMLDivElement
// <p> → HTMLParagraphElement
// <span> → HTMLSpanElement
// <a> → HTMLAnchorElement
// <ul> → HTMLUListElement
// <li> → HTMLLIElement
// <table> → HTMLTableElement

// 4.(A) Node Properties:

// Example:
// <!-- Reuse this once for all examples -->
// <div id="wrap">
//   <p id="para">Hello <span style="display:none">Hidden</span> World</p>
//   <!-- a comment -->
//   <ul id="list">
//     <li>Apple</li>
//     <li>Banana</li>
//   </ul>
// </div>

// Now:
// const p = document.getElementById('para');
// const ul = document.getElementById('list');

// 1. nodeType → Tells type of node (1=Element, 3=Text, 8=Comment, etc.)
// console.log(p.nodeType); // 1
// 2. nodeName → Name of the node (DIV, #text, #comment, etc.)
// console.log(p.nodeName); // "P"
// 3. nodeValue → Value of a text or comment node (usually null for elements)
// const text = p.firstChild;
// console.log(text.nodeValue); // "Hello "
// 4. parentNode → The parent node of this node
// console.log(p.parentNode.id); // "wrap"
// 5. childNodes → A live NodeList of all child nodes (including text, comments, etc.)
// console.log(ul.childNodes); // NodeList(5) [text, li, text, li, text]
// 6. firstChild → First child node (could be text, element, or comment)
// console.log(ul.firstChild); // #text
// 7. lastChild → Last child node
// console.log(ul.lastChild); // #text
// 8. previousSibling → Previous node at the same level (could be text/comment/element)
// const text = ul.lastChild;
// console.log(text.previousSibling); // <li>banana</li>
// 9. nextSibling → Next node at the same level
// const text = ul.firstChild;
// console.log(text.nextSibling); // <li>Apple</li>
// 10. ownerDocument → Reference to the whole document object
// console.log(p.ownerDocument === document); // true
// 11. textContent → Text of this node and its children
// console.log(p.textContent); // "Hello Hidden World"

// 4.(B) Node Methods:
// 1. appendChild(node) → Adds a node as the last child
// const li = document.createElement('li'); 
// li.textContent='Mango'; 
// ul.appendChild(li); // Mango is added in list
// 2. removeChild(node) → Removes a child node
// ul.removeChild(ul.firstChild); // removes first *node* (might be text)
// 3. replaceChild(newNode, oldNode) → Replaces an old child with new one
// const li2 = document.createElement('li'); 
// li2.textContent='Orange';
// ul.replaceChild(li2, ul.children[0]); // replace first <li> from apple to orange
// 4. insertBefore(newNode, referenceNode) → Inserts a new node before another child
// const li3 = document.createElement('li'); 
// li3.textContent='Grapes';
// ul.insertBefore(li3, ul.firstChild); // Inserts a new node with text Grapes before Apple
// 5. cloneNode(deep = false) → Copies the node (deep=true also copies children)
// const copy = ul.cloneNode(true); 
// document.getElementById('wrap').appendChild(copy); // clone same ul list with values as before created just clone it
// 6. contains(node) → Checks if node is inside another
// console.log(document.getElementById('wrap').contains(p)); // true
// 7. hasChildNodes() → Returns true if the node has children
// console.log(ul.hasChildNodes()); // true

// 5(A) Element Properties

// Example:
// <div id="wrap" class="container main">
//   <p id="para">Hello <span style="display:none">Hidden</span> World</p>
//   <ul id="list">
//     <li class="fruit">Apple</li>
//     <li class="fruit">Banana</li>
//   </ul>
// </div>

// 1. id → returns/sets element’s id.
// console.log(wrap.id);  // "wrap"
// wrap.id = "newWrap";   // "newWrap"
// 2. className → returns/sets CSS class as a string.
// console.log(wrap.className);   // class="container main"
// wrap.className = "box";       // <div class="box">
// 3. classList → returns a DOMTokenList of all classes (add, remove, toggle, contains).
// console.log(wrap.classList);        // ["container", "main"]
// wrap.classList.add("highlight");    // add class
// wrap.classList.remove("main");      // remove class
// wrap.classList.toggle("dark");      // toggle
// console.log(wrap.classList.contains("container")); // true
// 4. tagName → gives the name of the tag (like DIV, P).
// console.log(wrap.tagName); // "DIV"
// 5. innerHTML → gets/sets HTML inside element.
// console.log(wrap.innerHTML); // <p id="para">Hello <span ...>Hidden</span> World</p><ul id="list">...</ul>
// 6. outerHTML → gets/sets full HTML of the element including itself.
// console.log(wrap.outerHTML); // <div id="wrap" class="container main">...</div>
// 7. innerText → visible text (respects CSS).
// console.log(para.innerText); // "Hello World"
// 8. textContent → all text inside (even hidden).
// console.log(para.textContent); // "Hello Hidden World"
// 9. attributes → returns a NamedNodeMap of attributes.
// console.log(wrap.attributes);  // NamedNodeMap {0: id, 1: class, ...}
// console.log(wrap.attributes[0].name);  // "id"
// console.log(wrap.attributes[0].value); // "wrap"
// 10. children → HTMLCollection of child elements only.
// console.log(wrap.children);  // HTMLCollection(2) [p#para, ul#list, para: p#para, list: ul#list]
// 11. firstElementChild → first child element.
// console.log(wrap.firstElementChild); // <p id="para">...</p>
// 12. lastElementChild → last child element.
// console.log(wrap.lastElementChild); // <ul id="list">...</ul>
// 13. previousElementSibling → previous sibling element.
// console.log(list.previousElementSibling); // <p id="para">...</p>
// 14. nextElementSibling → next sibling element.
// console.log(para.nextElementSibling); // <ul id="list">...</ul>
// 15. style → inline CSS style object.
// para.style.color = "red";   // add inline CSS
// console.log(para.style.color); // "red"

// 5(B) Element Methods
// 1. getAttribute(name) → returns value of attribute.
// console.log(wrap.getAttribute("class")); // "container main"
// 2. setAttribute(name, value) → sets an attribute.
// wrap.setAttribute("data-id", "123");
// console.log(wrap.outerHTML); // <div id="wrap" class="container main" data-id="123">...</div>
// 3. removeAttribute(name) → removes an attribute.
// wrap.removeAttribute("class");
// 4. hasAttribute(name) → checks if attribute exists.
// console.log(wrap.hasAttribute("id")); // true
// 5. getElementsByTagName(name) → finds elements inside by tag name.
// console.log(wrap.getElementsByTagName("li")); // HTMLCollection of <li>
// 6. getElementsByClassName(name) → finds elements inside by class name.
// console.log(wrap.getElementsByClassName("fruit")); // HTMLCollection of 2 li
// 7. querySelector(selector) → first matching element.
// console.log(document.querySelector("#para")); // first match → <p id="para">
// 8. querySelectorAll(selector) → all matching elements (NodeList).
// console.log(document.querySelectorAll(".fruit")); // NodeList of 2 li
// 9. closest(selector) → finds nearest ancestor matching selector.
// console.log(para.closest(".container")); // <div id="wrap" class="container main">
// 10. matches(selector) → checks if element matches a selector.
// console.log(para.matches("#para")); // true

//* ==============================
//* DOM Searching
//* ==============================
//? getElementById(id): Find an element by its ID.

//? getElementsByClassName(className): Find elements with a specific class name.

//? getElementsByTagName(tagName): Find elements with a specific tag name.

//? querySelector(selector): Find the first element that matches the specified CSS selector.

//? querySelectorAll(selector): Find all elements that match the specified CSS selector.

//* ================
//* DOM - Iteration
//* ================

// Remember: NodeList (on this default forEach is given, but it look like array not real array so we map not apply on it until we convert it to array using Array.from(object))
// these give result in NodeList:
// document.querySelectorAll("selector"), childNodes, document.querySelector("parent").childNodes

// Remember: HTMLCollection (in this no forEach and map used until we convert it to array using Array.from())
// these give result in HTMLCollection:
// document.getElementsByTagName("tag"), document.getElementsByClassName("class"), element.children, document.forms, document.images, document.links

//* ====================
//* DOM Tree Navigation
//* ====================

//? document represents the entire document
// console.log(document);
//? parentNode / parentElement:
//? childNodes / children:
//? firstChild / firstElementChild:
//? lastChild / lastElementChild:
//? nextSibling / nextElementSibling:
//? previousSibling / previousElementSibling:
//? closest(selector):

//* ============================================
//* DOM - CRUD (Create, Read, Update, Delete):
//* ============================================

//? createElement(tagName): Create a new HTML element.
//? appendChild(node): Append a node as the last child of a parent node.
//? removeChild(node): Remove a child node from its parent.
//? addEventListener(event, function): Create an event listener to handle events.
//? removeEventListener(event, function): Remove an event listener.
//? setAttribute(name, value): Set the value of an attribute on an element.
//? getAttribute(name): Get the value of a specific attribute on an element.
//? innerHTML: Read or update the HTML content of an element.
//? textContent: Read or update the text content of an element.
