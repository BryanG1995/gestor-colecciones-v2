import { ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { UsuarioService } from '../usuario/usuario.service';
import { CreateUsuarioDto } from '../usuario/dto/create-usuario.dto';
import { LoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';
import * as jwt from 'jsonwebtoken';
import { jwtConstants } from './jwt.constant';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class AuthService {

  constructor(
    private usuarioService: UsuarioService,
    private jwtService: JwtService
  ) {}

  public signJWT({
    payload,
    secret,
    expires,
  }: {
    payload: Object;
    secret: string;
    expires: number | string
  }) {
    return jwt.sign(payload, secret, { expiresIn: expires });
  }

  async signIn(createUsuarioDto: CreateUsuarioDto): Promise<any> {
    const { nombre, email, password } = createUsuarioDto;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const usuario = await this.usuarioService.create({
      nombre: nombre,
      email: email,
      password: hashedPassword
    });

    

    return this.generatedJWT(usuario);
  }

  async logIn(loginDto: LoginDto): Promise<any> {
    console.log(loginDto);
    const userFind = await this.usuarioService.findByUser(loginDto.email);
    console.log(userFind)
    const isPasswordValid = await this.comparePassword(loginDto.password, userFind.password);

    

    if (!isPasswordValid) {
      throw new UnauthorizedException('Usuario o clave incorrecto');
    }

    const { password, createdAt, updatedAt, deletedAt, id, ...result } = userFind;
    return this.generatedJWT(userFind);
  }

  async comparePassword(password: string, hashedPassword: string): Promise<boolean> {
    console.log(password, hashedPassword);
    return await bcrypt.compare(password, hashedPassword);
  }

  public async getByUser(user: object) {
    return this.generatedJWT(user);
  }

  public async generatedJWT(user: any) {
    const getUser = await this.usuarioService.findByUser(user.user);
    const payload = {
      email: getUser.email,
      id: getUser.id.toString()
    };

    return {
      token: this.signJWT({
        payload,
        secret: jwtConstants.secret,
        expires: '1d'
      }),
      id: getUser.id,
      email: getUser.email,
    };
  }
}