import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';

const token="U3RhZmZMaW5lQDIwMTc6ZXlKaGJHY2lPaUpJVXpJMU5pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SmtZWFJoSWpwN0ltVnRjR3h2ZVdWbFJHVjBZV2xzYzBsa0lqb3hNRGs1ZlN3aWFXRjBJam94TkRrNU9ETTNNelF4TENKbGVIQWlPakUwT1RrNU1qTTNOREY5LjdzS1JabUwzeHRiczFlS293NHZNM0pFaHQxc3BjWmxEcTFtVnZFZzFBa0k=";

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