// Write your solution here!

const cats = ["Milo","Otis","Garfield"];

function destructivelyAppendCat(name){
    cats.push(name);
}

function destructivelyPrependCat(name){
    cats.unshift(name);
}

function destructivelyRemoveFirstCat() {
    cats.shift();
}

function destructivelyRemoveLastCat() {
    cats.pop();
}

function appendCat(name){
    const newcats =[...cats, name]; 
    return newcats;
}

function prependCat(name){
    const newprependcats =[name, ...cats,]
    return newprependcats;
}

function removeLastCat() {
    return cats.slice(0,-1);
}


function removeFirstCat() {
    return cats.slice(1);
}