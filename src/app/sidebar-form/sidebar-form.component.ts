import { Component, OnInit } from '@angular/core';
import { EvoSidebarService } from '@evo/ui-kit';

@Component({
    selector: 'lib-sidebar-form',
    templateUrl: './sidebar-form.component.html',
    styleUrls: ['./sidebar-form.component.css']
})
export class SidebarFormComponent implements OnInit {

    constructor(
        private sidebar: EvoSidebarService,
    ) { }

    ngOnInit() {
    }

    close() {
        this.sidebar.close('id');
    }

}
