import Command from './../common/command'

const fs = require('fs').promises, path = require('path');
const node_process = process;
export default class JsDoc extends Command {

    async init() {
        //@todo read this values from a theme.json file
        this.setColorTokens({
            '*':'yellow',
            '#':'cyan',
            '@':'green'
        });

        //console.log('this.arg',this.arg);
        //const file = path.join(process.cwd(), this.arg.data)
        //set defaults
        //output directory 
        //if (!this.arg.path) this.arg.path = process.cwd(); // current path
        //this.arg.path = path.join(process.cwd(), this.arg.output)
        //this.log(`Processing *${this.arg.data}* as source`);
        //this.spinner = this.x_console.spinner({ color:'yellow' });
        return true;
    }

    async validate(data:any[]):Promise<boolean> {
        const self = this;
        // ** VALIDATIONS **
        // optional args: openai,path key
        //read given JSON file, validate format
        //self.finish(12);
        return true;
    }

    async process() {
        // $ checki jsdoc
        const self = this;
        // ** PROCESS **    
        const spinner = this.x_console.spinner({ color:'yellow' });
        spinner.start('Analyzing current folder ...');
        // read current path
        // check there is a checki.config.json file
        // if not, run init cmd first
        // if yes, continue 
        // ask openAI API key to user if not defined as env variable or within existing checki.config.json
        // read project structure
        // read all jsx, or tsx files
        // classify which are components
        // read each component file and generate test stories for each one
        // add them as jsdoc comment array on top of each component within @checki key
        spinner.succeed('Prepared for generating tests');
        
        //ready
        this.log(`checki initialized`,'green');

    }

}