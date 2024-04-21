#! /usr/bin/env node
import inquirer from "inquirer";
let exchange:any ={
    USD:1,
    EUR:0.91,
    GBP:0.76,
    PKR:280,
    INR:74.57,
    RIYAL:3.75
}
let user_answer=await inquirer.prompt([{

    name:"from",
    message:"Select the Currency you want to convert",
    type:"list",
    choices:["PKR","USD","RIYAL","EUR","INR","GBP"]
    
},
{
    
    name:"to",
    message:"Select the Currency you want to convert to",
    type:"list",
    choices:["PKR","USD","RIYAL","EUR","INR","GBP"]

},
{

    name:"amount",
    message:"Enter amount",
    type:"number",
}
])
let from_amount=exchange[user_answer.from];
let to_amount=exchange[user_answer.to];
let amount=user_answer.amount;
let result=(amount/from_amount)*to_amount;
console.log(`${amount} ${user_answer.from} is equal to ${parseFloat(result.toFixed(2))} ${user_answer.to}`);

