import { Component, OnInit } from '@angular/core';
import { FtpHandlerService } from 'src/app/services/ftp-handler.service';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss']
})
export class MainViewComponent implements OnInit {

  constructor(private ftpHandlerService: FtpHandlerService) { }

  ngOnInit(): void {

  }

}
