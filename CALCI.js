let string = "";
        let buttons = document.querySelectorAll('.numbtn');
        Array.from(buttons).forEach((button)=>{
            button.addEventListener('click', (e)=>{
                if(e.target.innerHTML == '='){
                    string = eval(string);
                    document.querySelector('input').value = string;
                    string=""
                }
                else if(e.target.innerHTML == 'C'){
                    string = ""
                    document.querySelector('input').value = string;
                }
                else if(e.target.innerHTML == 'clr'){
                    string = string.slice(0,  -1);
                    document.querySelector('input').value = string;
                }
                else{ 
                    string = string + e.target.innerHTML;
                    document.querySelector('input').value = string;
                  }
            })
        })