import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UrlsService } from './urls.service';

@Injectable()
export class GitConnectorService {

  constructor(
    private http: HttpClient,
    private urlsService: UrlsService,
  ) { }

  getUsers(query: string) {
    const url = this.urlsService.githubURLS.users(query);

    return this.http.get(url);
  }
}
