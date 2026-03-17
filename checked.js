const sub=document.getElementById("check");
const phone=document.getElementById("phone");

const google=document.getElementById("google");
const  paytem=document.getElementById("paytem");
const p1=document.getElementById("p1");
const p2=document.getElementById("p2");
const bu=document.getElementById("bu");


bu.onclick=function()
{ if(sub.checked)
    p1.textContent="Youre subscribed";
    else{
        p1.textContent="Youre Not subscribed ! please subbbb!";
    }
    if(phone.checked)
    {
        p2.textContent="Youre Using phone pay ! thankyou";
    }
    else if(google.checked)
    {
        p2.textContent="Youre Using google pay! thankyou";
    }
    else if(paytem.checked)
    {
        p2.textContent="Youre Using paytem ! thankyou";
    }
    else{
        p2.textContent="please select one of the app to send mony ! its not possible to send with out that "
    }
}



