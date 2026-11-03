import fs from "fs"
import {HOME_DIR, CONFIG_DIR} from "../utils/constants.js"


export async function getSettingsFile() {

    try {
        // Ensures the config file exists.
        await fs.access(CONFIG_DIR) 
    } catch (error) {
        await fs.mkdir(CONFIG_DIR, {recursive : true})
    }

    const settingsFilePath = path.join(CONFIG_DIR, "settings.json")

    try {
        await fs.access(settingsFilePath)
        const content = await fs.readFile(settingsFilePath,"utf-8")
        return JSON.parse(content)
    } catch (error) {
        await fs.writeFile(settingsFilePath, JSON.stringify({}))
        return {}
    }
    
}