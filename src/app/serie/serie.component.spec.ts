/* tslint:disable:no-unused-variable */
import { waitForAsync , ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';
import { HttpClientModule } from '@angular/common/http';
import { SerieComponent } from './serie.component';
import { SerieService } from './serie.service';
import { Serie } from './serie';

describe('SerieComponent', () => {
 let component: SerieComponent;
 let fixture: ComponentFixture<SerieComponent>;
 let debug: DebugElement;

 beforeEach(waitForAsync (() => {
   TestBed.configureTestingModule({
     imports: [HttpClientModule],
     declarations: [ SerieComponent ],
     providers: [ SerieService ]
   })
   .compileComponents();
 }));


 beforeEach(() => {
   fixture = TestBed.createComponent(SerieComponent);
   component = fixture.componentInstance;
   component.series = [
    new Serie(
      faker.number.int(),
      faker.lorem.sentence(),
      faker.company.name(),
      faker.number.int({ min: 1, max: 10 }), 
      faker.lorem.paragraph(),
      faker.internet.url(), 
      faker.image.url() 
    )
   ]

   fixture.detectChanges();
   debug = fixture.debugElement;
 });

 it('should create', () => {
   expect(component).toBeTruthy();
 });

 it("Component has a table", () => {
   expect(debug.query(By.css("tbody")).childNodes.length).toBeGreaterThan(0);
 });

 it('should have a td element with the series name', () => {
  const td = debug.query(By.css('td:nth-child(2)'));
  const content: HTMLElement = td.nativeElement;
  expect(content.textContent).toEqual(component.series[0].name);
  });
}); 