import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { College1Page } from './college1.page';

describe('College1Page', () => {
  let component: College1Page;
  let fixture: ComponentFixture<College1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ College1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(College1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
