var arr=[
    {name:"Courses",img:"Course.gif",para:"My very first course on how <br> to build healthy habits for life <br> is enrolling on Slow Growth <br> Academy.",btn:"Slow Growth"},
    {name:"Podcast",img:"Podcast.gif",para:"Learn how to make a full-time<br>living as an entrepreneur or <br> content creator with my <br>podcast.",btn:"The Ground Up Show"},
    {name:"Secret Podcast",img:"Course.gif",para:"Shhh… I have a secret <br> podcast exclusively for <br>people who support me on <br>Patreon.",btn:"Patreon"}
    
]
var clutter="";
arr.forEach(function(elem){
    clutter +=` <div class="blue">
    <img src="${elem.img}" alt="">
    <h1>${elem.name}</h1>
    <p>${elem.para}</p>
    <button class="${elem.btn}">${elem.btn}</button>

 </div>`
})

document.querySelector(".two").innerHTML=clutter