import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';

const token="U3RhZmZMaW5lQDIwMTc=";

@Injectable()
export class HttpClient {

    constructor(private http: Http) {}

    createAuthorizationHeader(headers: Headers) {
        headers.append('Authorization', token);
    }

    get(url) {
        let headers = new Headers();
        this.createAuthorizationHeader(headers);
        return this.http.get(url, {
            headers: headers
        });
    }

    post(url, data) {
        let headers = new Headers();
        this.createAuthorizationHeader(headers);
        return this.http.post(url, data, {
            headers: headers
        });
    }
}