function limparFormCEP() {
    document.querySelector('#rua').value = ("");
    document.querySelector('#bairro').value = ("");
    document.querySelector('#cidade').value = ("");
    document.querySelector('#uf').value = ("");
    document.querySelector('#ibge').value = ("");
}

function meuCallback(conteudo) {
    if (!("erro" in conteudo)) {
        document.querySelector('#rua').value = (conteudo.logradouro);
        document.querySelector('#bairro').value = (conteudo.bairro);
        document.querySelector('#cidade').value = (conteudo.localidade);
        document.querySelector('#uf').value = (conteudo.uf);
        document.querySelector('#ibge').value = (conteudo.ibge);
    }
    else {
        limparFormCEP();
        window.alert("CEP não encontrado!");
    }
}

function pesquisaCep(valor) {
    //Nova variável "cep" somente com dígitos.
    let cep = valor.replace(/\D/g, '');

    if (cep != "") {
        //Expressão regular para validar o CEP.
        let validaCEP = /^[0-9]{8}$/;

        if (validaCEP.test(cep)) {
            document.querySelector('#rua').value = "...";
            document.querySelector('#bairro').value = "...";
            document.querySelector('#cidade').value = "...";
            document.querySelector('#uf').value = "...";
            document.querySelector('#ibge').value = "...";

            let script = document.createElement('script');
            //Sincroniza com o callback.
            script.src = `https://viacep.com.br/ws/${cep}/json/?callback=meuCallback`
            //Insere script no documento e carrega o conteúdo.
            document.body.appendChild(script);
        }
        else {
            limparFormCEP();
            window.alert("Formato de CEP inválido!");
        }
    }
    else {
        limparFormCEP();
        window.alert("Infomre o CEP para pesquisar!")
    }
}