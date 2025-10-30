import { Component } from '@angular/core';
import { AdminDataService } from '../../core/services/admin-data.service';
import { MessageThreadPreview } from '../../core/models/message.model';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-admin-messages',
  // standalone: true,
  imports: [NgFor],
  templateUrl: './admin-messages.component.html',
  styleUrls: ['./admin-messages.component.css'],
})
export class AdminMessagesComponent {
  threads: MessageThreadPreview[] = [];

  constructor(private data: AdminDataService) {
    this.threads = data.getMessageThreads();
  }
}
