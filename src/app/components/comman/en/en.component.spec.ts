import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EnComponent } from './en.component';

describe('EnComponent', () => {
  let component: EnComponent;
  let fixture: ComponentFixture<EnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
