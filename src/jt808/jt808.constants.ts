export const MESSAGE_ID: [number, number] = [1, 3];

export const MESSAGE_BODY_ATTR: [number, number] = [MESSAGE_ID[1], MESSAGE_ID[1] + 2];

export const TERMINAL_PHONE_NUMBER: [number, number] = [
    MESSAGE_BODY_ATTR[1],
    MESSAGE_BODY_ATTR[1] + 6,
];

export const MESSAGE_SERIAL_NUMBER: [number, number] = [
    TERMINAL_PHONE_NUMBER[1],
    TERMINAL_PHONE_NUMBER[1] + 2,
];

export const ALARM_FLAG: [number, number] = [
    MESSAGE_SERIAL_NUMBER[1],
    MESSAGE_SERIAL_NUMBER[1] + 4,
];

export const STATUS_FLAG: [number, number] = [ALARM_FLAG[1], ALARM_FLAG[1] + 4];

export const LATITUDE: [number, number] = [STATUS_FLAG[1], STATUS_FLAG[1] + 4];

export const LONGITUDE: [number, number] = [LATITUDE[1], LATITUDE[1] + 4];

export const ELEVATION: [number, number] = [LONGITUDE[1], LONGITUDE[1] + 2];

export const SPEED: [number, number] = [ELEVATION[1], ELEVATION[1] + 2];

export const DIRECTION: [number, number] = [SPEED[1], SPEED[1] + 2];

export const GPS_TIME: [number, number] = [DIRECTION[1], DIRECTION[1] + 6];

export const MILEAGE: [number, number] = [GPS_TIME[1], GPS_TIME[1] + 1];

export const MILEAGE_LENGTH: [number, number] = [MILEAGE[1], MILEAGE[1] + 1];

export const MILEAGE_VALUE: [number, number] = [
    MILEAGE_LENGTH[1],
    MILEAGE_LENGTH[1] + 4,
];

export const OIL: [number, number] = [MILEAGE_VALUE[1], MILEAGE_VALUE[1] + 1];

export const OIL_LENGTH: [number, number] = [OIL[1], OIL[1] + 1];

export const OIL_VALUE: [number, number] = [OIL_LENGTH[1], OIL_LENGTH[1] + 2];

export const CHECKSUM: [number, number] = [OIL_VALUE[1], OIL_VALUE[1] + 1];
