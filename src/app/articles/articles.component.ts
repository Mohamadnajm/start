import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../user.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css'],

})
export class ArticlesComponent implements OnInit {
  [x: string]: any;
  articleId: number | undefined;
  articleName: string | undefined;
  articlePrice: number | undefined;
  articleStandardPrice: number | undefined;
  articleCategoryId: number | undefined;
  articleBarcode: string | undefined;
  articleVolume: number | undefined;
  
  corrarticles: any = {};
  article: any;
  articles: [] =[];
  getJsonValue: any[] = [];
  postJsonValue: any[] = [];
  showTable: boolean = false;
  myAr: any;
  sessionId: string | undefined;
  constructor(private http: HttpClient, private userService: UserService) {
  }
  
  
  // toggleTable() {
    // this.showTable != this.showTable;
    // }
    
    ngOnInit(): void {
      // this.login();
      this.getMethod();
      // const sessionId = this.userService.sessionToken;
      // console.log(this.sessionId)
  }
  onSubmit() {
    // Check if this.articleId is defined and is a valid number
    if (this.articleId !== undefined && !isNaN(this.articleId as number)) {
      this.userService.addArticle(
        this.articleId as number,
        this.articleName as string
        // this.articlePrice as number,
        // this.articleStandardPrice as number,
        // this.articleCategoryId as number,
        // this.articleBarcode as string,
        // this.articleVolume as number
      ).subscribe(
        (addedArticle) => {
          console.log('Article added successfully:', addedArticle);
          // Handle success as needed
          this.getJsonValue.push(addedArticle);
        },
        (error) => {
          console.error('Error adding article:', error);
          // Handle error as needed
        }
      );
    } else {
      console.error('Invalid articleId:', this.articleId);
      // Handle the case where articleId is not a valid number
    }
  }
  

public getMethod() {
  let url = 'https://demo.appbase.ma/api/product.template/?session_id=04e612577659ac3c430e3f7b70da80be4186c277&query={id, name, standard_price,categ_id,barcode,volume}'
  // let url = 'https://demo.appbase.ma/api/product.template/'
  // url += '&session_id=' + this.sessionId + '&query={id, name, standard_price,categ_id,barcode,volume}'

  this.http
    .get(url)
    .subscribe((data : any) => {
      console.log(data);
      this.getJsonValue = data.result;
    });
}
public postMethod(articleData: any) {
  // Check if session ID is available
  if (!this.sessionId) {
    // If not available, obtain the session ID
    this.loginAndPost(articleData);
    return;
  }

  // If session ID is available, proceed with the post request
  this.userService.post(this.sessionId, articleData).subscribe((response) => {
    // Handle the response, e.g., update the local array or perform other actions
    console.log('Article added successfully:', response);
  });
}

private loginAndPost(articleData: any) {
  // Replace 'user' and 'password' with actual user input or authentication logic
  this.userService.login('user', 'password').subscribe((response: any) => {
    this.sessionId = response.session_id;
    // After obtaining the session ID, call postMethod again
    this.postMethod(articleData);
  }, (error) => {
    console.error('Login failed:', error);
  });
}
// public postMethod(articleData: any) {
//   this.userService.post(articleData).subscribe((response) => {
//     // Handle the response, e.g., update the local array or perform other actions
//     console.log('Article added successfully:', response);
//   });
// }
// deleteMethod(id: string){
//   this.http.delete(id)
//   .subscribe(()=>{
//     this.article = this.article.filter
//     ((articles: { id: string; }) => articles.id != id)
//   })

// }
// getCommande(){
//   this.http.delete().subscribe((data: any)=>{
//     this.getJsonValue=data;
//   })
// }
// deleteMethod(id: string) {
//   this.http.delete(id).subscribe(()=>{
//     this.getJsonValue = this.getJsonValue.filter(article=>article.id != id)
//   }) 
// }
deleteMethod(id: string) {
  // Check if this.sessionId is defined
  if (this.sessionId) {
    this.userService.delete(id, this.sessionId).subscribe(
      () => {
        // Remove the deleted article from the local array
        this.getJsonValue = this.getJsonValue.filter(article => article.id !== id);
      },
      (error) => {
        console.error('Delete failed:', error);
      }
    );
  } else {
    console.error('Session ID is undefined. Unable to make the delete request.');
  }
}


updateArticles(id : string) {
  this.corrarticles = this.getJsonValue.find((a) => {return a.id === id});
  
  console.log(this.corrarticles);
}
onUpdateSubmit() {
  if (this.sessionId) {
    this.userService.updateArticle(this.corrarticles).subscribe(
      (updatedArticle: any) => {
        console.log('Article updated successfully:', updatedArticle);
      },
      (error: any) => {
        console.error('Error updating article:', error);
        // Handle error as needed
      }
      );
    }};
  // onUpdateSubmit() {
  //   // Send a request to update the article on the server
  //   this.userService.updateArticle(this.corrarticles).subscribe(
  //     (updatedArticle: any) => {
  //       console.log('Article updated successfully:', updatedArticle);
  //       // You may want to update your local array or perform other actions
  //     },
  //     (error: any) => {
  //       console.error('Error updating article:', error);
  //       // Handle error as needed
  //     }
  //     );
  //   }


    // public postMethod(articles :{article.id:number,article.name: string}){
    //   this.http.post('https://demo.appbase.ma/api/product.template/?session_id=e9501bfc7369d1332728fb9e1153b1688bee84ca')
    //     .subscribe((resu: any) => {
    //       console.log(resu);
    //       // this.postJsonValue = resu.result;
    //     });
    // }
}
