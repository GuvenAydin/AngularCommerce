export interface Response {
    success: boolean;
    message: string;
    internalMessage?: string;
    data?: [];
    errors?: [];
}
