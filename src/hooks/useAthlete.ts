interface Athlete {
    athlete: string,
    age: number,
    country: string,
    year: number,
    date: Date,
    sport: string
    gold: number,
    silver: number,
    bronze:number,
    total:number
}

export default function useAthetes (pagelimit: number) {
    
    const [athletes, setAthletes] = useState()
    
    function fetchAthletes (page: number) {
        const virtualPage = ((page -1 ) * pagelimit) <= 0 
        ? 0 
        : ((page -1 ) * pagelimit)

        fetch('https://www.ag-grid.com/example-assets/olympic-winners.json')
    }

    return {

    }
}

function useState(): [any, any] {
    throw new Error("Function not implemented.")
}
