class GarageScreen{
    metodosGlobais(){
        //Escopo dos objetos principais//
        //movendo o Contador
        let contador = document.querySelector('.contador')
        contador.addEventListener('click', event=>{
            contador.classList.toggle('contadorJs')
            
        })
        contador.addEventListener('touchstart', event=>{
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
        let card = document.querySelectorAll('.card')
        let imgPraia = document.querySelector('.imgPraia')
        let svgCor = document.querySelectorAll('.svgCor')
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
                let j = 0
                while(j < opcoes.length){
                    opcoes[j].classList.add('opcoesDark') 
                    j++
                }

                let x = 0
                while(x < svgCor.length){
                    svgCor[x].classList.add('svgCorDark')  
                    x++
                }

                for(let k in card){
                    card[k].classList.add('cardDark')
                    card[k].style.color = "white"
                }
    
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
                //removíveis

                let j = 0
                while(j < opcoes.length){
                    opcoes[j].classList.remove('opcoesDark') 
                    j++
                }

                let x = 0
                while(x < svgCor.length){
                    svgCor[x].classList.remove('svgCorDark') 
                    x++ 
                }
                
                for(let k in card){
                    card[k].classList.remove('cardDark')
                    card[k].style.color = "black"
                }
                //fim removíveis
            }
        })
    }
}

const garageScreen = new GarageScreen()
garageScreen.metodosGlobais()
garageScreen.darkMode()