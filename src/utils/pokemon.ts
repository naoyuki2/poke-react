import { NamedAPIResource, NamedAPIResourceList } from 'pokenode-ts'

export const getAllPokemon = (url: string): Promise<NamedAPIResourceList> => {
    return new Promise((resolve) => {
        //Promise(約束)下の処理が終わったらresolve(解決)を返す
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                resolve(data)
            })
    })
}

export const getPokemon = (url: string): Promise<NamedAPIResource> => {
    return new Promise((resolve) => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                resolve(data)
            })
    })
}
