import { Component, OnInit } from "@angular/core";
import * as firebase from "firebase/app";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  loadedFeature = "recipe";

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    firebase.initializeApp({
      apiKey: "AIzaSyA0Ib1vAW4MB4KdDuG6tcmQ151qky0wnUU",
      authDomain: "recipe-a4b60.firebaseapp.com"
    });
  }

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
