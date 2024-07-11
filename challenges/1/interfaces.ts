import housesJSON from './houses.json'

// Declaration
interface House {
    name: string
    planets: string | string[]
}

interface HouseWithID extends House {
    id: number
}

function findHouses(houses: string): HouseWithID[];
function findHouses(houses: string, filter: (house: House) => boolean): HouseWithID[];
function findHouses(houses: House[]): HouseWithID[];
function findHouses(houses: House[], filter: (house: House) => boolean): HouseWithID[];

// Implementation
function findHouses(houses: string | House[], filter?: (house: House) => boolean): HouseWithID[] {
    let counter: number = 0
    let result: HouseWithID[] = []

    if (typeof houses === 'string') {
        houses = JSON.parse(houses)
    }

    (houses as House[]).forEach(house => {
        result.push({
            id: counter++,
            name: house.name,
            planets: house.planets
        })
    })

    return filter ? result.filter(filter) : result
}

// Test
const houses = housesJSON as House[];

console.log(
    findHouses(JSON.stringify(houses), ({name}) => name === "Atreides")
);

console.log(
    findHouses(houses, ({name}) => name === "Harkonnen")
);