import { Component } from '@angular/core';
import { SideBar } from "../../../core/components/side-bar/side-bar";
import { Header } from "../../../core/components/header/header";
import { AdminRoutingModule } from "../admin-routing.module";
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-base',
  imports: [SideBar, Header,RouterOutlet,CommonModule],
  standalone: true,
  templateUrl: './admin-base.html',
  styleUrl: './admin-base.scss',
})
export class AdminBase {

}
