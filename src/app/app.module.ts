import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";


import { AppRoutingModule } from "./app.routing-module";



import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from "./home/home.component";
import { HeaderComponent } from "./header/header.component";
import { AboutComponent } from "./about/about.component";
import { AfirstComponent } from "./about/afirst/afirst.component";
import { ASecondComponent } from "./about/a-second/a-second.component";
import { AthirdComponent } from "./about/athird/athird.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { HfirstComponent } from "./home/hfirst/hfirst.component";
import { HsecondComponent } from "./home/hsecond/hsecond.component";
import { HthirdComponent } from "./home/hthird/hthird.component";
import { AfourthComponent } from "./about/afourth/afourth.component";
import { HfourthComponent } from "./home/hfourth/hfourth.component";
import { FooterComponent } from "./footer/footer.component";
import { ServiceComponent } from "./service/service.component";
import { SfirstComponent } from "./service/sfirst/sfirst.component";
import { SsecondComponent } from "./service/ssecond/ssecond.component";
import { SthirdComponent } from "./service/sthird/sthird.component";
import { SfourthComponent } from "./service/sfourth/sfourth.component";
import { SfifthComponent } from "./service/sfifth/sfifth.component";
import { BlogsComponent } from "./blogs/blogs.component";
import { BfirstComponent } from "./blogs/bfirst/bfirst.component";
import { BsecondComponent } from "./blogs/bsecond/bsecond.component";
import { BthirdComponent } from "./blogs/bthird/bthird.component";
import { CallNowComponent } from "./call-now/call-now.component";















@NgModule({
    declarations:[AppComponent,
       HomeComponent ,HeaderComponent,AboutComponent,AfirstComponent,ASecondComponent ,AthirdComponent,SidebarComponent ,
    HfirstComponent,HsecondComponent,HthirdComponent,AfourthComponent,HfourthComponent ,FooterComponent,ServiceComponent,SfirstComponent,SsecondComponent,SthirdComponent,SfourthComponent,SfifthComponent,BlogsComponent,BfirstComponent ,BsecondComponent,BthirdComponent,CallNowComponent],
    bootstrap:[AppComponent],
    imports: [FormsModule,
         BrowserModule,
         CommonModule
         ,AppRoutingModule,
        ReactiveFormsModule,
    HttpClientModule]
})

export class AppModule{}