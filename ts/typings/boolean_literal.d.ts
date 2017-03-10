//module , not script file
export type Result<T> = {
    success: true,
    value: T
} | { success: false };

export interface IBetSlipH2H {
    isHead2Head: true,
    parentMeeting: any
}