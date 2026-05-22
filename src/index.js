var menuLinks = [
  { text: "about", href: "/about" },
  { text: "catalog", href: "/catalog" },
  { text: "orders", href: "/orders" },
  { text: "account", href: "/account" },
];


//part 1
const mainEl = document.querySelector("main");
//A
mainEl.style.backgroundColor = "var(--main-bg)";
//B
mainEl.innerHTML = "<h1>DOM Manipulation</h1>";
//C
mainEl.classList.add("flex-ctr");

//Part 2
const topMenuEl = document.querySelector("#top-menu");
// A
topMenuEl.style.height = "100%";
// B
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";
//C
topMenuEl.classList.add("flex-around");

//Part 3
for (let i of menuLinks) {
  let anchor = document.createElement("a");
  anchor.setAttribute("href", i.href);
  anchor.textContent = i.text;
  topMenuEl.appendChild(anchor);
}
