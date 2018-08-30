import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { AngularFireModule } from 'angularfire2';
import {AngularFireAuthModule} from 'angularfire2/auth';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LandpageComponent } from './landpage/landpage.component';
import { HomeComponent } from './home/home.component';
import { NewnewsComponent } from './newnews/newnews.component';
import { OldnewsComponent } from './oldnews/oldnews.component';
import { NewrequestComponent } from './newrequest/newrequest.component';
import { OldrequestComponent } from './oldrequest/oldrequest.component';
import { NewcomplaintComponent } from './newcomplaint/newcomplaint.component';
import { OldcomplaintComponent } from './oldcomplaint/oldcomplaint.component';
import { NewmaintenanceComponent } from './newmaintenance/newmaintenance.component';
import { OldmaintenanceComponent } from './oldmaintenance/oldmaintenance.component';
import { SignupComponent } from './signup/signup.component';

import {DataService} from './data.service';
import {AuthService} from './service/auth.service';
import { NewMaintenanceViewPageComponent } from './new-maintenance-view-page/new-maintenance-view-page.component';
import { NewRequestViewpageComponent } from './new-request-viewpage/new-request-viewpage.component';
import { NewComplaintViewPageComponent } from './new-complaint-view-page/new-complaint-view-page.component';



var config = {
  apiKey: "AIzaSyD-tiwmRUCcS1cgrQJDlLsYNRl5TpWQdr8",
  authDomain: "flatsafetyweb.firebaseapp.com",
  databaseURL: "https://flatsafetyweb.firebaseio.com",
  projectId: "flatsafetyweb",
  storageBucket: "flatsafetyweb.appspot.com",
  messagingSenderId: "972829941535"
};


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LandpageComponent,
    HomeComponent,
    NewnewsComponent,
    OldnewsComponent,
    NewrequestComponent,
    OldrequestComponent,
    NewcomplaintComponent,
    OldcomplaintComponent,
    NewmaintenanceComponent,
    OldmaintenanceComponent,
    SignupComponent,
    NewMaintenanceViewPageComponent,
    NewRequestViewpageComponent,
    NewComplaintViewPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(config),
    HttpModule,
    RouterModule.forRoot([
      { path:'',pathMatch:'full',redirectTo:'login' },
      { path:'login',component:LoginComponent},
      { path:'signup',component:SignupComponent},
      { path:'landpage',component:LandpageComponent,
    children:[
      { path:'',pathMatch:'full',redirectTo:'home'},
      { path:'home',component:HomeComponent},
      { path:'newnews',component:NewnewsComponent},
      { path:'oldnews',component:OldnewsComponent},
      { path:'newcomplaint',component:NewcomplaintComponent},
      { path:'oldcomplaint',component:OldcomplaintComponent},
      { path:'newrequest',component:NewrequestComponent},
      { path:'oldrequest',component:OldrequestComponent},
      { path:'newmaintenance',component:NewmaintenanceComponent},
      { path:'oldmaintenance',component:OldmaintenanceComponent},
      { path:'newmaintenanceviewpage/:id',component:NewMaintenanceViewPageComponent},
      { path:'newrequestviewpage/:id',component:NewRequestViewpageComponent},
      { path:'newcomplaintviewpage/:id',component:NewComplaintViewPageComponent}
    ]},
       ])

    
  ],
  
  providers: [DataService,
              AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }

<<<<<<< HEAD
/*export const firebaseConfig = {
  apikey:'',
  authDomain:'',
  databaseURL:'',
  storageBucket:'',
  messagingSenderId:''
};
*/
=======
// export const firebaseConfig = {
//   apikey:'',
//   authDomain:'',
//   databaseURL:'',
//   storageBucket:'',
//   messagingSenderId:''
// };
>>>>>>> 8bfd58108f447282b88f30b886b64ef0c46f1323
