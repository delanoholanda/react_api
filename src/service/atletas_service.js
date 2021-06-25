import getAtletasLocal from "./local_service"
import getAtletasRemoto from "./api_service"

const getAtletas = async (pagina, tamanho_pagina, origem = 'local') => {
    
    const atletas = origem === 'local' ? await getAtletasLocal() : await getAtletasRemoto()  
    
    atletas.sort( (atleta, outroAtleta) => outroAtleta.year - atleta.year )

    const inicio = (pagina - 1) * tamanho_pagina
    const fim = pagina * tamanho_pagina 

    return atletas.slice(inicio, fim)
}

export default getAtletas