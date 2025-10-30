import { Component } from '@angular/core';
import { RouterModule, RouterOutlet, RouterLink } from '@angular/router';
import { MatIconModule, MatIcon } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { NgForm } from '@angular/forms';
import { JwtService } from '../../service/jwt-service';

@Component({
  selector: 'app-side-bar',
  imports: [MatIcon, CommonModule, RouterLink],
  templateUrl: './side-bar.html',
  styleUrl: './side-bar.scss',
})
export class SideBar {
  expandedSection: string | null = null;
  userRole: string | null = null;
  constructor(private jwtService: JwtService) {}
  ngOnInit(): void {
    this.userRole = this.jwtService.getRole();  
    console.log("role",this.userRole);
    
  }
  toggle(section: string): void {
    this.expandedSection = this.expandedSection === section ? null : section;
  }

  isOpen(section: string): boolean {
    return this.expandedSection === section;
  }
}
