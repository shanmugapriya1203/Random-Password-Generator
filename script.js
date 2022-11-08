//Get a Output input
const outputElement=document.querySelector("#output");
//Get a button
const btnCopy=document.querySelector("#btn-copy")
//Get a password length element
const passwordLengthElemnt=document.querySelector("#length");
const numberElement=document.querySelector("#number");
const capitalElement=document.querySelector("#capital");
const smallElement=document.querySelector("#small");
const symbolElement=document.querySelector("#symbol");
const frm=document.querySelector("#frm");






//Button click to copy password
 btnCopy.addEventListener('click',async()=>{
     const pass=outputElement.value;

    // if password typed in input box it will copy in default function for clipboard  in google
    // so we use asyn await function and a navigator line to navigating to clipn=board
    if(pass){
        await navigator.clipboard.writeText(pass);
        alert("Password Copied to Clipboard")

    }
    else{
        alert("There is no password to copy in clickboard")
    }
 });

 /* ASCII---- American standard code for information interchange
 65-90   -A_to Z
 97-122  - a to z
 48-57   -0 to 9
 space -   32
 48-57 - Numbers */

 function generateRandomChar(min,max)
 {
    // if we give min 65 max 90 it difference is 25 but we nees 26 alphabetic letters  so we use +1
const limit=(max-min)+1 ; 
return String.fromCharCode(Math.floor(Math.random()*limit)+min);  // It generate randorm number  ad It return ascii value for number 
 }

 function capitalValue(){
    return generateRandomChar(65,90)
 }

 function smallValue(){
    return generateRandomChar(97,122);
 }

 function numberValue(){
    return generateRandomChar(48,57);
 }

 function symbolValue(){
    const symbols="~!@#$%^&*()_+|}{><./";
    return symbols[Math.floor(Math.random()*symbols.length)]; //Get a random symbols from above symbols
 }


 const functionArray=[
    {
        element:numberElement,
        fun: numberValue
    },
    {
        element:capitalElement,
        fun:capitalValue
    },
    {
        element:smallElement,
        fun:smallValue
    },
    {
        element:symbolElement,
        fun:symbolValue
    }
 ];
//In form we use submit button 
 frm.addEventListener('submit',(e)=>{
    e.preventDefault(); //It doesnt go to another page so we use preventdefault
  
    //check password length value
    const len =passwordLengthElemnt.value;

    let generatedPassword="";
//check which checkbox is selected

    const funarray=functionArray.filter(({element})=>element.checked);
   //run passwordlength length
   
    for(let i=0;i<len;i++){
        const index=Math.floor(Math.random()*funarray.length);
        const letter=funarray[index].fun();
        generatedPassword+=letter;
    }
    outputElement.value=generatedPassword;

 });

