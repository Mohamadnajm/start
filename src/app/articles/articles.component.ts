import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// import { PrimeNGConfig } from 'primeng/api';
// import { TableModule } from 'primeng/table';
@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css'],
})
export class ArticlesComponent implements OnInit {

  articles: [] =[];
  getJsonValue: any[] = [];
  showTable: boolean = true;
  product: any;
  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    this.getMethod();
  }
  // public getJsonValue: any;
  public postJsonValue: any;

  public getMethod() {
  let url = 'https://demo.appbase.ma/api/product.template/?query={id, name, standard_price,categ_id,barcode,volume}'
  url += '&session_id=' + this.sessionId

    this.http
      .get(
        'https://demo.appbase.ma/api/product.template/?session_id=3dbb0d953d5a5d617d04ee82b46c3c62bbfb4460&query={id, name, standard_price,categ_id,barcode,volume}'
      )
      .subscribe((data : any) => {
        console.log(data);
        this.getJsonValue = data.result;
      });
  }
  updateArticles(id : string) {
    let corrarticles = this.getJsonValue.find((a) => {return a.id === id});
    console.log(corrarticles)
  }
  // onEditClicked(id :string){
  //   let corrarticles = this.product.find((a: { id: string; }) => {return a.id === id});
  //   console.log(corrarticles)

  // }
  // toggleTable() {
  //   this.showTable = !this.showTable;
  // }
  
}
