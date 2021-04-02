import { Component, OnInit } from '@angular/core';
import { EvoSidebarService } from '@evo/ui-kit';

@Component({
    selector: 'lib-sidebar-rules',
    templateUrl: './sidebar-rules.component.html',
    styleUrls: ['./sidebar-rules.component.css']
})
export class SidebarRulesComponent implements OnInit {

    constructor(
        private sidebar: EvoSidebarService,
    ) { }

    ngOnInit() {
    }

    close() {
        this.sidebar.close();
    }

}
