function Compare(event){
    event.preventDefault();
    let x=0;
    var userCred=JSON.parse(localStorage.getItem("Userdata"));
    var email=document.getElementById("email").value;
    var password=document.getElementById("password").value;
    document.getElementById("email").value=null;
    document.getElementById("password").value=null;
    for(let i=0;i<userCred.length;i++)
    {
        if(email==userCred[i].email && password==userCred[i].password){
            x++;
        window.location.href="index.html";
        }
    }    
    if(x==0)
    {
        alert("email or password is wrong");
    }
}