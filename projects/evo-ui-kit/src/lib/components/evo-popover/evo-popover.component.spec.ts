import { async, ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';
import { EvoPopoverComponent } from './index';
import { Component, ViewChild } from '@angular/core';
import { EvoUiClassDirective } from '../../directives/';

const initialPosition = 'right';

@Component({
    selector: 'evo-host-component',
    template: `
        <evo-popover [position]="position">
            <p style="max-width: 360px">Some text content...<br>
                <a href="https://evotor.ru" target="_blank">Some link</a>
            </p>
            <p popover-body>Some popover text...<br>
                <a href="https://evotor.ru" target="_blank">Some link</a>
            </p>
        </evo-popover>`,
})
class TestHostComponent {
    @ViewChild(EvoPopoverComponent) popoverComponent: EvoPopoverComponent;
    position = initialPosition;
}

describe('EvoPopoverComponent', () => {
    let testHostComponent: TestHostComponent;
    let testHostFixture: ComponentFixture<TestHostComponent>;
    let popoverComponent: EvoPopoverComponent;
    let tipEl: HTMLElement;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                EvoPopoverComponent,
                TestHostComponent,
                EvoUiClassDirective,
            ],
        }).compileComponents();
    }));

    beforeEach(() => {
        testHostFixture = TestBed.createComponent(TestHostComponent);
        testHostComponent = testHostFixture.componentInstance;
        popoverComponent = testHostComponent.popoverComponent;
        tipEl = testHostFixture.nativeElement.querySelector('.evo-popover__tip');
    });

    it('should not be visible after construction', () => {
        expect(testHostComponent.popoverComponent.show).toBeFalsy();
    });

    it('should display content when hovered', () => {
        testHostComponent.popoverComponent.onEnter();
        testHostFixture.detectChanges();
        expect(tipEl.classList.contains('evo-popover__tip_visible')).toBeTruthy();
    });

    it('should hide content when mouse leave after 100ms', fakeAsync(() => {
        testHostComponent.popoverComponent.show = true;
        testHostComponent.popoverComponent.onLeave();
        tick(100);
        testHostFixture.detectChanges();
        expect(tipEl.classList.contains('evo-popover__tip_visible')).toBeFalsy();
    }));

    it(`should have attribute '[data-popper-placement="${initialPosition}"]'`, fakeAsync(() => {
        testHostComponent.popoverComponent.onEnter();
        testHostFixture.detectChanges();
        tick(100);
        expect(popoverComponent['placement']).toEqual(initialPosition);
        expect(testHostFixture.nativeElement.querySelector('.evo-popover__tip').getAttribute('data-popper-placement'))
            .toEqual(initialPosition);
    }));

    it(`should unsubscribe from updates after destroy'`, fakeAsync(() => {
        popoverComponent.ngOnDestroy();
        const subscriptions$ = popoverComponent['subscriptions$'];
        expect(subscriptions$.observers.length).toEqual(0);
        expect(subscriptions$.isStopped).toEqual(true);
    }));

    it(`should create new instance after position update'`, fakeAsync(() => {
        const firstInstance = popoverComponent['popper'];
        testHostComponent.position = 'bottom-end';
        testHostFixture.detectChanges();
        expect(firstInstance === popoverComponent['popper']).toBeFalsy();
    }));
});
