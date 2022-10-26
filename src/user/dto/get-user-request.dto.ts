import { IsNotEmpty, IsString } from "class-validator";

export class GetUserRequest {
    @IsNotEmpty()
    @IsString()
    id: string;
}