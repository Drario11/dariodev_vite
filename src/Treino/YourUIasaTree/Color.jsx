export default function Color({ value }) {
    // CORREÇÃO: Uma tag <div> vazia (sem texto dentro) não tem altura nem largura!
    // O React aplicou a cor de fundo com sucesso, mas como a div tem tamanho zero, ela fica invisível.
    // Solução: Adicionar width (largura) e height (altura) no style para ela virar um quadrado.
    return <div className="colorbox" style={{ backgroundColor: value, width: '100px', height: '100px', margin: '10px auto' }} />
}
