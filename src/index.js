var menuLinks = [

  {text: 'about', href: '/about'},

  {text: 'catalog', href: '#', subLinks: [

    {text: 'all', href: '/catalog/all'},

    {text: 'top selling', href: '/catalog/top'},

    {text: 'search', href: '/catalog/search'},

  ]},

  {text: 'orders', href: '#' , subLinks: [

    {text: 'new', href: '/orders/new'},

    {text: 'pending', href: '/orders/pending'},

    {text: 'history', href: '/orders/history'},

  ]},

  {text: 'account', href: '#', subLinks: [

    {text: 'profile', href: '/account/profile'},

    {text: 'sign out', href: '/account/signout'},

  ]},

];

//LAB PART 1
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


//LAB PART 2

//Part 3: Creating the Submenu
//Select and cache the <nav id="sub-menu"> element in a variable named subMenuEl.
const subMenuEl  = document.getElementById("sub-menu");

//Set the height subMenuEl element to be "100%"
subMenuEl.style.height = "100%"
//Set the background color of subMenuEl to the value stored in the --sub-menu-bg CSS custom property.
subMenuEl.style.backgroundColor = "var(--sub-menu-bg)"
//Add the class of flex-around to the subMenuEl element.
subMenuEl.classList.add("flex-around")
//Set the CSS position property of subMenuEl to the value of absolute.
subMenuEl.style.position = "absolute" 
//Set the CSS top property of subMenuEl to the value of 0.
subMenuEl.style.top = "0%";


//Part 4: Adding Menu Interaction
//Select and cache the all of the <a> elements inside of topMenuEl in a variable named topMenuLinks
topMenuLinks = topMenuEl.querySelectorAll("a"); 


//Attach a delegated 'click' event listener to topMenuEl.
topMenuEl.addEventListener("click", topMenuElHandleClick);


//eventlistener for topMenuEl
function topMenuElHandleClick(event){

  //The first line of code of the event listener function should call the event object's preventDefault() method.
  event.preventDefault(); //prrevent it from autiomaticall going to a link so we can specify custom behavior

  //The second line of code of the function should immediately return if the element clicked was not an <a> element.
  if(event.target.tagName!= "A"){ //event.target tells us what we clicked on that triggered the event. Call .tagName on it so see what type of element we clicked on 
     return
  }

 // The event listener should add the active class to the <a> element that was clicked, 
 // unless it was already active, in which case it should remove it.
  if(!event.target.classList.contains("active"))
      event.target.classList.toggle("active")
  else
    event.target.classList.remove("active")
  
 //The event listener should remove the active class from each other <a> element in topMenuLinks - 
 // whether the active class exists or not
 for (let links of topMenuLinks){
  if(links.textContent!==event.target.textContent ) //remove active class from all of the anchor tags except the one we clikc on
    links.classList.remove("active")
 }


 //Part 5: Adding Submenu Interaction
 //If the clicked <a> element's "link" object within menuLinks has a subLinks property 
 // (all do, except for the "link" object for ABOUT), set the CSS top property of subMenuEl to 100%.

 let correspondingLink = menuLinks.find( 
 //find me the correspondong menuLinks item by matching the targets textConent to the menuLinks object's name
  (element) =>  element.text === event.target.textContent
)

//if it has a sublinks array and its currently active
if(correspondingLink.subLinks && event.target.classList.contains('active')){
  subMenuEl.style.top = "100%" //show the submenu and populate it with the correct subLinks
  buildSubMenu(correspondingLink.subLinks); //we pass it the subLinks proprety of the corresponding menuLinks object
}
else{//Otherwise set the CSS top property of subMenuEl to 0 (only occurs when u click about)
  subMenuEl.style.top = "0"
  mainEl.innerHTML = "<h1>ABOUT</h1>"
  event.target.classList.remove('active')

}

}

//The submenu needs to be dynamic based on the clicked link. 
// To facilitate that, we will create a helper function called buildSubmenu that does the following:
function buildSubMenu(subLinks){

  //Clear the current contents of subMenuEl.
  subMenuEl.innerHTML = "";
  console.log("Did we get here?")

  //Iterate over the subLinks array
  for( let x of subLinks){
    let anchor = document.createElement('a'); //Create an <a> element.
    anchor.setAttribute('href',x.href);  //Add an href attribute to the <a>, with the value set by the href property of the "link" object.
    anchor.innerText = x.text;  //Set the element's content to the value of the text property of the "link" object.
    subMenuEl.appendChild(anchor); //Append the new element to the subMenuEl.

  }

}
//Attach a delegated 'click' event listener to subMenuEl.
subMenuEl.addEventListener("click",subMenuElHandleClick);


function subMenuElHandleClick(event){
 //The first line of code of the event listener function should call the event object's preventDefault() method.
  event.preventDefault();

  console.log(`Did we get here!`)

  //The second line of code within the function should immediately return if the element clicked was not an <a> element.
  if(event.target.tagName!== "A"){
    return
  }

  console.log(event.target);
  //Next, the event listener should set the CSS top property of subMenuEl to 0.
  subMenuEl.style.top = "0"
  for(let link of topMenuLinks){
    //Remove the active class from each <a> element in topMenuLinks.
    link.classList.remove("active")
  }

  //Update the contents of mainEl, within an <h1>, to the contents of the <a> element clicked within subMenuEl.
  mainEl.innerHTML = `<h1>${event.target.textContent.toUpperCase()}<h1>`
   
}




