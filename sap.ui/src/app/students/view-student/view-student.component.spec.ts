import { HttpClient } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { ViewStudentComponent } from './view-student.component';

describe('ViewStudentComponent', () => {
  let component: ViewStudentComponent;
  let fixture: ComponentFixture<ViewStudentComponent>;
  let http: any;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewStudentComponent ],
      providers : [ { provide: HttpClient , useValue: http },
      { provide: ActivatedRoute, useValue: { paramMap: Observable.of(convertToParamMap({id: 1})) },],
      imports: [AppRoutingModule,ReactiveFormsModule,FormsModule],
      schemas :[ NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


});
