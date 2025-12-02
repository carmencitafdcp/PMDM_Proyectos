import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication-service';
import { CreateSessionDto } from '../../models/dto/create-session.dto';

@Component({
  selector: 'app-create-session',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './create-session.html',
  styleUrls: ['./create-session.css'],
})
export class CreateSession implements OnInit {
  loading = true;

  constructor(
    private route: ActivatedRoute,
    private authenticationService: AuthenticationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      const approved = params['approved'];
      const requestToken = params['request_token'];

      if (!requestToken) {
        this.loading = false;
        return;
      }

      const sessionDto = new CreateSessionDto(requestToken);
      localStorage.setItem('request_token', requestToken);

      if (approved === 'true') {
        this.authenticationService.createSession(sessionDto).subscribe((resp) => {
          localStorage.setItem('session_id', resp.session_id);

          this.authenticationService.createAccount().subscribe((accountResp) => {
            localStorage.setItem('account_id', accountResp.id.toString());
            this.router.navigate(['/']);
          });
        });
      } else {
        this.loading = false;
      }
    });
  }
}