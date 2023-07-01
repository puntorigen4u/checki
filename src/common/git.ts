const shell = require('node-async-exec')

export default class git {
    user: String
    path: String

    constructor(user: String, path?: String) {
        this.user = user
        this.path = path ? path : process.cwd()
    }

    async clone(repo: String, folder?: String) {
        const path = require('path')
        const just_repo = repo.split('/').pop()
        const new_path = path.join(this.path, folder ? folder : just_repo)
        try {
            await shell({
                cmd:
                    `git clone --depth 1 https://${this.user}@github.com/${repo}.git` +
                    (folder ? ' ' + folder : ''),
                path: this.path
            })
            //erase inner .git subdirectory
            await shell({ cmd: `rm -fr .git`, path: new_path })
        } catch (err_clone) {
            // clone repo or target folder already existing
        }
        //return path of new clone
        return new_path
    }
}
