import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AccountListsResponse } from '../models/interfaces/account-lists-response.interface';
import { ListDetailsResponse } from '../models/interfaces/list-details-response.interface';

const API_BASE_URL = 'https://api.themoviedb.org/3';

@Injectable({
    providedIn: 'root',
})
export class AccountService {
    constructor(private http: HttpClient) { }

    public getAccountLists(accountId: string, sessionId?: string, page: number = 1): Observable<AccountListsResponse> {
        const url = `${API_BASE_URL}/account/${accountId}/lists`;
        const params: any = { page };
        if (sessionId){
            params.session_id = sessionId;
        }
        return this.http.get<AccountListsResponse>(url, { params });
    }

    public getListDetails(listId: number | string): Observable<ListDetailsResponse> {
        return this.http.get<ListDetailsResponse>(`${API_BASE_URL}/list/${listId}`);
    }
}
