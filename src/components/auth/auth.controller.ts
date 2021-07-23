import { Body, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthDto } from './dto/auth.dto';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
 
    @UsePipes(new ValidationPipe())
    @Post('/register')
    async register (@Body() authDto: AuthDto){
        return 
    }


}
