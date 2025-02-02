
type MyFlexibleDogInfo = {
    name: string;
    [key: string]: string | number;
}

const dog: MyFlexibleDogInfo = {
    name: 'dog',
    breed: 'Mutt',
    age: 22
}

interface DogInfo {
    name: string;
    age: number;
}

type OptionsFlags<Type> = {
    [Property in keyof Type]: boolean;
}

type DogInfoOptions = OptionsFlags<DogInfo>

type Listeners<T> = {
    [Property in keyof T as `on${Capitalize<string & Property>}Change`]?: (newValue: T[Property]) => void;
} & {
    [Property in keyof T as `on${Capitalize<string & Property>}Delete`]?: () => void;
}

function listenToObject<T>(obj: T, listeners: Listeners<T>): void {
    throw 'Needs to be implemented'
}

const lg: DogInfo = {
    name: 'LG',
    age: 13
}

type DogInfoListeners = Listeners<DogInfo>

listenToObject(lg, {
    onNameChange: (v: string) => {},
    onAgeChange: (v: number) => {},
    onAgeDelete: () => {},
})