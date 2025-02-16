import { Body, Controller, Post, HttpCode, HttpStatus, Get, UseGuards, Request, Req, UseFilters } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUsuarioDto } from 'src/usuario/dto/create-usuario.dto';
import { AuthGuard } from './auth.guard';
import { QueryFailedExceptionFilter } from '../common/middleware/usuario.filter';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
@UseFilters(QueryFailedExceptionFilter)
export class AuthController {
    constructor(private authService: AuthService) { }

    @HttpCode(HttpStatus.OK)
    @Post('login')
    logIn(@Body() loginDto: LoginDto) {
        return this.authService.logIn(loginDto);
    }

    @HttpCode(HttpStatus.OK)
    @Post('register')
    signIn(@Body() createUsuarioDto: CreateUsuarioDto) {
        return this.authService.signIn(createUsuarioDto);
    }

    @Get('profile')
    @UseGuards(AuthGuard)
    profile(@Request() req) {
        return req.user;
    }

    @Get('check')
    @UseGuards(AuthGuard)
    check(@Request() req) {
        return this.authService.getByUser(req.user);
    }
}