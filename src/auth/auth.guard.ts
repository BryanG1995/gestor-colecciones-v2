import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Request } from 'express';
import { JwtService } from '@nestjs/jwt';
import { jwtConstants } from './jwt.constant';

@Injectable()
export class AuthGuard implements CanActivate {

constructor( 
  private jwtService: JwtService)
  
  {}

  async canActivate(context: ExecutionContext):  Promise<boolean>  {

    const req = context.switchToHttp().getRequest()
    const token = this.extractTokenFromHeader(req);
    if (!token) {
      throw new UnauthorizedException();
    }

    try {
      const payload = await this.jwtService.verifyAsync(
        token,
        {
          secret: jwtConstants.secret
        }
      );
      // 💡 We're assigning the payload to the request object here
      // so that we can access it in our route handlers
      //#TODO: obtener usuario y extraer lo necesario desde aqui y no desde el controlador del endpoint
      req['email'] = payload;
      
    } catch {
      throw new UnauthorizedException();
    }

    return true;
  }

  private extractTokenFromHeader(request: Request): string | undefined {
    const [type, token] = request.headers.authorization?.split(' ') ?? [];
    return type === 'Bearer' ? token : undefined;
  }
}
