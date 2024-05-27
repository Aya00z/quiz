alert("Welcome to Bus reservation");
function checked()
{
    let s=0;
    var username=document.getElementById("user").value;
    var id=document.getElementById("id").value;
    var age=document.getElementById("age").value;
    var num=document.getElementById("num").value;
    let d=0;
    for(let i=0;i<username.length;i++)
    {
        if(username[i]==" ")
        {
          d++;
        }
    }
    if(d==2)
    {
        s++;
    }
    if(id.length==14)
    {
        s++;
    }
    if(age>16)
    {
        s++;
    }
    if(num.length==11)
    {
        s++;
    }
    var data=[{Name:username,Nationalid:id,Age:age,phonenumber:num}];
    if(s==4)
    {
        alert("Saved succ");
            console.debug(data);
    }
    else
    {
        alert("Check our conditions");
    }
}
function show()
{
    document.getElementById("data").style.display="block";
    document.getElementById("place").style.display="none";
    document.getElementById("vk").style.display="none";
}
function showw()
{
    alert("Taken");
}