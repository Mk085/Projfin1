function select(){ 
    var opcao = Number(prompt("Escolha, 1 , 2, 3"));
    while (opcao ===1 || opcao ===2 || opcao ===3){

        if (opcao ===1) {
        return window.location.href = "./humanpart3consequence1.html"

        }
            
        else if (opcao ===2) {
            return window.location.href = "./humanparte3consequence2.html"
        
        }
        else if (opcao ===3) {
            return window.location.href = "./Humanend.html"

        }
        else { alert ("Escolha uma das opções existentes")
        }
    } }
    