import CDP from "../cdp";
import { hexToBin, hexToDec, pairSplit, property, removeWhiteSpace, restoreEscape } from "../lib";
import { MESSAGE_BODY_ATTR, MESSAGE_ID, TERMINAL_PHONE_NUMBER } from "./jt808.constants";

export interface IMessageId {
    hex: string[];
    dec: number;
}

export interface IMessageBodyAttr {
    hex: string[];
    bin: string;
}

export default class JT808 extends CDP {
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

    public get messageBodyAttr(): IMessageBodyAttr {
        const hex: string[] = property(this.str, MESSAGE_BODY_ATTR);
        let bin: string = "";
        hex.map((h): void => {
            bin += hexToBin(h);
        });
        return {
            hex,
            bin
        } as IMessageBodyAttr;
    }

    public get terminalPhoneNumber(): string {
        const hex: string[] = property(this.str, TERMINAL_PHONE_NUMBER);
        const str: string = removeWhiteSpace(hex.join(""));
        return str;
    }
}