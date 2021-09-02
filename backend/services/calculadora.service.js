class CalculadoraService {
    executarCalculos(dados){
        if(!dados.numeros){
            dados.numeros = []
        }
        let objectResp = {sum: 0, average: 0}
        for (let i = 0; i < dados.numeros.length; i++){
            objectResp.sum = objectResp.sum + parseInt(dados.numeros[i])
        }
        objectResp.average = objectResp.sum/dados.numeros.length
        return objectResp
    }
}

module.exports = new CalculadoraService