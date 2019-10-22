import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TabisiPage } from './tabisi.page';

describe('TabisiPage', () => {
  let component: TabisiPage;
  let fixture: ComponentFixture<TabisiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TabisiPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TabisiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
