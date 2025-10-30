import { Component } from '@angular/core';
import { AdminRoutingModule } from "../../../admin/admin-routing.module";
import { Header } from "../../../../core/components/header/header";
import { SideBar } from "../../../../core/components/side-bar/side-bar";

@Component({
  selector: 'app-teacher-base',
  // standalone: true,
  // imports: [],
  templateUrl: './teacher-base.component.html',
  styleUrls:[ './teacher-base.component.scss'],
  imports: [AdminRoutingModule, Header, SideBar]
})
export class TeacherBaseComponent {

}
