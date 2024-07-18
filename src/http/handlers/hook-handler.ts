import { Request } from '../transport/request';
import { HttpResponse, RequestHandler } from '../types';
import { HttpError } from '../error';
import { Hook } from '../hooks/hook';

export class HookHandler implements RequestHandler {
  next?: RequestHandler;

  constructor(private readonly hook: Hook) {}

  async handle<T>(request: Request<T>): Promise<HttpResponse<T>> {
    if (!this.next) {
      throw new Error('No next handler set in hook handler.');
    }

    const hookParams = this.getHookParams<T>(request);

    const nextRequest = this.beforeRequest(request, hookParams);

    const response = await this.next.handle(nextRequest);

    if (response.metadata.status < 400) {
      return this.hook.afterResponse(request, response, hookParams);
    }

    const error = this.hook.onError(request, response, hookParams);

    throw new HttpError(error.metadata, error.error);
  }

  beforeRequest<T>(request: Request<T>, hookParams: Map<string, string>): Request<T> {
    const hookRequest = this.hook.beforeRequest(request, hookParams);

    request.updateFromHookRequest(hookRequest);

    return request;
  }

  getHookParams<T>(request: Request<T>): Map<string, string> {
    const hookParams: Map<string, string> = new Map();
    return hookParams;
  }
}
