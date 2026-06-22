const videos=[

{

title:"Video Viral 1",

url:"https://cdn2.slicidrive.de/tOfX2P7.mp4"

},

{

title:"Video Viral 2",

url:"https://cdn2.sliwtdrive.com/BIYDvcux1.mp4"

}

];

const container=document.getElementById("videoList");

function tampil(data){

container.innerHTML="";

data.forEach(item=>{

container.innerHTML+=`

<div class="card">

<video

controls

preload="metadata"

loading="lazy"

poster="https://picsum.photos/500/800?random=${Math.random()}">

<source src="${item.url}" type="video/mp4">

</video>

<div class="title">

${item.title}

</div>

</div>

`;

});

}

tampil(videos);

document.getElementById("search").addEventListener("keyup",(e)=>{

const keyword=e.target.value.toLowerCase();

const hasil=videos.filter(v=>

v.title.toLowerCase().includes(keyword)

);

tampil(hasil);

});
