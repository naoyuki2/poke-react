import { Pokemon } from 'pokenode-ts'

type CardProps = {
    pokemon: Pokemon
}

const Card = ({ pokemon }: CardProps) => {
    return (
        <div className="bg-white shadow p-3 rounded text-center">
            <div>
                <img src={pokemon.sprites.front_default!} className="mx-auto" />
            </div>
            <h3>{pokemon.name}</h3>
            <div>
                <div>タイプ</div>
                {pokemon.types.map((type, i) => (
                    <div key={i}>
                        <span>{type.type.name}</span>
                    </div>
                ))}
            </div>
            <div>
                <div>
                    <p>重さ：{pokemon.weight}</p>
                </div>
                <div>
                    <p>高さ：{pokemon.height}</p>
                </div>
                <div>
                    <p>アビリティ：{pokemon.abilities[0].ability.name}</p>
                </div>
            </div>
        </div>
    )
}

export default Card
