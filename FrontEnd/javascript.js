class GarageScreen{
    metodosGlobais(){
        //Escopo dos objetos principais//
        //movendo o Contador
        let contador = document.querySelector('.contador')
        contador.addEventListener('click', event=>{
            contador.classList.toggle('contadorJs')
            
        })

        //exibindo flutuantes
        let opcoes = document.querySelectorAll('.opcoes')
        for(let i = 0; i<opcoes.length; i++){
            opcoes[i].addEventListener('mouseover', event=>{
                let temp = opcoes[i].childNodes.item(3)
                temp.classList.add('flutuanteJs')
             })
             opcoes[i].addEventListener('mouseout', event=>{
                let temp = opcoes[i].childNodes.item(3)
                temp.classList.remove('flutuanteJs')
             })
        }

            //nav recolher
            let recolher = document.querySelector('.recolher')
            recolher.addEventListener('click',event=>{
                let nav = document.querySelector('.nav')
                
                if(recolher.classList.contains('recolherJs')){
                    recolher.classList.remove('recolherJs')
                    nav.style.left = "0px"
        
                }else{
                    recolher.classList.add('recolherJs')
                    nav.style.left = "-120px"
                }
            })
    }

    darkMode(){
        //modo escuro 
        let botaoMode = document.querySelector('.botao')
        botaoMode.addEventListener('click',event=>{
        let claro = document.querySelector('.claro')
        let escuro = document.querySelector('.escuro')
        let sol = document.querySelector('.imgSol')
        let lua = document.querySelector('.imgLua')
        let linha = document.querySelector('.linha')
        let nav = document.querySelector('.nav')
        let opcoes = document.querySelectorAll('.opcoes')
        //removíveis
        let imgPraia = document.querySelector('.imgPraia')
        let banheira = document.querySelectorAll('.imgBanheira')
        //Fim removíveis
            if(botaoMode.style.left != "6px" ){
                botaoMode.style.left = "6px"
                claro.style.display = "none"
                escuro.style.display = "block"
                sol.style.display = "none"
                lua.style.display = "block"
                botaoMode.classList.add('botaoDark')
                linha.classList.add('linhaDark')
                imgPraia.classList.add('imgPraiaDark')
                document.body.classList.add('bodyDark')
                nav.classList.add('navDark')
                //removíveis
                for(let k in opcoes){
                    opcoes[k].classList.add('opcoesDark')
                }
                banheira.classList.add('banheiraDark')
                //fim removíveis
            }
            else{
                botaoMode.style.left = "100px"
                claro.style.display = "block"
                escuro.style.display = "none"
                sol.style.display = "block"
                lua.style.display = "none"
                botaoMode.classList.remove('botaoDark')
                linha.classList.remove('linhaDark')
                imgPraia.classList.remove('imgPraiaDark')
                document.body.classList.remove('bodyDark')
                nav.classList.remove('navDark')
                for(let k in opcoes){
                    opcoes[k].classList.remove('opcoesDark')
                }
            }
        })
    }
}

const garageScreen = new GarageScreen()
garageScreen.metodosGlobais()
garageScreen.darkMode()