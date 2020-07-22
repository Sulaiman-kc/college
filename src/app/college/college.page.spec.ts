import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CollegePage } from './college.page';

describe('CollegePage', () => {
  let component: CollegePage;
  let fixture: ComponentFixture<CollegePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollegePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CollegePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
