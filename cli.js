#!/usr/bin/env node
import "dotenv/config"
import os from "os"
import path from "path"


const homeDir = os.homedir()

console.log("Hellloo Frrooommm Cli.js")
console.log(process.env.BETA_TRIAL)
console.log(homeDir)