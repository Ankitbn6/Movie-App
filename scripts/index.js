data=[
    //pushpa
    "https://wallpapercave.com/wp/wp10328784.jpg",
    //lagaan
    "https://hippy.in/wp-content/uploads/2014/06/lagaan-bollywood-movie-poster.jpg",
    //ramsetu
    "https://stat5.bollywoodhungama.in/wp-content/uploads/2020/11/Ram-Setu-1.jpeg",
    //rrr
    "https://www.themoviedb.org/t/p/original/hmDNYJkVdooSTNej2AnWV0nbH3q.jpg",
    //rustom
    "https://i.pinimg.com/736x/64/ca/51/64ca51adcb7d04ea13cf0f60f5115203--movies-of--news-blog.jpg",
    //kaala
    "https://static-koimoi.akamaized.net/wp-content/new-galleries/2018/02/rajinikanths-kaala-fierce-poster-will-definetly-make-curious-movie-1.jpg",
    //102 not out
    "https://m.media-amazon.com/images/M/MV5BZDRlM2Q3NTAtY2I3My00ZTNmLWE0YzAtMTA1YjA4MzcyZTQzXkEyXkFqcGdeQXVyNjY1MTg4Mzc@._V1_FMjpg_UX1000_.jpg",
    //war
    "https://myhotposters.com/cdn/shop/products/mL3593_1024x1024.jpg?v=1571445732",
    //kgf2
    "https://pbs.twimg.com/media/FtolvWUaMAAu2d1?format=jpg&name=large",
    //rocketry
    "https://images.fandango.com/ImageRenderer/820/0/redesign/static/img/default_poster.png/0/images/masterrepository/fandango/228177/rocketry-POSTER1-30x40.jpg",
    
]
data1=[
    "https://i.ytimg.com/vi/_e9y729xeck/maxresdefault.jpg",
    "https://imgnew.outlookindia.com/uploadimage/library/16_9/16_9_5/IMAGE_1642786543.jpg",
    "https://gumlet.assettype.com/barandbench%2F2022-10%2Fc0ad6cf3-7b83-418d-a624-44bbf583ef95%2F25.jpg?auto=format%2Ccompress&fit=max&w=400&dpr=2.6",
    "https://english.cdn.zeenews.com/sites/default/files/2021/12/06/993440-untitled-design-2021-12-06t162943.944.jpg",
    "https://static-koimoi.akamaized.net/wp-content/new-galleries/2016/03/rustom-movie-posters.jpg",
    "https://www.wallpaperflare.com/static/89/717/68/rajnikanth-kaala-kaala-karikaalan-tamil-wallpaper.jpg",
    "https://static.spotboye.com/uploads/102-Not-out-Trailer_637c4f57a8c72e99a314dd9bd317c89e_thumbnail.jpg",
    "https://pbs.twimg.com/media/EC81VxRU0AA0idw.jpg",
    "https://wallpapers.com/images/featured/uvwzff0j1u9i4otf.jpg",
    "https://i0.wp.com/sszeemedia.com/wp-content/uploads/2022/06/maxresdefault-1.jpg?resize=1200%2C666&ssl=1",
]
let j=0;
let i=0;    
var box=document.getElementById('slide1');
var box1=document.getElementById('slide2');
var image=document.createElement("img");
var image1=document.createElement("img");
setInterval(function(){
   if(i==data.length){
    i=0;
   }
   box.innerHTML=null;
   image.src=data[i];
   box.append(image);
   i++;
},3000)
setInterval(function(){
    if(j==data1.length){
     j=0;
    }
    box1.innerHTML=null;
    image1.src=data1[j];
    box1.append(image1);
    j++;
 },3000)

var moviesData=JSON.parse(localStorage.getItem("movies"));
show();
function l_h(x,y){
    if(parseInt(x.rating)<parseInt(y.rating))
    return -1;
    else if(parseInt(x.rating)>parseInt(y.rating))
    return 1;
    else
    return 0;

}
function h_l(x,y){
    if(parseInt(x.rating)<parseInt(y.rating))
    return 1;
    else if(parseInt(x.rating)>parseInt(y.rating))
    return -1;
    else
    return 0;

}

function lowtohigh(){
    document.getElementById("movies").innerHTML=null;
    moviesData=moviesData.sort(l_h);
    localStorage.setItem("movies",JSON.stringify(moviesData));
    show();
}
function hightolow(){
    document.getElementById("movies").innerHTML=null;
    moviesData=moviesData.sort(h_l);
    localStorage.setItem("movies",JSON.stringify(moviesData));
    show();
}
function show(){
    moviesData=JSON.parse(localStorage.getItem("movies"));
    moviesData.map(function(ele,index){
    let movies=document.getElementById("movies");
    let showArea=document.createElement("div");
    showArea.setAttribute("class","showarea")
    let poster=document.createElement('img');
    poster.src=ele.url;
    let details=document.createElement('div');
    details.setAttribute("class","details");
    let name=document.createElement('div');
    name.setAttribute("class","movieName")
    name.textContent=ele.name;
    let rating_release=document.createElement('div');
    rating_release.setAttribute("class","rateDate");
    let rating=document.createElement('div');
    rating.textContent="Imdb Rating: "+ele.rating;
    let release=document.createElement('div');
    release.textContent="Release Date: "+ele.releaseDate;
    rating_release.append(rating,release);
    details.append(name,rating_release);

    showArea.append(poster,details);
    movies.append(showArea);
    if(ele.rating==undefined){
        removeItem(ele,index)
    }
})
}

function addmovie(){
    window.location.href="Add.html"
}
function removeItem(ele,index){
    moviesData.splice(index,1);
    localStorage.setItem("movies",JSON.stringify(moviesData));
}






// function storeit(event){
//     event.preventDefault();
//     let movies=JSON.parse(localStorage.getItem("movies"))|| [];
//     let form=document.getElementById("moviestore");
//     let name=form.mname;
//     let url=form.murl;
//     let date=form.mdate;
//     let rating=form.mrating;
//     let m1=new movie(name.value,url.value,date.value,rating.value);
//     movies.push(m1);
//     localStorage.setItem("movies",JSON.stringify(movies));
//     name.value=null;
//     url.value=null;
//     date.value=null;
//     rating.value=null;
// }
// function movie(n,u,d,r){
//     this.name=n;
//     this.url=u;
//     this.releaseDate=d;
//     this.rating=r;
// }