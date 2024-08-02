let string="";
// let backspace=document.querySelector(".backspace");
let input=document.querySelector(".input-box")
let buttons=document.querySelectorAll('.btn');
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click', (event)=>{
        if(event.target.innerHTML=="="){
            string=eval(string);
            document.querySelector('input').value=string;
        }
        else if(event.target.innerHTML=="C"){
            string="";
            input.value=string;
        }
        else if(event.target.innerHTML=="DEL"){
            string=string.substring(0, string.length-1);
           input.value=string;
        }
        else{      
        // console.log(event.target);
        string=string+event.target.innerHTML;
        input.value=string;
}
    })
})