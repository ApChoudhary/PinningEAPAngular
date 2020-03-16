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

    request() {
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

    getChartData(service) {
        return this.http.post<any>('http://127.0.0.1:5000/dbdata', service)
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
    insertRequestIntoDB(service,request,requestinfo) {
        var body = {
            "SERVICE": service,
            "REQUEST_TYPE": request,
            "REASON": requestinfo.reason.value,
            "DESCRIPTION": requestinfo.description.value,
            "REQUESTOR_NAME": requestinfo.requestorName.value,
            "CLIENT_NAME": requestinfo.clientName.value,
            "REQUESTOR_EMAIL": requestinfo.requestorEmail.value,
            "SEND_COPY_TO": requestinfo.sendCopyTo.value
        }
        return this.http.post<any>('http://127.0.0.1:5000/inserRequestIntoDB', body)
            .pipe(map(user => {
                // store user details and jwt token in local storage to keep user logged in between page refreshes               
                return user;
            }));
    }
}
