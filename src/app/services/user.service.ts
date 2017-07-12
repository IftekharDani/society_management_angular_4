import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
 
import { User } from '../shared/user.model';
 
@Injectable()
export class UserService {
    constructor(private http: Http) { }
 
    getAll() {
        return this.http.get('/api/users', this.passHeader()).map((response: Response) => response.json());
    }
 
    getById(id: number) {
        return this.http.get('/api/users/' + id, this.passHeader()).map((response: Response) => response.json());
    }
 
    create(user: User) {
        return this.http.post('http://111.93.82.91:3000/auth/signup', user, this.passHeader()).map((response: Response) => response.json());
    }
 
    update(user: User) {
        return this.http.put('/api/users/' + user.id, user, this.passHeader()).map((response: Response) => response.json());
    }
 
    delete(id: number) {
        return this.http.delete('/api/users/' + id, this.passHeader()).map((response: Response) => response.json());
    }
 
    // private helper methods
 
    private passHeader() {
        // create authorization header with jwt token
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            let headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.token });
            return new RequestOptions({ headers: headers });
        }
    }
}