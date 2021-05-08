import { Component ,OnInit} from '@angular/core';
import { faFacebook, faInstagram ,faLinkedinIn,faTwitter } from '@fortawesome/free-brands-svg-icons';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  faFacebook = faFacebook
  faInstagram = faInstagram
  faLinkedIn = faLinkedinIn
  faTwitter = faTwitter
  constructor(){}
  
  ngOnInit(): void {
 }}
