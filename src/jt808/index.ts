import { CDP } from "..";
import { hexToDec, pairSplit, property, removeWhiteSpace, restoreEscape } from "../lib";
import { MESSAGE_ID } from "./jt808.constants";

export interface IMessageId {
    hex: string[];
    dec: number;
}

export class JT808 extends CDP {
    str: string[];

    constructor(str: string) {
        super(str);
        this.str = this.deserialize(str);
    }

    private deserialize(str: string): string[] {
        let result: string | string[];
        result = str.toUpperCase().replace(/FLAGBIT/, "");
        result = pairSplit(result);
        result = restoreEscape(result);
        result = pairSplit(result);
        return result as string[];
    }

    public get messageId(): IMessageId {
        const hex: string[] = property(this.str, MESSAGE_ID);
        const str: string = removeWhiteSpace(hex.join(""));
        const dec: number = hexToDec(str);
        return {
            hex,
            dec,
        } as IMessageId;
    }
}