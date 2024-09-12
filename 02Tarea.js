const consonantes=['B', 'C', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'Ñ', 'P', 'Q', 'R', 'S', 'T', 'V', 'W', 'X', 'Y', 'Z', 'b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'ñ', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];

const caracteresEspeciales = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '-', '=', '{', '}', '[', ']', '|', ';', ':', '"', "'", '<', '>', ',', '.', '/', '?', '`', '~'];

const numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

document.getElementById("generator-btn").addEventListener("click",function(){
    let btn=document.getElementById("password-size")
    let btnValue=btn.value

    if(btnValue>=6){
        let newPassword=''
        for (let i = 0; i < btnValue; i++) {
            let random=Math.floor(Math.random() * 3)
            switch (random) {
                case 0:
                    newPassword=newPassword+=consonantes[Math.floor(Math.random() * consonantes.length)]
                    break;

                case 1:
                    newPassword=newPassword+=caracteresEspeciales[Math.floor(Math.random() * caracteresEspeciales.length)]
                    break;
                
                case 2:
                    newPassword=newPassword+=numeros[Math.floor(Math.random() * numeros.length)]
                    break;
            }
            
        }
        document.getElementById("password").innerText=`${newPassword}`
    }

    else{
        document.getElementById("password").innerText=`La contraseña debe ser mayor o igual a 6 caracteres`
        btn.value=6
        btn.focus()
    }




})
