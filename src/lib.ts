export enum EJT808EscapeSubstituteOptions {
    "7D02" = "7E",
    "7D01" = "7D"
}

export enum EJT808EscapeValues {
    "7D" = "7D",
    "01" = "01",
    "02" = "02",
}

export const pairSplit = (str: string): RegExpMatchArray => str.match(/(..?)/g);

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

export const property = (str: RegExpMatchArray, [start, end]: [number, number]): RegExpMatchArray => str.slice(start, end);

export const removeWhiteSpace = (str: string): string => str.replace(/\s+/g, "");

export const hexToDec = (hex: string): number => parseInt(hex, 16);