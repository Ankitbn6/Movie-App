function storeit(event){
    event.preventDefault();
    let movies=JSON.parse(localStorage.getItem("movies"))|| [];
    let form=document.getElementById("moviestore");
    let name=form.mname.value.trim();
    let url=form.murl.value.trim();
    let date=form.mdate.value.trim();
    let rating=form.mrating.value.trim();
    if(name!==''&& url!==''&& date!=='' && rating!==''){
    let m1=new movie(name,url,date,rating);
    movies.push(m1);    
    localStorage.setItem("movies",JSON.stringify(movies));
    }
    else{
        alert("Please fill all the required field");
    }
    form.mname.value=null;
    form.murl.value=null;
    form.mdate.value=null;
    form.mrating.value=null;
}
function movie(n,u,d,r){
    this.name=n;
    this.url=u;
    this.releaseDate=d;
    this.rating=r;
}