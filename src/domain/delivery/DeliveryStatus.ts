export const DeliveryStatus = {
    OK: 'OK',
    CANCELED: 'CANCELED',
};

export type TDeliveryStatus =
    typeof DeliveryStatus[keyof typeof DeliveryStatus];
