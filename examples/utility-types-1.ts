interface MyUser {
    name: string;
    id: number;
    email?: string;
    phone?: string;
}

type MyUserOptionals = Partial<MyUser>

// interface MyUserOptionals {
//     name?: string;
//     id?: string;
//     email?: string;
// }

const merge = (user: MyUser, overrides: MyUserOptionals): MyUser => {
    return {
        ...user,
        ...overrides,
    }
}

console.log(merge(
    {name: 'Jack', id: 2, email: 'bar'},
    {email: 'buz'},
))

type RequiredMyUser = Required<MyUser>

type JustEmailAndName = Pick<MyUser, 'email'| 'name'>

type UserWithoutID = Omit<MyUser, 'id'>;

const mapById = (users: MyUser[]): Record<MyUser['id'], UserWithoutID> => {
    return users.reduce((a, v) => {
        const {id, ...other} = v

        return {
            ...a,
            [id]: other
        }
    }, {})
}

console.log(mapById(
    [
        {name: 'Jack', id: 2, email: 'hello'},
        {name: 'Mimi', id: 3, email: 'world'},
    ]
))