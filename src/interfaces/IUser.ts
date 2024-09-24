export interface IUser {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    dateOfBirth: string; // ISO 8601 date format (e.g., "2023-12-31")
    isDeleted: boolean;
    isSuspended: boolean;
    isVerified: boolean;
    otp?: string;
    otpExpirationDate?: string; // ISO 8601 date format
    device: string;
    profilePic?:string;
    lastLogin: string; // ISO 8601 date format
    createdAt: string; // ISO 8601 date format
    updatedAt: string; // ISO 8601 date format
}