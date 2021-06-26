import getAtletasLocal from "./local_service"
import getAtletasRemoto from "./api_service"


const getAtletas = async (pagina, limite, origem = 'local') => {

    const atletasList = origem === 'local' ? await getAtletasLocal() : await getAtletasRemoto()

    const atletas = atletasList.filter((atleta) => (
        atleta.athlete !== '' &&
        atleta.athlete !== null))
    atletas.sort((atleta, outroAtleta) => {

        const res = outroAtleta.year - atleta.year
        if (res === 0)
            return atleta.athlete.localeCompare(outroAtleta.athlete)
        return res

    })

    const inicio = pagina - 1
    const fim = inicio + limite

    return [atletas.slice(inicio, fim), Math.ceil(atletas.length / limite)]
}

const getAtleta = async (nome, origem = 'local') => {

    const atletas = origem === 'local' ? await getAtletasLocal() : await getAtletasRemoto()

    return atletas.filter((atleta) => atleta.athlete === nome)
}

export { getAtleta, getAtletas }