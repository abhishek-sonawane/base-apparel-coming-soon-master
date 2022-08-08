let input = document.querySelector('#mail')

const submitBtn = document.getElementById('btn')

submitBtn.addEventListener('click',validity)

const valid = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

function validity(){
    console.log(input.value)
    if(input.value.match(valid)){
        alert('valid email')
        input.value=''
    }

    else{
        document.querySelectorAll('.error').forEach((item)=>item.style.display = 'block')
        alert('f')
        input.value=''
       const timeout =  setTimeout(() => {
            document.querySelectorAll('.error').forEach((item)=>item.style.display = 'none')
        }, 5000);
        
    }
   
}