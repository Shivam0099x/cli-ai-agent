import { getApiKey, getSettingsFile, saveApiKey } from "./utils/file.utils.js";
import readLine from "./utils/readline.js";

async function main() {
    const settings = await getSettingsFile()
    console.log(settings)


    if(!settings.apiKey){
       const apiKey = await readLine.question("Enter Your API_KEY here :  ")
       await saveApiKey(apiKey)
    }
    

    const apiKey = await getApiKey()

    console.log(apiKey)

    readLine.close()

}


export default main








