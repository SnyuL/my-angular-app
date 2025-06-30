import { Component, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { log } from 'console';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, ButtonModule, TableModule, InputTextModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  title: string = 'Welcome to My Angular App';
  isVisible: boolean = true;
  inputValue: string = '';

  constructor(private router: Router) { }

  ngOnInit() {
    // 组件初始化时调用
    console.log("home page项目初始化.....")
  }

  ngOnChanges(changes: SimpleChanges) {
    // 监听输入属性变更
    if (changes['inputProp']) {
      console.log('inputProp变更:',
        '旧值:', changes['inputProp'].previousValue,
        '新值:', changes['inputProp'].currentValue);
    }
  }

  ngAfterViewInit() {
    // 组件视图初始化后执行
    console.log('home page视图初始化完成');
  }

  ngOnDestroy() {
    // 组件销毁前执行，常用于清理订阅等
    console.log('home page组件即将销毁');
  }

  // 定义表头列配置
  cols = [
    { field: 'id', header: 'ID' },
    { field: 'name', header: 'Name' },
    { field: 'price', header: 'Price' }
  ];

  // 定义表格数据
  products = [
    { id: 1, name: 'Product A', price: 100 },
    { id: 2, name: 'Product B', price: 200 },
    { id: 3, name: 'Product C', price: 300 }
  ];

  share() {
    console.log('Share button clicked!');
    this.isVisible = !this.isVisible;
  }

  onInput(event: Event) {
    const input = event.target as HTMLInputElement;
    console.log('Input value:', input.value);
    this.inputValue = input.value;
  }

  goToTest() {
    this.router.navigate(['/test']);
  }
}
