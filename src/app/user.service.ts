import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, map, throwError } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root',
})
export class UserService {
  [x: string]: any;
  private apiUrl = 'https://demo.appbase.ma';
  public sessionToken: string | null = null;
  // private apiUrl2 = 'https://demo.appbase.ma/api/product.template';

  // addUser(newUser: any) {
  //   throw new Error('Method not implemented.');
  // }
  // getUsers() {
  //   throw new Error('Method not implemented.');
  // 
// }
  
  constructor(private http: HttpClient) {}

  // login(user: string, password: string): Observable<any> {
  //   const hardcodedUser = "admin";
  //   const hardcodedPassword = "admin";
    
  //   if (user === hardcodedUser && password === hardcodedPassword) {
  //     let data = {
  //       login: user,
  //       password: password,
  //       db: 'demo',
  //     };
      
  //     // Make the POST request to the authentication endpoint
  //     return this.http.post(`${this.apiUrl}/auth`, data).pipe(
  //       // Assuming the response has a token property
  //       map((response: any) => {
  //         this.sessionToken = response.token;
  //         // console.log(this.sessionToken);
  //         console.log('Login successful. Session token:', this.sessionToken);
  //         return response;
          
  //         // console.log(response);
  //       })
  //     );
  //   } else {
  //     return new Observable((observer) => {
  //       observer.error('Authentication failed');
  //     }
      
  //     );
  //   }
  // }
  

  // // Example of a method that makes an authenticated request
  // getData(): Observable<any> {
  //   if (!this.sessionToken) {
  //     console.error('No session token available. Please log in first.');
    
  //     throw new Error('No session token available. Please log in first.');
  //   }

  //   const headers = {
  //     Authorization: `Bearer ${this.sessionToken}`,
  //   };

  //   return this.http.get(`${this.apiUrl}/data`, { headers });
  // }

  // // You can add a method to check if the user is logged in
  // isLoggedIn(): boolean {
  //   return !!this.sessionToken;
    
  // }
  // logout(): void {
  //   this.sessionToken = null;
  //   console.log('Logged out. Session token:', this.sessionToken);
  // }

  login(user: string, password: string): Observable<any> {
    const hardcodedUser = 'admin';
      const hardcodedPassword = 'admin';
      if(user === hardcodedUser && password === hardcodedPassword){
        
        let data = {
          params: {
            login: user,
            password: password,
            db: 'demo',
          }}
          return this.http.post(`${this.apiUrl}/auth`, data);
        }else{
          return new Observable(observer => {
            observer.error('Authentication failed');
          });
        }
        
  }
  // addArticle(id: number, name: string, price:string , standard_price:string ,categ_id:string ,barcode:string,volume:string)
  addArticle(
    id: number,
    name: string,
    // price: number,
    // standard_price: number,
    // categ_id: number,
    // barcode: string,
    // volume: number
  ): Observable<any> {
    const article = {
      id,
      name,
      // price,
      // standard_price,
      // categ_id,
      // barcode,
      // volume
      // ... other properties if needed
    };
    const sessionId = localStorage.getItem("sessionId");
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    const apiUrlWithSession = `${this.apiUrl}/api/product.template/?session_id=${sessionId}`;

    return this.http.post<any>(apiUrlWithSession, article, httpOptions).pipe(
      switchMap((postResponse) => {
        console.log(postResponse);
        console.log(postResponse.id);
        // If the POST request is successful, make a separate GET request to get the details of the added article
        const getArticleUrl = `${this.apiUrl}/api/product.template/?session_id=${sessionId}&id=${postResponse.id}`;
        return this.http.get(getArticleUrl, httpOptions);
      }),
      catchError(this.handleError('addArticle', article))
    );
    
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed:`, error);
      return throwError(result as T);
    };
  }



  
  post(sessionId: string, articleData: any): Observable<any> {
    const postUrl = `${this.apiUrl}/api/product.template/?session_id=${sessionId}`;
  
    return this.http.post(postUrl, articleData);
  }
  // ngOnInit(id: any, sessionId: string) {
  //     this.http.delete(`${this.apiUrl}/api/product.template/${id}?session_id=${sessionId}`)
  //         .subscribe(() => this.apiUrl = 'Delete successful');
  // }
  
  delete(id: any, sessionId: string): Observable<any> {
    // if (!id || !id.id || !sessionId) {
    //   console.error('Invalid id or sessionId');
    //   return;
    // }
    console.log(id.id,sessionId);
    // id.id = 5 ; sessionId = '8976bda48ea8d2e7b605c193d511b36ba7fe3ef9'
    const deleteUrl = `${this.apiUrl}/api/product.template/${id.id}?session_id=${sessionId}`;
    return this.http.delete(deleteUrl);
  }
  

  updateArticle(article: any): Observable<any> {
    const updateUrl = `${this.apiUrl}/api/product.template/${article.id}?session_id=${this['sessionId']}`;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    
    return this.http.put(updateUrl, article, httpOptions);
  }
  // getData(sessionId:string){
  //   let url = `https://demo.appbase.ma/api/product.template/?${sessionId}`;
  //   return this.http.get(url);
    
  // }
  // user.service.ts

}
