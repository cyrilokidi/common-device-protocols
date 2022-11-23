import { CDP } from "..";
import { hexToDec, pairSplit, property, removeWhiteSpace, restoreEscape } from "../lib";
import { MESSAGE_ID } from "./jt808.constants";

export interface IMessageId {
    hex: RegExpMatchArray;
    dec: number;
}

export class JT808 extends CDP {
    str: RegExpMatchArray;

    constructor(str: string) {
        super(str);
        this.str = this.deserialize(str);
    }

    private deserialize(str: string): RegExpMatchArray {
        let result: string | RegExpMatchArray;
        result = str.toUpperCase().replace(/FLAGBIT/, "");
        result = pairSplit(result);
        result = restoreEscape(result);
        result = pairSplit(result);
        return result as RegExpMatchArray;
    }

    public get messageId(): IMessageId {
        const hex: RegExpMatchArray = property(this.str, MESSAGE_ID);
        const str: string = removeWhiteSpace(hex.join(""));
        const dec: number = hexToDec(str);
        return {
            hex,
            dec,
        } as IMessageId;
    }
}