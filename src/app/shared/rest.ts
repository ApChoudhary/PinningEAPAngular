import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class RestService {

    constructor(private http: HttpClient) {

    }

    login(username, password) {
        return this.http.post<any>('http://127.0.0.1:5000/auth', { username, password })
            .pipe(map(user => {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                if (user['access_token']) {
                    localStorage.setItem('accesstoken', user['access_token']);
                    return true;
                }
                return false;
            }));
    }

    landing() {
        var header = {
            headers: new HttpHeaders()
                .set('Authorization', `JWT ${localStorage.getItem('accesstoken')}`)
        }
        return this.http.get<any>('http://127.0.0.1:5000/',header)
            .pipe(map(user => {
                // store user details and jwt token in local storage to keep user logged in between page refreshes               
                return user;
            }));
    }

    dbSchema() {
        return this.http.get<any>('http://127.0.0.1:5000/dbdata')
            .pipe(map(user => {
                // store user details and jwt token in local storage to keep user logged in between page refreshes               
                return user;
            }));
    }

    insertIntoDB() {
        var body = {
            "ID": "2",
            "Service_Name": "Pinning",
            "Hit": "0",
            "Source": "UI",
            "Seq_No": "2"
        }
        return this.http.post<any>('http://127.0.0.1:5000/insertIntoDB', body)
            .pipe(map(user => {
                // store user details and jwt token in local storage to keep user logged in between page refreshes               
                return user;
            }));
    }
}