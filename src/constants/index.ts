export type TokenPair = {
    accessToken: string,
    refreshToken: string
}

export type KeyPair = {
    privateKey: string,
    publicKey: string
}

export const ACCESS_TOKEN_EXPIRY = '2 days';
export const REFRESH_TOKEN_EXPIRY = '7 days';
export const LIMIT_DOCUMENT_QUERY = 50;