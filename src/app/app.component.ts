import { Component } from '@angular/core';

@Component({
  selector: 'app-ProjectAngular',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  users = ['carlos', 'miguel', 'martin'];
  name: string ="prueba";
  age: number =15;

  AddUser(newuser){
    this.users.push(newuser.value);
    newuser.value='';
    newuser.focus();
    return false;
  }


  DeleteUser(user){
    for(let i = 0; i < this.users.length; i++){
      if(user == this.users[i]){
        this.users.splice(i, 1);
    }
  }
}



  title = 'ProjectAngular';
}
