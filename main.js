function* myGen () {
    for (let i = 0; i < Infinity;i++){
    yield i;
    }
}

const generatorId = myGen();

console.log(generatorId.next().value);
console.log(generatorId.next().value);
console.log(generatorId.next().value);
console.log(generatorId.next().value);
console.log(generatorId.next().value);
