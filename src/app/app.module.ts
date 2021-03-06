import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
    MatButtonModule, MatDialogModule, MatExpansionModule, MatInputModule, MatPaginatorModule, MatProgressSpinnerModule,
    MatToolbarModule
} from '@angular/material';
import {MatCardModule} from '@angular/material';


import {AppComponent} from './app.component';
import {PostCreateComponent} from './posts/post-create/post-create.component';
import {HeaderComponent} from './header/header.component';
import {PostListComponent} from './posts/post-list/post-list.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {LoginComponent} from './auth/login/login.component';
import {SignupComponent} from './auth/signup/signup.component';
import {AuthInterceptor} from './auth/auth-interceptor';
import { ErrorComponent } from './error/error.component';




@NgModule({
    declarations: [
        AppComponent,
        PostCreateComponent,
        HeaderComponent,
        PostListComponent,
        LoginComponent,
        SignupComponent,
        ErrorComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        BrowserAnimationsModule,
        MatInputModule,
        MatButtonModule,
        MatCardModule,
        MatToolbarModule,
        MatExpansionModule,
        MatProgressSpinnerModule,
        HttpClientModule,
        MatPaginatorModule,
        MatDialogModule

    ],
    providers: [{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}],
    bootstrap: [AppComponent],
    entryComponents: [ErrorComponent]
})
export class AppModule {
}
