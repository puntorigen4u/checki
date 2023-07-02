import Command from './../common/command';
export default class JsDoc extends Command {
    init(): Promise<boolean>;
    validate(data: any[]): Promise<boolean>;
    process(): Promise<void>;
}
//# sourceMappingURL=jsdoc.d.ts.map