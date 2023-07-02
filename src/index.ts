/**
 * Checki CLI: Utility to generate react unit tests with the help of AI
 * @name 	checki
 * @module 	checki
 **/
import { cli, command } from './common/decorators'
import cmds from './cmds'
require('dotenv').config()
//

@cli
export default class checki {

    constructor(arg: { silent?: boolean } = { silent: true }) {}

    @command('Initializes a react project with checki scripts', [
        [   '-o',   '--openai',           'OpenAI apikey.'],
        [   '-p',   '--path',             `Path of react project. Defaults to current path`],
    ],'[options]')
    async init(arg: any) {
        await (new cmds.Init(arg)).run();
    }

    @command('Generates jsdoc test stories for each component within project', [
        [   '-o',   '--openai',           'OpenAI apikey.'],
        [   '-p',   '--path',             `Path of react project. Defaults to current path`],
    ],'[options]')
    async jsdoc(arg: any) {
        await (new cmds.JsDoc(arg)).run();
    }
    
}
