#! /usr/bin/env node

import { log } from "console";
import inquirer from "inquirer"
let todolist = [];

let condition = true;

while (condition) {
console.log("\n");

let selectOption = await inquirer.prompt([
    {
        message: "what you want to do?",
        type: "list",
        name: "options",
        choices: ["Add elements", "Display elements", "Delete elements", "Exit"],
    },
    
]);

    if (selectOption.options === "Add elements") {
    
    
            let addtask = await inquirer.prompt([
      {
          message: "Enter the elements in todo list",
          type: "input",
          name: "taskinput",
        },
        
        {
            message: "do you want to add more elements",
            type: "confirm",
            name: "more",
            default: "false",
        },
    ]);
    todolist.push(addtask.taskinput);
    condition = addtask.more;
    console.log(todolist);

      
 }
if(selectOption.options === "Display elements"){
    
    if(todolist.length === 0 ){
        console.log("no elements to display");
    }
    else{
        
        console.log("Elements of your list are", todolist);
    }
}


else if(selectOption.options === "Delete elements"){
    
    if(todolist.length === 0 ){
        console.log("your list is already empty");
    }
    else{

        let indexinput = await inquirer.prompt([
            {
                message: "Write the name of element you want to delete",
                type: "input",
                name: "elementname"
            }
        ]);
                console.log("\n");
        let index = todolist.indexOf(indexinput.elementname);

            if(index > -1){
                todolist.splice(index, 1);
                console.log("Remaining elements", todolist);
                console.log("\n");
            
            }else{
                console.log("please write proper name of element you want to delete");
                console.log("Elements of your list are",todolist);
                console.log("\n");
        }

       
    }
}


        if (selectOption.options === "Exit") {
        console.log("Exiting the program.");
        condition=false;
}

}