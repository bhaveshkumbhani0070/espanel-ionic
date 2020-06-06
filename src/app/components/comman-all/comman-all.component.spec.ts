import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CommanAllComponent } from './comman-all.component';

describe('CommanAllComponent', () => {
  let component: CommanAllComponent;
  let fixture: ComponentFixture<CommanAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommanAllComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CommanAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
