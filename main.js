(()=>{"use strict";const e=()=>{const e=document.querySelector("#content"),t=(document.createElement("ul"),document.createElement("div")),n=document.createElement("h1"),a=document.createElement("p"),r=document.createElement("div"),o=document.createElement("h3"),c=document.createElement("p"),s=document.createElement("div"),i=document.createElement("h3"),d=document.createElement("p");document.createElement("footer"),document.createElement("p"),document.createElement("a"),document.createElement("img"),t.setAttribute("id","main"),n.innerHTML="BurgerLords",a.innerHTML="Back in 1954, a man named Ray Kroc discovered a small burger restaurant in California, and wrote the first page of our history. From humble beginnings as a small restaurant, we're proud to have become one of the world's leading food service brands with more than 36,000 restaurants in more than 100 countries.",r.setAttribute("id","hours"),o.innerHTML="Hours",c.innerHTML="Sunday: <span>8am - 8pm</span> <br> Monday: <span>6am - 6pm</span> <br> Tuesday: <span>6am - 6pm</span> <br> Wednesday: <span>6am - 6pm</span> <br> Thursday: <span>6am - 10pm</span> <br> Friday: <span>6am - 10pm</span> <br> Saturday: <span>8am - 10pm</span>",r.append(o),r.append(c),s.setAttribute("id","location"),i.innerHTML="Location",d.innerHTML="123 Forest Drive, Forestville, Maine",s.append(i),s.append(d),t.append(n),t.append(a),t.append(r),t.append(s),e.append(t)};document.addEventListener("DOMContentLoaded",(()=>{e();const t=document.querySelector("#content"),n=document.querySelector("#Home"),a=document.querySelector("#Menu"),r=document.querySelector("#Contact");n.onclick=()=>{t.innerHTML="",e()},a.onclick=()=>{t.innerHTML="",(()=>{const e=document.querySelector("#content"),t=(document.createElement("ul"),document.createElement("div")),n=document.createElement("h1"),a=[{name:"Big Tasty",src:"big-tasty.jpg",description:"A big and tasty Halal beef patty smothered in our one of a kind Big Tasty Sauce and 3 slices of emmental cheese, dressed with 2 slices of tomato, a handful of crispy shredded lettuce and slivered onions."},{name:"Quarter Pounder",src:"quarter-pounder.jpg",description:"A quarter pound* of 100% pure halal beef with absolutely no fillers, additives or preservatives. Just a pinch of salt and pepper, and seared on our grill so it’s thick and juicy. Layered with two slices of melty cheese, slivered onions and tangy pickles on a sesame seed bun. *Weight before cooking at least 110 g."},{name:"Double Cheeseburger",src:"double-cheeseburger.jpg",description:"Two 100% pure halal beef patties with absolutely no fillers, additives or preservatives, seasoned with a pinch of salt and pepper, and topped with tangy pickles, chopped onions, ketchup, mustard and two slices of melty American cheese."},{name:"Beef Burger",src:"beef-burger.jpg",description:"A juicy, 100% pure halal beef patty with absolutely no fillers, additives or preservatives, seasoned with a pinch of salt and pepper, and topped with a tangy pickle, chopped onions, ketchup and mustard."},{name:"Smoky BBQ",src:"smoky-bbq.jpg",description:"Juicy 100% halal beef topped with crispy chicken strips, crispy onion, fresh Boston lettuce, melty Emmental cheese, and a smoky barbeque sauce, all nestled in a double water split artisan bun."}],r=document.createElement("div");document.createElement("footer"),document.createElement("p"),document.createElement("a"),document.createElement("img"),t.setAttribute("id","main1"),n.innerHTML="Menu";for(let e of a){const t=document.createElement("div"),n=document.createElement("h3"),a=document.createElement("img"),o=document.createElement("p");n.innerHTML=e.name,a.setAttribute("src",e.src),o.innerHTML=e.description,t.setAttribute("class","item"),t.append(n),t.append(a),t.append(o),r.setAttribute("id","items"),r.append(t)}t.append(n),t.append(r),e.append(t)})()},r.onclick=()=>{t.innerHTML="",(()=>{const e=document.querySelector("#content"),t=(document.createElement("ul"),document.createElement("div")),n=document.createElement("h1"),a=[{name:"Ben Parker",src:"ben-parker-OhKElOkQ3RE-unsplash-modified(1).jpg",position:"Manager"},{name:"Sergio Jesus",src:"sergio-de-paula-c_GmwfHBDzk-unsplash(1).jpg",position:"Chef"},{name:"Dani Ricardo",src:"dani-SzHsiYO6pZE-unsplash(1)(1).jpg",position:"Waiter"}],r=document.createElement("div");document.createElement("footer"),document.createElement("p"),document.createElement("a"),document.createElement("img"),t.setAttribute("id","main2"),n.innerHTML="Contact Us";for(let e of a){const t=document.createElement("div"),n=document.createElement("img"),a=document.createElement("div"),o=document.createElement("h3"),c=document.createElement("p");t.setAttribute("class","person"),n.setAttribute("src",e.src),o.innerHTML=e.name,c.innerHTML=`${e.position} <br>\n       555-555-5555 <br>\n       perfectlyRealEmail@notFake.com`,a.setAttribute("class","person-details"),a.append(o),a.append(c),t.append(n),t.append(a),r.append(t)}r.setAttribute("id","team"),t.append(n),t.append(r),e.append(t)})()}}))})();