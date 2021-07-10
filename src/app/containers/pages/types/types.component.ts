import { Component, OnInit } from '@angular/core';
import { SpecificType, Type } from 'src/app/models/types';
import { TypesService } from 'src/app/services/types.service';

@Component({
  selector: 'app-types',
  templateUrl: './types.component.html',
  styleUrls: ['./types.component.scss']
})
export class TypesComponent implements OnInit {
  public isLoading: Boolean = false;
  public types: Type[];
  public specificType: SpecificType;

  constructor(
    private typesService: TypesService,
  ) { }

  ngOnInit(): void {
    this.getTypes();
  }

  getTypes(){
    this.isLoading = true;
    this.typesService.getTypes().subscribe((types: Type[]) => {
      this.types = types;
      this.isLoading = false;
    });
  }

  getSpecificType(id: number){
    this.isLoading = true;
    this.typesService.getSpecificType(id).subscribe((type: SpecificType) => {
      this.specificType = type;
      this.isLoading = false;
      console.log(this.specificType)
    });
  }
}
