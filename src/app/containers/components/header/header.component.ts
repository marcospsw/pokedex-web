import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
	selector: "app-header",
	templateUrl: "./header.component.html",
	styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
	@Input() selected: string = '';
	public inicio = false;
	public sobreMim = false;
	public carreira = false;
	public portifolio = false;
	public contato = false;


	constructor(private router: Router) {}

	clickToGo(selected: string) {
		this.router.navigate([selected]);
	}

	headerFocus(selected: string){
		switch (selected) {
			case 'inicio':
				this.inicio = true;
			break;
			case 'sobre-mim':
				this.sobreMim = true;
			break;
			case 'carreira':
				this.carreira = true;
			break;
			case 'portifolio':
				this.portifolio = true;
			break;
			case 'contato':
				this.contato = true;
			break;
			default:
			break;
		}
	}



	ngOnInit(): void{
		this.headerFocus(this.selected);
	}
}
