#! /usr/bin/env node
import inquirer from "inquirer";
let convert=await inquirer.prompt([{

    name:"from",
    message:"Select the Currency you want to convert",
    type:"list",
    choices:["RS","USD","RIYAL"]

},
{

    name:"to",
    message:"Select the Currency you want to convert to",
    type:"list",
    choices:["RS","USD","RIYAL"]

},
{

    name:"amount",
    message:"Enter amount",
    type:"number",
}
])
console.log(convert);

