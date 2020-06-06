import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TraducirComponent } from './traducir.component';

describe('TraducirComponent', () => {
  let component: TraducirComponent;
  let fixture: ComponentFixture<TraducirComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TraducirComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TraducirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
