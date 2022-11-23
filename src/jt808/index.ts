import { CDP } from "..";
import { pairSplit, restoreEscape } from "../lib";

export class JT808 extends CDP {
    str: RegExpMatchArray;

    constructor(str: string) {
        super(str);
        this.str = this.deserialize(str);
    }

    private deserialize(str: string): RegExpMatchArray {
        let result: string | RegExpMatchArray = str.toUpperCase().replace(/FLAGBIT/, "");
        result = pairSplit(result);
        result = restoreEscape(result);
        result = pairSplit(result);
        return result as RegExpMatchArray;
    }
}