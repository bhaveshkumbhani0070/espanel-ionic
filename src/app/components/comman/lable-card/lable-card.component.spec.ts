import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LableCardComponent } from './lable-card.component';

describe('LableCardComponent', () => {
  let component: LableCardComponent;
  let fixture: ComponentFixture<LableCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LableCardComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LableCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
