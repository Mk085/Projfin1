function select() { 
    var opcao = Number(prompt("Escolha, 1-Alien , 2-Predator , 3-human"));
    while (opcao ===1 || opcao ===2 || opcao ===3){

        if (opcao ===1) {
        return window.location.href = "./Alienhistory/Alienpart1.html"

        }
            
        else if (opcao ===2) {
            return window.location.href = "./Predatorhistory/Predatorpart1.html"
        }

        else if (opcao ===3) {
            return window.location.href = "./Humanhistory/Humanpart1.html"

        }
        else { alert ("Escolha uma das opções existentes")
        }
    } }
     
function select() {
       window.location.href = "./Alienhistory/Alienpart1.html"
}