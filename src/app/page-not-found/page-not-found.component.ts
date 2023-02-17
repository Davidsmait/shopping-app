import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Data} from "@angular/router";

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {

  messageRoute: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data
      .subscribe(
        (data: Data) => {
          this.messageRoute = data['message'];
          console.log(data['message'])
        }
      )
  }

}
