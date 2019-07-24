import 'jest';
import { HomePage } from './home';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { NavController } from 'ionic-angular';
import { By } from '@angular/platform-browser';


describe('Testing home', () => {​
    let component: HomePage;
    let fixture: ComponentFixture<HomePage>;

    const navControllerStub = {};

    beforeEach(async(() => {
        TestBed.configureTestingModule({
          schemas: [
            NO_ERRORS_SCHEMA
          ],
          declarations: [
            HomePage
          ],
          providers: [
            {provide: NavController, useValue: navControllerStub}
          ]
        }).compileComponents();
      }));
    
      beforeEach(() => {
        fixture = TestBed.createComponent(HomePage);
        component = fixture.debugElement.componentInstance;
      });

    test('should create the home page', () => {
        expect(component).toBeTruthy();
    });

    test('should show a title', () => {
        const h2: HTMLHeadingElement = fixture.debugElement.query(By.css('ion-title')).nativeElement;
        expect(h2.textContent).toContain('TODO');
    });

    test('Testing add task', () => {​
        component.task = "emir";
        component.addTask();
        expect(component.tasks).toEqual([{"isChecked": false, "name": "emir"}]);​
    });​
});