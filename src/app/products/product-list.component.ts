import { Component, HostListener, OnInit, ElementRef } from '@angular/core';
import { IProduct, Product } from './product';
import { ProductService } from './product.service'
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { filter, map } from "rxjs/operators";
declare var jQuery: any;
declare function wogaaStart() : any; 

@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{
    

pageTitle: string = 'Product List';
imageMargin: number = 2;
imageWidth: number = 50;
showImage: boolean = false;
errorMessage: string;
//listFilter: string = 'cart';
_listFilter: string;
idTokenEnc?: string;

get listFilter(): string{
    return this._listFilter;
}
set listFilter(value: string){
    this._listFilter = value;
    this.filteredProducts = this.listFilter ? this.performFilter(this._listFilter) : this.products;
}

// constructor(private productService: ProductService, private titleService: Title,
//      private router: Router) {
      
// }
constructor (private productService: ProductService, private elRef:ElementRef,private titleService: Title, private router: Router) {
    
   //this.titleService.setTitle(' - Website Name');
        
}

setDocTitle(title: string) {
    console.log('current title:::::' + this.titleService.getTitle());
    this.titleService.setTitle(title);
 }

 btnClick(): void {
    this.router.navigate(['./welcome'], { queryParams: { formId: JSON.parse(localStorage.getItem('id_token')) } });
 }

filteredProducts: IProduct[];
products: IProduct[];

toggleImage(): void{
    this.showImage = !this.showImage;
}

@HostListener("window:CallAngularService")
onCallAngularService() {
  // Run your service call here
  console.log("It works!");
}
public ngOnInit(): void {
   
    this.idTokenEnc = 'MTgwMDY2MTM1Qw%3D%3D';
    localStorage.setItem("id_token", JSON.stringify(this.idTokenEnc));
    jQuery("#myselector").style="display: none;";
    jQuery(document).ready(function(){
        alert("works");
        document.title =" My test Title";
        wogaaStart();
    });

        //this.titleService.setTitle("MCS");
     
  
    //console.log('Muthu');   

    this.productService.getProducts().subscribe({
        next: products => {this.products = products;
            this.filteredProducts = this.products;
        },
        error: err => this. errorMessage = err
    });
    //this.filteredProducts = this.products;
}

performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: IProduct) =>
    product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
}

ngAfterContentInit() {
    // assume dynamic HTML was added before
    this.elRef.nativeElement.querySelector('#tradelane').addEventListener('change', this.tradelanechange.bind(this));
  }

  tradelanechange(submission:any){
    if (submission !== undefined) {
      console.log(submission.target.value);
    }
  }
  
onRatingClicked(message: string): void{
this.pageTitle = 'Product List' + message;
}

}