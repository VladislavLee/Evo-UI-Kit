import { Component } from '@angular/core';
import { EvoSidebarService } from '@evo/ui-kit';
import { SidebarFormComponent } from './sidebar-form/sidebar-form.component';
import { SidebarRulesComponent } from './sidebar-rules/sidebar-rules.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {

    id = 'id';

    constructor(
        private sidebar: EvoSidebarService
    ) {}

    openWithRoot() {
        this.sidebar.open({
            component: SidebarRulesComponent,
        });
    }

    openWithExplicitHost() {
        this.sidebar.open(this.id, {
            component: SidebarFormComponent,
        });
    }
}
