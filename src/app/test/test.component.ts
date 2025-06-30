import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment'; // 引入环境变量
import { ButtonModule } from 'primeng/button';
@Component({
  selector: 'app-test',
  standalone: true,
  imports: [ButtonModule],
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss'
})
export class TestComponent {
  constructor(private router: Router) {}

  ngOnInit() {
    // 组件初始化时调用
    console.log("environment:", environment)
  }

  goToHome() {
    this.router.navigate(['/home']);
  }
}
