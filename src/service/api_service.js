import axios from "axios"

const getAtletas = async () => { 
    const response = await axios.get('https://www.ag-grid.com/example-assets/olympic-winners.json')
    return response.data
}

export default getAtletas