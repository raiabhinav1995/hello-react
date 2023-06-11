import React from 'react';
import Person from './Person';
//React also uses concepts of javascript to render list items, it does not introduce it`s own syntax to do so, which is very good.
//We can use map of javascript to create a new array having jsx which could be rendered on the UI    
//Map basically creates a new array by calling callback on each element of array.   
function RenderingList() {
    //For rendering js inside map also we need to use {} else it gets treated as a simple string
//     const x=[15,20,25,111];
//     const template=x.map(ele=><div>{ele*ele}</div>);
//   return (
//     <div>{template}</div>
//   )


//Rendering list of objects, we just do simply map operator and access properties for each elements
const person=[
    {
        id: 1,
        name: 'Abhinav',
        skill: 'Angular'
    },
    {
        id: 2,
        name: 'Shikha',
        skill: 'Hazel Eyes'
    }
]
// const personTemplate=person.map(p=><h2>I am {p.name} and my skill is {p.skill}</h2>);
// return personTemplate;
//But this approach is not recommended as we should be having person as a different component, so we would refactor it, to refactor take the code which is done 
//again and again into new file. Take a person as an input prop when you have it just render and enjoy. It would be like this:
const personTemplate=person.map(p=><Person person={p}/>);
return personTemplate;
}
// This is much better and modular code.

export default RenderingList