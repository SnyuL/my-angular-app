import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment'; // 引入环境变量
import { ButtonModule } from 'primeng/button';
import {Child1ComponentComponent} from "../test/components/child1-component/child1-component"
import {Child2ComponentComponent} from "../test/components/child2-component/child2-component"
@Component({
  selector: 'app-test',
  standalone: true,
  imports: [ButtonModule,Child1ComponentComponent,Child2ComponentComponent],
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
    this.router.navigate(['/home'], { 
      fragment: 'test'
    });
  }
}
