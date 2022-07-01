export interface loginModel
{
    PhoneNumber:string;
    Password:string;
}

export interface userResult
{
    userId:string;
    userName:string;
    email:string;
    accessToken:string;
    refreshToken:string;
    roles:string[];
}