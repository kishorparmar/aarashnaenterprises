import { Component, AfterViewChecked, OnInit } from '@angular/core';
import * as $ from 'jquery';

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent implements OnInit {

  ngOnInit() {
    $('#myCarousel').carousel();
  }

  ngAfterViewChecked() {
    $("nav").find("li").on("click", "a", function () {
      $('.navbar-collapse').collapse('hide');
    });
  }
}
