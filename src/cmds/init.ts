import Command from './../common/command'

const fs = require('fs').promises, path = require('path');
const node_process = process;
export default class Init extends Command {

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
        if (!this.arg.path) this.arg.path = process.cwd(); // current path
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
        // $ checki init
        const self = this;
        // ** PROCESS **    
        this.debug('using folder: '+this.arg.path)
        const spinner = this.x_console.spinner({ color:'yellow' });
        spinner.start('Analyzing current folder ...');
        // read current path
        // read package.json of current path
        // check that this project is a real react project
        // create checki.config.json on root with default values
        // ask openAI API key to user if not defined as env variable or within existing checki.config.json
        spinner.succeed('Prepared for generating tests');
        
        //ready
        this.log(`checki initialized`,'green');

    }

}