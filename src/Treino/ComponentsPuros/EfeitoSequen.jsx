let guest = 0;

// CORREÇÃO: Foi adicionado 'export default' para que outros arquivos possam usar este código.
// CORREÇÃO: No React, todo o Componente precisa comecar com a primeira letra maiúscula (Cup ao invés de cup).
export default function Cup() {
    //ruim: alterando uma variável pré-existente
    guest = guest + 1;
    return <h2>{guest} xícaras de chá</h2>
}