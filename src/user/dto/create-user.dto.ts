 
 //import {ApiProperty} from 'nestjs/swagger';
 
 
 export class CreateUserDto {
     readonly id: number;
    readonly fullname : string;
    readonly username : string;
    readonly email: string;
    readonly telephoneNumber: number;
    readonly address: string;
    readonly password: string;
    readonly organizationName: string;

    //@ApiProperty()
    //username: string;

    //@ApiProperty()
    //password: string;

}