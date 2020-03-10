import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TaskListItemPage } from './task-list-item.page';

describe('TaskListItemPage', () => {
  let component: TaskListItemPage;
  let fixture: ComponentFixture<TaskListItemPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskListItemPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TaskListItemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
