import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizzesSectionComponent } from './quizzes-section.component';

describe('QuizzesSectionComponent', () => {
  let component: QuizzesSectionComponent;
  let fixture: ComponentFixture<QuizzesSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuizzesSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QuizzesSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
