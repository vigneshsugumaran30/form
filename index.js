const name=document.querySelector('#name');
const email=document.querySelector('#email');
const age=document.querySelector('#age');
const contact=document.querySelector('#contact');
const submitbtn=document.querySelector('button');
const tbody=document.querySelector('tbody');

const userdetails=[];

submitbtn.addEventListener("click",()=>
{
    if(!name.value && !email.value && !age.value && !contact.value)
    {
        alert("please enter the details properly");
        return;
    }
    const userdata=
    {
        name:name.value,
        email:email.value,
        age:age.value,
        contact:contact.value,
    }
    userdetails.push(userdata);
    name.value="";
    email.value="";
    age.value="";
    contact.value="";
    displaydata();
})
function displaydata()
{
    tbody.innerHTML="";
    userdetails.forEach((user)=>
    {
        const tr=document.createElement("tr");
        const nameData=document.createElement("td");
        const emailData=document.createElement("td");
        const ageData=document.createElement("td");
        const contactData=document.createElement("td");

        nameData.innerText=user.name;
        emailData.innerText=user.email;
        ageData.innerText=user.age;
        contactData.innerText=user.contact;

        tr.append(nameData);
        tr.append(emailData);
        tr.append(ageData);
        tr.append(contactData);
        tbody.append(tr);
    })
   
}
