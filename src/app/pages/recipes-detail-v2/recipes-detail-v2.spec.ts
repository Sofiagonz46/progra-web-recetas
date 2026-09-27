import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { RecipesDetailV2 } from './recipes-detail-v2';

describe('RecipesDetailV2', () => {

  let component: RecipesDetailV2;
  let fixture: ComponentFixture<RecipesDetailV2>;

  beforeEach(async () => {

    await TestBed.configureTestingModule({
      imports: [RecipesDetailV2],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            queryParams: of({})
          }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(RecipesDetailV2);

    component = fixture.componentInstance;

    fixture.detectChanges();

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});