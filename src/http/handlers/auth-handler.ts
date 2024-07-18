import { Request } from '../transport/request';
import { HttpResponse, RequestHandler } from '../types';

export class AuthHandler implements RequestHandler {
  next?: RequestHandler;

  async handle<T>(request: Request<T>): Promise<HttpResponse<T>> {
    const requestWithAuth = this.addBasicAuthHeader(request);

    if (!this.next) {
      throw new Error(`No next handler set in ${AuthHandler.name}`);
    }

    return this.next?.handle(requestWithAuth);
  }

  private addBasicAuthHeader<T>(request: Request<T>): Request<T> {
    const { username, password } = request.config;
    if (!username || !password) {
      return request;
    }

    const encodedCredentials = btoa(`${username}:${password}`);

    request.addHeaderParam('Authorization', `Basic ${encodedCredentials}`);

    return request;
  }
}
