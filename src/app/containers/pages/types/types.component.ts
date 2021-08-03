import { Component, OnInit } from '@angular/core';
import { SpecificType, Type } from 'src/app/models/types';
import { TypesService } from 'src/app/services/types.service';

@Component({
	selector: 'app-types',
	templateUrl: './types.component.html',
	styleUrls: ['./types.component.scss'],
})
export class TypesComponent implements OnInit {
	public isLoading: Boolean = false;
	public isTypeLoading: Boolean = false;
	public types: Type[];
	public specificType: SpecificType;

	constructor(private typesService: TypesService) {}

	ngOnInit(): void {
		this.getTypes();
	}

	getTypes() {
		this.isLoading = true;
		this.typesService.getTypes().subscribe((types: Type[]) => {
			this.types = types;
			this.isLoading = false;
		});
	}

	getSpecificType(id: number) {
		this.isTypeLoading = true;
		this.typesService.getSpecificType(id).subscribe((type: SpecificType) => {
			this.specificType = type;
			this.isTypeLoading = false;
			console.log(this.specificType);
		});
	}

	getNewSpecificType(name: string) {
		this.isTypeLoading = true;
		this.typesService.getTypes().subscribe((types: Type[]) => {
			const newType = types.find((type) => type.name === name);
			newType && this.getSpecificType(newType.id);
		});
	}
}
