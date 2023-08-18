function mysubmit(event){
    event.preventDefault();
    console.log("submitted");
    var Userdata=JSON.parse(localStorage.getItem("Userdata"))||[];
    var form=document.getElementById("form");
    var name1=form.name;
    var contact=form.contact;
    var email=form.email;
    var password=form.password;
    var obj=new logincred(name1.value,contact.value,email.value,password.value);
    Userdata.push(obj);
    localStorage.setItem("Userdata",JSON.stringify(Userdata));
    name1.value=null;
    contact.value=null;
    email.value=null;
    password.value=null;

}
function logincred(n,c,e,p){
    this.name=n;
    this.contact=c;
    this.email=e;
    this.password=p;
}