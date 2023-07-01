import Command from './../common/command';
export default class Init extends Command {
    init(): Promise<boolean>;
    validate(data: any[]): Promise<boolean>;
    process(): Promise<void>;
}
//# sourceMappingURL=init.d.ts.map