const root = (require('find-root'))(__dirname)
const pkg = require(root+'/package.json')
const fs = require('fs').promises

export default class helper {
    x_console: any

    constructor() {
        this.x_console = new (require('@concepto/console'))()
    }

    copyright() {
        this.x_console.out({
            message: `\nCrafted with passion @ 2023 by ${pkg.author}.`,
            color: 'dim'
        })
    }

    decrypt(string) {
        const enc = require('simple-encryptor')(pkg.author+' 2023-2023-2023-2023-2023-2023-2023-2023-2023');
        return enc.decrypt(string);
    }

    extractKeys(str):String[] {
        const extract = require('extractjs')({
            startExtract: '[',
            endExtract: ']',
        });
        let resp = [], str_ = str;
        if (str_.indexOf('{')!=-1 && str_.indexOf('}')!=-1) {
            const keys_ = extract('{[key]}',str_);
            if (keys_.key) {
                resp.push(keys_.key);
                str_ = str_.replaceAll('{'+keys_.key+'}','');
            }
            if (str_.indexOf('{')!=-1 && str_.indexOf('}')!=-1) {
                resp = resp.concat(this.extractKeys(str_));
            }
        }
        return resp;
    }

    async dirExists(dir) {
        let resp = await this.fileExists(dir)
        return resp
    }

    async createDir(dir) {
		try {
			await fs.mkdir(dir, { recursive:true });
            return true;
		} catch(errdir) { 
            return false;
        }
    }

    async fileExists(file) {
        let resp = false
        try {
            resp = await fs.access(file)
            resp = true
        } catch (f_err) {}
        return resp
    }

    async readFile(file, json: Boolean = true) {
        let resp = await fs.readFile(file, 'utf-8')
        if (json) return JSON.parse(resp)
        return resp
    }

    async writeFile(file, data: String) {
        try {
            await fs.writeFile(file, data, 'utf-8', {
                encoding: 'utf8',
                flag: 'w'
            })
            return true
        } catch (err_fs) {
            return false
        }
    }

    isObjEmpty(obj) {
        //fastest algorithm
        for (let x in obj) return false;
        return true;
    }

}
