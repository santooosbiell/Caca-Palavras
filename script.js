function clicado(){ 
   
    let btncontexto = event.target

    if(btncontexto.classList[0] == 4 || btncontexto.classList[0] ==9||
        btncontexto.classList[0] ==14|| btncontexto.classList[0]==19 
       ){
            btncontexto.classList.add("certo")
    }
    else if(btncontexto.classList[0] == 7 || btncontexto.classList[0] == 8
        || btncontexto.classList[0]== 9 || btncontexto.classList[0]==10){
            btncontexto.classList.add("certo")
    }
    else if(btncontexto.classList[0] == 2 || btncontexto.classList[0] == 7
            || btncontexto.classList[0] == 12 || btncontexto.classList[0] == 17){
                btncontexto.classList.add("certo")
    }
    else{
        btncontexto.classList.add("errado")
    }
    verificarAcertos()
}

function verificarAcertos(){
    
    let letras = document.querySelectorAll(".certo")

    

}