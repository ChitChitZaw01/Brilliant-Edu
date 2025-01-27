import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrilliantEduComponent } from './brilliant-edu.component';

describe('BrilliantEduComponent', () => {
  let component: BrilliantEduComponent;
  let fixture: ComponentFixture<BrilliantEduComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrilliantEduComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrilliantEduComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
