import fs from "fs/promises"
import {HOME_DIR, CONFIG_DIR} from "../utils/constants.js"
import path from "path"


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



export async function saveApiKey(apiKey) {
    const settingsFilePath = path.join(CONFIG_DIR, "settings.json")

    const settingsContent = await getSettingsFile()

    await fs.writeFile(settingsFilePath, JSON.stringify({
        ...settingsContent,
        apiKey
    }))
}


export async function getApiKey(params) {
    const settings = await getSettingsFile()
    return settings.apiKey || null
}


