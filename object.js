const person={
     name:"abc",
    age:18,
    entertainment:['place','movies'],
    address:{
        state:'KAR',
        location:'Blr'
    }
}
// console.log(person.entertainment)
// console.log(person.address.state)
const{name,age,address:
    {
        state
    }
}=person
console.log(state)

const user=[
    {
        id:1,
        state:'KAR',
        location:'Blr',
        text:'john',
        add:'hsn'
    },
    {
        id:1,
        state:'KAR',
        location:'Blr',
        text:'john',
        add:'hsn'
    },
]
console.log(user)