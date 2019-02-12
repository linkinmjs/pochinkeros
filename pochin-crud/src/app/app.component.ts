import { Component } from '@angular/core';
import { User } from './models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
	userArray: User[] = [
		{ id: 1, nick: "Koman", correo:"linkin@pochinkeros.com",contrasena:"weaFomeQlia",nacionalidad:"Argentino",celular:"123456" },
		{ id: 2, nick: "SmartMono", correo:"lesiuk@pochinkeros.com",contrasena:"weaFomeQlia",nacionalidad:"Argentino",celular:"123456" }
	]

	selectedUser: User = new User();

	addOrEdit(){
		if(this.selectedUser === 0){
			this.selectedUser.id = this.userArray.length + 1;
			this.userArray.push(this.selectedUser);
		}		
		this.selectedUser = new User(); 
	}

	openForEdit(user: User){
		this.selectedUser = user;
	}

	delete() {
		if(confirm("Estas seguro que deseas eliminarlo?")) {
			this.userArray = this.userArray.filter(x => x != this.selectedUser );
			this.selectedUser = new User();
		}
	}

}
