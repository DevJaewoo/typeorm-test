export const OrderStatus = {
    ORDERED: 'ORDERED',
    CANCELED: 'CANCELED',
    DELIVERED: 'DELIVERED',
} as const;

export type TOrderStatus = typeof OrderStatus[keyof typeof OrderStatus];
