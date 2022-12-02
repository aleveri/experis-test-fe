import { HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { DataService } from "./Services/data.service";

@Injectable()
export class AppConfiguration {

    static API_URL = 'https://localhost:49153/';

    constructor(private dataService: DataService) { }

    getHeader(): HttpHeaders {
        let headers = new HttpHeaders();
        headers = headers.set('Content-Type', 'application/json');
        return headers;
    }
}