import { Component } from '@angular/core';
import { Header } from "../../../../core/components/header/header";
import { SideBar } from "../../../../core/components/side-bar/side-bar";
import { TeacherRoutingModule } from '../../teacher-routing.module';
import { AdminRoutingModule } from '../../../admin/admin-routing.module';

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
