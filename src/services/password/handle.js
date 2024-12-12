import chalk from "chalk";
import permittedChar from "./utils/permitted-characters.js";


async function handle(){
   let character = []
   let password = "";

   const passwordLength = process.env.PASSWORD_LENGTH;

   character = await permittedChar();


    for (let i = 0; i < passwordLength; i++) {
        const index = Math.floor(Math.random() * character.length) 
        password += character[index];
    }
    return password;
}

export default handle;