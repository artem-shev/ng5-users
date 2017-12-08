import { Injectable } from '@angular/core';

@Injectable()
export class UrlsService {
  githubURLS = {
    user(login: string): string {
      return `//api.github.com/users/${login}`;
    },
    users(query: string): string {
      return `//api.github.com/search/users?q=${query}`;
    },
    repos(login: string): string {
      return `//api.github.com/search/repositories?q=${login}`;
    },
    getRepoReadme(owner, name): string {
      return `//api.github.com/repos/${owner}/${name}/readme`;
    }
  };
  constructor() { }

}
