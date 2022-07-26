import { verify } from 'jsonwebtoken';
import { CanActivate, ExecutionContext, ForbiddenException, Injectable, NestMiddleware } from '@nestjs/common';
import { Observable } from 'rxjs';
import { expressJwtSecret } from 'jwks-rsa';
import {promisify} from 'util';
import * as jwt from 'express-jwt';
import jwt_decode from 'jwt-decode';
import { Request, Response} from 'express';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  // constructor(private readonly userService: UserService) {}

  async use(req: Request | any, res: Response, next: () => void) {
    const bearerHeader = req.headers.authorization;
    const accessToken = bearerHeader && bearerHeader.split(' ')[1];
    let user;

    if (!bearerHeader || !accessToken) {
      // return next();
      throw new ForbiddenException('Please register or sign in.');
    }
    console.log(process.env.ACCESS_TOKEN_SECRET);
    try {
      const validateToken = verify(
        accessToken,
        `-----BEGIN CERTIFICATE-----
MIIDDTCCAfWgAwIBAgIJEiF1RptLNRwZMA0GCSqGSIb3DQEBCwUAMCQxIjAgBgNV
BAMTGWRldi1zLXEyeTdraS51cy5hdXRoMC5jb20wHhcNMjIwMjEwMDUyMTUwWhcN
MzUxMDIwMDUyMTUwWjAkMSIwIAYDVQQDExlkZXYtcy1xMnk3a2kudXMuYXV0aDAu
Y29tMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAlxHi23vecdaSsT3Y
MHAafkg+5cVlT+6vsZGCAhNBJR1gA9I76H14q+yfUYjSa2OV0ufNKEbCIWtGppHD
wS3W94a9oNiXVz0f4YnCMTdETLX+idIAo1/7++L6GVVqBASixK+ICvMOlDUYNXR7
UUVNYR02bmzJfU3EcEzhorpuYGQiI2O9NXYnDJMkSRAQQYRvoDogpWhJkk1939ye
9zfN1RSzcerANFqb9fYbGZwKGXoP30WGh4iBvsZFjwQh8n/6BOaYz7/8FijivUDx
AD/mG/vE02ODf9hNdirbZa1e1e+okUDMwIyttXkbUFFJfHnMAD/PzKA+/B4qGWTt
G4B1bwIDAQABo0IwQDAPBgNVHRMBAf8EBTADAQH/MB0GA1UdDgQWBBSzVckfgp6e
GUzyG9J0RcMMP7HskjAOBgNVHQ8BAf8EBAMCAoQwDQYJKoZIhvcNAQELBQADggEB
ADGdK2M25zrtaXK4BoEzORfARYlBVipUdUVQZnOp9qUuFqNIDeOcbwu7EqKueLJr
hKzmjgHh/0P4P5Ubwn+6A226FkPMvMZCx/NZPhSIrY1kmee3aiiyk0kfjRW7B/7u
t7yiOVq+A8z03PchbFh0BUTIyoM1vz/YaRvzx20E5VG3926vdOiOjyo2j3XBH+/+
NLvoOQ21qbBRpzov+9jatNZSe7MjU9QTc/YEzGfSN8d9XlQAM+dj7TlF4R87cp39
TYTRTo2E6RiIY/6n9ZQ1kLaZAVIHsr6FVw+A7miswo/p4jEQw5YwmUHEDCxS7Zd3
K3Qh/7xDi7Z27An4B7R68UE=
-----END CERTIFICATE-----`,
      );
      console.log(validateToken);
      // user = await this.userService.findOneById(id);
    } catch (error) {
      throw new ForbiddenException('Please register or sign in.');
    }

    // if (user) {
    //   req.user = user;
    // }
    next();
  }
}
