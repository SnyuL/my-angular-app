import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { UserService } from '../../../core/services/user.service';
@Component({
  selector: 'app-child2-component',
  standalone: true,
  imports: [CommonModule,ButtonModule],
  templateUrl: './child2-component.html',
  styleUrl: './child2-component.scss'
})
export class Child2ComponentComponent {
  users: any[] = [];
  selectedUser: any = null;
  loading = true;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.loading = true;
    this.userService.getUsers().subscribe({
      next: users => {
        console.log('收到用户数据:', users); // 调试用
        this.users = users;
        this.loading = false;
      },
      error: err => {
        console.error('加载用户失败:', err);
        this.loading = false;
      }
    });
  }

  showDetail(id: number) {
    this.userService.getUser(id).subscribe({
      next: user => {
        console.log('收到用户详情:', user); // 调试用
        this.selectedUser = user;
      },
      error: err => {
        console.error('加载用户详情失败:', err);
      }
    });
  }
}
