import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor() {
    const config = {
      apiKey: 'AIzaSyCv9bx0FjrFVtR5n-8Fyu_ZqoEYVBkyYYk',
      authDomain: 'angulartutoriel.firebaseapp.com',
      databaseURL: 'https://angulartutoriel.firebaseio.com',
      projectId: 'angulartutoriel',
      storageBucket: 'angulartutoriel.appspot.com',
      messagingSenderId: '727478537890',
      appId: '1:727478537890:web:04aa1f7cf6ee950e9911fb'
    };
    firebase.initializeApp(config);
  }


}
