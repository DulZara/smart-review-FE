import { Component } from '@angular/core';
import { SideBar } from "../side-bar/side-bar";
import { Header } from "../header/header";
import { AdminRoutingModule } from "../../../modules/admin/admin-routing.module";
import { TeacherBaseComponent } from '../../../modules/teacher/components/teacher-base/teacher-base.component';

@Component({
  // standalone: true,
  selector: 'app-main-layout',
  imports: [AdminRoutingModule],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.scss',
})
export class MainLayout {

}
