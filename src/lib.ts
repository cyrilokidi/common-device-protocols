import { EJT808EscapeSubstituteOptions, EJT808EscapeValues } from "./jt808/types";

export const pairSplit = (str: string): RegExpMatchArray => {
    return str.match(/(..?)/g);
}

export const restoreEscape = (str: RegExpMatchArray): string => {
    let result: string = "";
    for (let i: number = 0; i < str.length; i++) {
        const isFlagBit: boolean = i === 0 || i === str.length - 1;
        if (isFlagBit) {
            result += str[i];
        } else {
            const is7D02: boolean = str[i] === EJT808EscapeValues["7D"] && str[i + 1] === EJT808EscapeValues["02"];
            const is7D01: boolean = str[i] === EJT808EscapeValues["7D"] && str[i + 1] === EJT808EscapeValues["01"];
            if (is7D02) {
                result += EJT808EscapeSubstituteOptions["7D02"];
                i += 1;
            } else if (is7D01) {
                result += EJT808EscapeSubstituteOptions["7D01"];
                i += 1;
            } else result += str[i];
        }
    }
    return result;
}