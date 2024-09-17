// console.log("tessst");

let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];

let extensions = ['.es','.uy','.ve','.ar','.co','.pe','.it','.mx','.br','.py'];

let dominios = [];

pronoun.forEach(start => {
    adj.forEach(mid => {
        noun.forEach(last => {
            extensions.forEach(ex => {
                let domain = `${start}${mid}${last}${ex}`;
            console.log(domain);
            dominios.push(domain);
            });
        });
    });
});

console.log(dominios);