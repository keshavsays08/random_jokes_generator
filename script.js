let jokes = [`Why did the chicken cross the playground?
To get to the other slide!`,

    `Why did the actor fall through the floorboards?
They were going through a stage! `,

    `Why did a scarecrow win a Nobel prize?
He was outstanding in his field!`,

    `Why are peppers the best at archery?
Because they habanero!`,

    `What did the duck say after she bought chapstick?
Put it on my bill!`,

    `Why did an old man fall in a well?
Because he couldn\"t see that well!`,

    `What do you call a fake noodle?
An impasta!`,

    `What did the three-legged dog say when he walked into a saloon?
“I\"m looking for the man who shot my paw!”`,

    `How do you tell the difference between a bull and a cow?
It is either one or the udder!`,

    `What\"s red and smells like blue paint?
Red paint!`,

    `What\"s the difference between a hippo and a Zippo?
One is very heavy, the other is a little lighter!`]

console.log(jokes);
// let get = document.body.getElementsByTagName("div").innerHTML = "Click on generate"
// const jokeContainer = document.getElementById("joke");
// const button = document.getElementById("rbtn");


let index = Math.floor(Math.random() * (10 - 0 + 1) + 0)

console.log(index)

let realjoke = jokes[index]
console.log(realjoke);

const func = () => {
    return realjoke
}

const getBox = document.getElementById("joke1").innerHTML = func();


