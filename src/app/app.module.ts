import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EvoUiKitModule, EvoButtonModule, EvoSidebarModule, EvoSidebarService } from '@evo/ui-kit';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarRulesComponent } from './sidebar-rules/sidebar-rules.component';
import { SidebarFormComponent } from './sidebar-form/sidebar-form.component';

@NgModule({
    declarations: [
        AppComponent,
        SidebarRulesComponent,
        SidebarFormComponent,
   ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        EvoUiKitModule,
        EvoSidebarModule,
        EvoButtonModule,
    ],
    providers: [
        EvoSidebarService
    ],
    bootstrap: [AppComponent],
    schemas: [],
})
export class AppModule {
}
