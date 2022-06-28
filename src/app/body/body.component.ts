import { Component, OnInit } from '@angular/core';
import { Credits } from '../model/credits';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {


  constructor() { }

  default = "/assets/mc.png";

  public credits: Credits[] = [
   {  id: 1,
    gamertag: "NOTCH",
      name: "Markus Persson",
      about: "Markus Alexej Persson, more commonly known under the alias Notch, is the creator of Minecraft and one of the founders of Mojang Studios. Such a Legend.",
      DOB: 1997,
      image: "/assets/notch.jpg",
   },
   {
    id: 2,
    gamertag: "C418",
    name: "Daniel Rosenfeld",
    about: "Daniel Rosenfeld, also known as C418, is the producer of most music tracks in Minecraft including the iconic track called SWEDEN.",
    DOB: 1989,
    image: "/assets/c418.jpg",
   },
   {
  id: 3,
  gamertag: "Mojang",
  name: "Mojang Studios",
  about:"Mojang Studios is a Swedish video game developer based in Stockholm, founded by NOTCH in 2009 to develop sandbox and survival video game Minecraft.",
  DOB: 1999,
  image: "/assets/mojang.jpg",
  },
  {
    id: 4,
    gamertag: "TLauncher",
    name: "The best minecraft launcher",
    about:"TLauncher is mainly used to play Minecraft for free, But please buy a copy when you grow up and can afford one, Until then, have fun! Remember, it matters when you enjoy, not when you have money!",
    DOB: 2000,
    image: "/assets/tlauncher.jpg",
    }

  ]

  ngOnInit(): void {
  }

}
