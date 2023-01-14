const userData =[
    {id:1, name:"jack", profession:"developer", age:20}
];


let addButton=document.getElementById('sbtn');
let messageDiv=document.getElementById('message');
let listOnPage= document.getElementById('list');
let employees=document.getElementById('total');

//nameInput.onchange=checkValidation();
//proffInput.onchange=checkValidation();
//ageInput.onchange=checkValidation();

let nameInput=document.getElementById('name');
let proffInput=document.getElementById('proff');
let ageInput=document.getElementById('age');
function checkValidation() {


    
        let Name=nameInput.value;
        //name.onchange=validate();
    
        let Profession=proffInput.value;
        //proff.onchange=validate();

        let Age=ageInput.value;
         //age.onchange=validate();
         
         //1. checking validation of form-
        if (Name != "" && Profession != "" && Age != "") 
            {
              
              messageDiv.innerText="All fields are successfully filled!";
              messageDiv.style.color="green";
              messageDiv.style.marginLeft="20px";

            //button.removeAttribute("disabled");
                
            //button.onclick=checkValidation();
            }

          else{
            messageDiv.innerText="Error! Required field are empty! Please Fill all the Fields!";
            messageDiv.style.color="red";
            messageDiv.style.marginLeft="20px";
          //console.log("Not filled");
          
          
          //2. Creating new object-
          
            const newObj= {
                id: userData.length,
                name: Name,
                profession: Profession,
                age: Age
         }
         userData.push(newObj);  
         nameInput.value="";
         proffInput.value="";
         ageInput.value="";
         listOnPage.innerHTML="";

         userData.forEach((item)=>{
          let i=0;
          if(item==0)
      {
        employees.innerText="You have 0 Employees.";
        employees.style.color="palewhite";
        employees.style.marginLeft="14px";
        
      }
        
           if(item.id>0)
          {
          
          employees.innerText=" ";

          //3. Creating Displaying the Table of new Employees-
          let table=document.createElement("tr");
          let newbutton=document.createElement("button");
          newbutton.innerText="Delete";
          newbutton.style.height="22px";
          newbutton.style.height="110px";
          table.innerHTML=` <td> ${item.id} &nbsp&nbsp</td>  <td> ${item.nameInput} &nbsp&nbsp</td> <td> ${item.proffInput} &nbsp&nbsp</td> <td> ${item.ageInput} </td>`
          
          table.style.display="block";
          table.style.color="white";
          table.style.borderStyle="solid";
          table.style.margin="30px 20px";
          table.style.borderRadius="7px";
          table.style.height="28px";
          table.style.width="270px";
          table.style.fontsize="20px";

          
          

          newbutton.addEventListener("click",()=>{
            table.innerHTML=""; 
            table.style.display="none";
            delete userData[item.id];
          });
         
          //4. Displaying on Screen-
          listOnPage.append( table );
          listOnPage.append(addButton);
          i++;
                              
         }
         
     });

    }

          }
        
          addButton.addEventListener("click",checkValidation)
