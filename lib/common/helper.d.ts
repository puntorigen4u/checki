export default class helper {
    x_console: any;
    constructor();
    copyright(): void;
    decrypt(string: any): any;
    extractKeys(str: any): String[];
    dirExists(dir: any): Promise<boolean>;
    createDir(dir: any): Promise<boolean>;
    fileExists(file: any): Promise<boolean>;
    readFile(file: any, json?: Boolean): Promise<any>;
    writeFile(file: any, data: String): Promise<boolean>;
    isObjEmpty(obj: any): boolean;
}
//# sourceMappingURL=helper.d.ts.map