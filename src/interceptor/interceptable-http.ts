/*
 Copyright 2013-2017 the original author or authors from the JHipster project.

 This file is part of the JHipster project, see https://jhipster.github.io/
 for more information.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */
import { HttpInterceptor } from './http.interceptor';
import { forwardRef, Inject, Injectable } from '@angular/core';
import { Http, ConnectionBackend, RequestOptions, RequestOptionsArgs, Request, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class InterceptableHttp extends Http {
    private firstInterceptor: HttpInterceptor;

    constructor(
        backend: ConnectionBackend,
        defaultOptions: RequestOptions,
        @Inject(forwardRef(() => HttpInterceptor)) interceptors: HttpInterceptor[] // see the issue generator-jhipster#4794
    ) {
        super(backend, defaultOptions);

        /**
         * building a responsibility chain of http interceptors, so when processXXXInterception is called on first interceptor,
         * all http interceptors are called in a row
         * Note: the array of interceptors are wired in customHttpProvider of the generated Jhipster app in file `http.provider.ts`
         *
        */
        if (interceptors && interceptors.length > 0) {
            interceptors.reduce((chain, current) => {
                chain.successor = current;
                return current;
            });

            this.firstInterceptor = interceptors[0];
        }
    }

    request(url: string | Request, options?: RequestOptionsArgs): Observable<Response> {
        return this.intercept(super.request(url, this.getRequestOptionArgs(options)));
    }

    get(url: string, options?: RequestOptionsArgs): Observable<Response> {
        return this.intercept(super.get(url, this.getRequestOptionArgs(options)));
    }

    post(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {
        return this.intercept(super.post(url, body, this.getRequestOptionArgs(options)));
    }

    put(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {
        return this.intercept(super.put(url, body, this.getRequestOptionArgs(options)));
    }

    delete(url: string, options?: RequestOptionsArgs): Observable<Response> {
        return this.intercept(super.delete(url, this.getRequestOptionArgs(options)));
    }

    patch(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {
        return this.intercept(super.patch(url, body, this.getRequestOptionArgs(options)));
    }

    head(url: string, options?: RequestOptionsArgs): Observable<Response> {
        return this.intercept(super.head(url, this.getRequestOptionArgs(options)));
    }

    options(url: string, options?: RequestOptionsArgs): Observable<Response> {
        return this.intercept(super.options(url, this.getRequestOptionArgs(options)));
    }

    getRequestOptionArgs(options?: RequestOptionsArgs): RequestOptionsArgs {
        if (!options) {
            options = new RequestOptions();
        }
        if (!options.headers) {
            options.headers = new Headers();
        }

        return !this.firstInterceptor ? options : this.firstInterceptor.processRequestInterception(options);
    }

    intercept(observable: Observable<Response>): Observable<Response> {
        return !this.firstInterceptor ? observable : this.firstInterceptor.processResponseInterception(observable);
    }
}
