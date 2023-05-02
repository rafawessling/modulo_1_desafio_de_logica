const solucao = lista => {
    if (lista.length <= 1000) {
        const participantes = lista.filter(idade => {
            return idade >= 18;
        });
        let menorIdade = participantes[0];

        if (participantes.length !== 0) {
            for (let item of participantes) {
                if (item < menorIdade) {
                    menorIdade = item;
                }
            }
            console.log(menorIdade);
        } else {
            console.log('CRESCA E APARECA');
        }
    }
};

solucao([16, 20, 30, 18, 27]);
