// Task:- 

// Create a form using form tags and set preventdefault include short circuit operator, stoppropagation and stopimmediatepropagation!!

var form = document.createElement("form")
// form.append("body")
document.body.append(form)

var emailLabel = document.createElement("label")
emailLabel.innerText = "E - Mail : "
document.body.append(emailLabel)

var emailInput = document.createElement("input")
emailInput.type="email";
document.body.appendChild(emailInput);

var LineBreak = document.createElement("br")
document.body.append(LineBreak)
var LineBreak1 = document.createElement("br")
document.body.append(LineBreak1)

var passLabel = document.createElement("label")
passLabel.innerText = "Password : "
document.body.append(passLabel)


var pass = document.createElement("input")
pass.setAttribute("type","password")
document.body.appendChild(pass)

var LineBreak2 = document.createElement("br")
document.body.append(LineBreak2)
var LineBreak3 = document.createElement("br")
document.body.append(LineBreak3)


var submit = document.createElement("button")
submit.setAttribute("type","submit")
// submit.setAttribute("value","Submit")
submit.innerText="Submit"

var emailpara = document.createElement("p")
var passpara = document.createElement("p")

document.body.appendChild(submit)

form.addEventListener("submit",(e)=>{
    e.preventdefault()
    console.log("Submitted");
})

submit.addEventListener("click",()=>{
    // console.log(emailInput.value);
    emailpara.innerText = emailInput.value
    document.body.appendChild(emailpara)
    
    // console.log(pass.value);
    passpara.innerText = pass.value
    document.body.appendChild(passpara)
})

// ------------------------------------------------------------
var GP = document.getElementById("GP")
GP.addEventListener("click",(ele)=>{
    ele.stopPropagation()
    console.log("GrandParent");
})

var P = document.getElementById("P")
P.addEventListener("click",(ele)=>{
    ele.stopPropagation()
    console.log("Parent");
})

var C = document.getElementById("C")
C.addEventListener("click",(ele)=>{
    ele.stopPropagation()
    console.log("Child");
})

C.addEventListener("click",(e)=>{
    e.stopPropagation()
    console.log("Child - 2");
})

C.addEventListener("click",(e)=>{
    e.stopImmediatePropagation()
    console.log("Child - 3");
})