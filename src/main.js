import { getApiKey, getSettingsFile, saveApiKey } from "./utils/file.utils.js";
import readLine from "./utils/readline.js";

async function main() {
    const settings = await getSettingsFile()
  
    if(!settings.apiKey){
       const apiKey = await readLine.question("Enter Your API_KEY here :  ")
       await saveApiKey(apiKey)
    }

    const response = await getApiKey()

    // console.log(apiKey)

    if(response.error){
        console.error("Invalid OR Expired API key")
        const apiKey = await readLine.question("Enter your API key : ")
        await saveApiKey(apiKey)
        return main()
    }

    const apiKey = response.apiKey

    readLine.close()

}


export default main








