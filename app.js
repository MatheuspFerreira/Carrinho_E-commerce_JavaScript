
   
   const Carrinho = [];

 
    // Adicionar produto e / ou quantidade

    const addQuantEProduto = (x) => {
        const exibirCarrinho = document.getElementById('meu-carrinho');
        let nome = document.querySelectorAll('.nome-produto');
        let preço = document.querySelectorAll('.valor-produto') ;
        let id = document.querySelectorAll('.id-produto');

        
        // o X representa qual o indíce dentro do querySelecetorAll estamos chamando
        nome = nome[x].textContent;
        id = id[x].textContent;
        preço =  preço[x].textContent;
        let quantidade = 1;
        total = preço*quantidade;
        

        console.log(Carrinho);
        
        //Verifica se o ID do produto já existe no Carrinho

        const verificaID = Carrinho.some((Objct) => {
            
            return Objct.id === id;
        })

         //Verifica a condição, se true ele vai ADD + 1 quantidade no produto clicado, se false ele faz o push do novo produto no Carrinho.

        if(verificaID === true) {

            //Verifica qual o indice do ID que foi chamado para add corretamente a quantidade

            const verificaIndice = Carrinho.findIndex((currentId) => {
                
                return currentId.id === id;
            });
            
            // Adiciona + 1 unidade do produto no Carrinho

            quantidade = Carrinho[verificaIndice].quantidade;
            quantidade++;
            total = preço*quantidade;
            console.log(quantidade)
            
            
           // Atualiza o texto que exibe o total e a quantidade no carrinho

            let atualizaQuantidade = document.querySelector(`.quantidade${x}`);
            let atualizaTotal = document.querySelector(`.total${x}`);
            atualizaQuantidade.textContent = `Quantidade: ${quantidade}`;
            atualizaTotal.textContent = `Total: R$ ${total}`;
            Carrinho[verificaIndice].quantidade = quantidade;
            Carrinho[verificaIndice].total = total;

            let totalCarrinho = document.getElementById('totalaPagar')
            let somaTotal = Carrinho.map((currentObject) => currentObject.total).reduce((parametro, total) => parametro + total);
            totalCarrinho.textContent = `${somaTotal}`

            let TotalProdutos = document.getElementById('totalProdutos')
            let somaQuantidade = Carrinho.map((currentObject) => currentObject.quantidade).reduce((parametro, total) => parametro + total);
            TotalProdutos.textContent = `${somaQuantidade}`

            

            console.log(Carrinho);
               
            
        }else if(Carrinho.length == 0) {  // Verifica se o Carrinho está vazio
            exibirCarrinho.textContent =""
            quantidade;
            total = preço*quantidade;
            Carrinho.push({id,nome,preço,quantidade,total});
            
            let totalCarrinho = document.getElementById('totalaPagar')
            let somaTotal = Carrinho.map((currentObject) => currentObject.total).reduce((parametro, total) => parametro + total);
            totalCarrinho.textContent = `${somaTotal}`

            let TotalProdutos = document.getElementById('totalProdutos')
            let somaQuantidade = Carrinho.map((currentObject) => currentObject.quantidade).reduce((parametro, total) => parametro + total);
            TotalProdutos.textContent = `${somaQuantidade}`

             
            exibirCarrinho.innerHTML +=`
            
            <section class = "section-Carrinho${x}">

                <p> ID: ${id}</p>
                <p> Nome: ${nome}</p><hr>
                <p> Preço: R$ ${preço}</p><hr>
                <p class = "quantidade${x}"> Quantidade: ${quantidade}</p><hr>
                <p class = "total${x}"> Total: R$ ${total = preço*quantidade}</p>

            </section>
            `
            console.log(Carrinho);
            

        }else {
            
            quantidade;
            total = preço*quantidade;
            Carrinho.push({id,nome,preço,quantidade,total});
            let totalCarrinho = document.getElementById('totalaPagar')
            let somaTotal = Carrinho.map((currentObject) => currentObject.total).reduce((parametro, total) => parametro + total);
            totalCarrinho.textContent = `${somaTotal}`

            let TotalProdutos = document.getElementById('totalProdutos')
            let somaQuantidade = Carrinho.map((currentObject) => currentObject.quantidade).reduce((parametro, total) => parametro + total);
            TotalProdutos.textContent = `${somaQuantidade}`
            
            exibirCarrinho.innerHTML +=`
            
            <section class = "section-Carrinho${x}">

                <p> ID: ${id}</p>
                <p> Nome: ${nome}</p><hr>
                <p> Preço: R$ ${preço}</p><hr>
                <p class = "quantidade${x}"> Quantidade: ${quantidade}</p><hr>
                <p class = "total${x}"> Total: R$ ${total = preço*quantidade}</p>

            </section>
            `
            console.log(Carrinho);

        }

    }

    
    
    
    // Remover produto e / ou quantidade

        const removerQuantEProduto = (x) => {
        const exibirCarrinho = document.getElementById('meu-carrinho');
        let nome = document.querySelectorAll('.nome-produto');
        let preço = document.querySelectorAll('.valor-produto') ;
        let id = document.querySelectorAll('.id-produto');
        
        // o X representa qual o indíce dentro do querySelecetorAll estamos chamando

        nome = nome[x].textContent;
        id = id[x].textContent;
        preço =  preço[x].textContent;
        
        
        
        //Verifica se o ID do produto já existe no Carrinho

        const verificaID = Carrinho.some((Objct) => {
            
            return Objct.id === id;
        })

        //Verifica qual o indice do ID que foi chamado para add corretamente a quantidade

        const verificaIndice = Carrinho.findIndex((currentId) => {
                
            return currentId.id === id;
        });
            quantidade = Carrinho[verificaIndice].quantidade;
            console.log(Carrinho[verificaIndice].quantidade)
         //Verifica a condição, se true ele vai Remover 01 unidade no produto clicado, se false ele faz o push do novo produto no Carrinho.

        if(Carrinho[verificaIndice].quantidade > 1 ) {

            
            
            // Remove  1 unidade do produto no Carrinho

            
            quantidade--;
            total = preço*quantidade;
            console.log(quantidade)
            
            
           // Atualiza o texto que exibe o total e a quantidade no carrinho

            let atualizaQuantidade = document.querySelector(`.quantidade${x}`);
            let atualizaTotal = document.querySelector(`.total${x}`);
            atualizaQuantidade.textContent = `Quantidade: ${quantidade}`;
            atualizaTotal.textContent = `Total: R$ ${total}`;
            
            Carrinho[verificaIndice].quantidade = quantidade;
            Carrinho[verificaIndice].total = total;
            
            let totalCarrinho = document.getElementById('totalaPagar')
            let somaTotal = Carrinho.map((currentObject) => currentObject.total).reduce((parametro, total) => parametro + total);
            totalCarrinho.textContent = `${somaTotal}`

            let TotalProdutos = document.getElementById('totalProdutos')
            let somaQuantidade = Carrinho.map((currentObject) => currentObject.quantidade).reduce((parametro, total) => parametro + total);
            TotalProdutos.textContent = `${somaQuantidade}`
            

            console.log(Carrinho);
               
            
        }else if(Carrinho[verificaIndice].quantidade = 1) {  // Verifica se a quantidade desse produto é igual 1, se for ele remove do carrinho
            console.log(Carrinho[verificaIndice].quantidade)
            
            
            
            let totalCarrinho = document.getElementById('totalaPagar').textContent;
        
            const novoTotal = totalCarrinho - Carrinho[verificaIndice].total;
            
            document.getElementById('totalaPagar').textContent = `${novoTotal}`
            
            
            console.log(totalCarrinho)

            let totalProdutos = document.getElementById('totalProdutos').textContent;
            const novaQuantidade = totalProdutos - Carrinho[verificaIndice].quantidade;
            document.getElementById('totalProdutos').textContent = `${novaQuantidade}`
            

            
            Carrinho.splice(verificaIndice, 1);
            

            limpaTextoCarrinho = document.querySelector(`.section-Carrinho${x}`)
            limpaTextoCarrinho.remove();
            
            console.log(x)
            console.log(Carrinho);
            
        }


    }


    

    // EVENTO PARA ADICIONAR PRODUTO

    const addCarrinho = document.querySelectorAll('.btn-carrinho');   
    
    for (i = 0; i < addCarrinho.length; i++) {
        
        addCarrinho[i].index = i;

        addCarrinho[i].addEventListener("click",(e) => {

            const indiceClicado = e.target.index; // Revela qual indíce do botão que foi clicado.

            addQuantEProduto(indiceClicado);
            

        });
        
       
    }
    
    

    // EVENTO PARA  REMOVER PRODUTO

    const removerCarrinho = document.querySelectorAll('.btn-remover');   
    
    for (i = 0; i < addCarrinho.length; i++) {
        
        removerCarrinho[i].index = i;

        removerCarrinho[i].addEventListener("click",(e) => {

            const indiceClicado = e.target.index; // Revela qual indíce do botão que foi clicado.

            removerQuantEProduto(indiceClicado);
            

        });
        
       
    }
    
    
    
    
    // EVENTO PARA LIMPAR CARRINHO

    const limparCarrinho = document.querySelector('.btn-limpar-carrinho');
    const exibirCarrinho = document.getElementById('meu-carrinho');

    
    
    limparCarrinho.addEventListener("click", function (){
       
        let totalCarrinho = document.getElementById('totalaPagar')
        totalCarrinho.textContent =`0,00`
        
        let TotalProdutos = document.getElementById('totalProdutos')
        TotalProdutos.textContent = `0`

        
        
        for (i=0; i <= Carrinho.length; i++) {
            Carrinho.splice(i);
            console.log(Carrinho);
            
             
    
        }
        exibirCarrinho.textContent ="Seu carrinho está vazio."
        alert("Seu carrinho está vazio !");
        
         
    })







