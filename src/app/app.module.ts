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















@NgModule({
    declarations:[AppComponent,
       HomeComponent ,HeaderComponent,AboutComponent,AfirstComponent,ASecondComponent ,AthirdComponent,SidebarComponent ,
    HfirstComponent,HsecondComponent,HthirdComponent,AfourthComponent,HfourthComponent ,FooterComponent,ServiceComponent  ],
    bootstrap:[AppComponent],
    imports: [FormsModule,
         BrowserModule,
         CommonModule
         ,AppRoutingModule,
        ReactiveFormsModule,
    HttpClientModule]
})

export class AppModule{}