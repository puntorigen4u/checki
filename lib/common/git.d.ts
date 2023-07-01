export default class git {
    user: String;
    path: String;
    constructor(user: String, path?: String);
    clone(repo: String, folder?: String): Promise<any>;
}
//# sourceMappingURL=git.d.ts.map