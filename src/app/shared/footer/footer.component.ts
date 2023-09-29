import { Component } from '@angular/core';
import { faTwitter, faInstagram, faFacebookSquare } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  faFacebook = faFacebookSquare;
  faInstagram = faInstagram;
  faTwitter = faTwitter;
}
