# 🚀 My Angular App 启动指南

本项目为基于 Angular v18 的 Web 应用，集成了 SSR（服务器端渲染）、NgRx 状态管理、PrimeNG UI 组件库等现代前端开发工具与框架。

---

## 📦 项目基本信息

- 项目名称：`my-angular-app`
- Angular 版本：`^18.2.0`
- NgRx 状态管理：`^19.2.1`
- SSR 支持：使用 `@angular/ssr` 和 `express`
- UI 库：`PrimeNG` + `Momentum Icons`
- 构建工具：Angular CLI + NX

---

## 📁 目录结构简要（默认）

my-angular-app/
├── src/ # 源码目录
├── dist/ # 构建输出目录
├── angular.json # Angular 配置
├── package.json # 项目依赖与脚本
└── tsconfig.json # TypeScript 配置

---

## 🛠️ 启动方式

### 1. 安装依赖

```bash
npm install 或者 yarn

### 2. 本地开发模式（默认热更新）
npm start
# 等同于：ng serve --open

```

### 2.本地开发模式（默认热更新）

```json
npm start
# 等同于：ng serve --open



```

### 3.构建项目

```js
npm run build
# 等同于：ng build
```

### 4.构建并持续监听文件变化（开发调试用）

```js
npm run watch
# 等同于：ng build --watch --configuration development

```

### 5.单元测试

```js
npm test
# 等同于：ng test

```

🌐 启动 SSR（服务器端渲染）
-----------------

本项目配置了 SSR 支持，使用 `Express` 启动服务端渲染：

### 1. 构建 SSR 项目

bash

复制编辑

`npm run build`

确保 SSR 构建后的文件存在于：

pgsql

复制编辑

`dist/my-angular-app/server/server.mjs`

### 2. 启动 SSR 服务

bash

复制编辑

`npm run serve:ssr:my-angular-app`

默认监听 `http://localhost:4000` 或配置的端口。
✅ 技术栈概览

-------

| 技术/工具           | 说明                 |
| --------------- | ------------------ |
| Angular         | 应用框架，版本 `^18.2.0`  |
| @ngrx           | 状态管理库              |
| PrimeNG / Icons | UI 组件库 / 图标库       |
| SSR + Express   | 支持服务端渲染            |
| Jasmine + Karma | 单元测试框架             |
| TypeScript      | 项目开发语言，版本 `~5.5.2` |
| NX              | 多项目管理工具（monorepo）  |

如需进一步部署或自定义构建流程，建议阅读：

* [Angular 官方文档](https://angular.io/)

* [NgRx 官方文档](https://ngrx.io/)

* PrimeNG 文档(https://v17.primeng.org/)

* momentum(https://momentum.design/)

```json

如果你项目后续添加了 `SSR 构建命令`（如 `ng build --configuration=ssr`），可在文档中补充。也欢迎你告诉我更多结构细节，我可以继续完善说明。

```

# 📘 Angular 语法使用总结

---

## 📌 组件结构定义

```ts
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, ButtonModule, TableModule, InputTextModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  ...
}
```

* 使用 `standalone: true` 声明独立组件（Angular 14+ 新特性）

* 引入模块：使用 `imports` 引入所需模块（如表格、按钮、表单等）
  
  

### main.ts

```ts
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

```

| 参数             | 类型                | 必填  | 说明     |
| -------------- | ----------------- | --- | ------ |
| `AppComponent` | Type<any>         | 是   | 根组件类   |
| `appConfig`    | ApplicationConfig | 否   | 应用配置对象 |

### Angular `app.config.ts`

`app.config.ts` 是 Angular 独立组件(standalone)架构中的核心配置文件，它取代了传统 Angular 模块(`NgModule`)中的 `providers` 和配置部分。

#### 主要作用

1. ​**​集中管理应用级配置​**​
2. ​**​提供全局服务/功能​**​
3. ​**​初始化应用运行环境​**

```

```

### 0.生命周期

```ts
ngOnInit() {
  // 组件初始化时调用
}

ngOnChanges(changes: SimpleChanges) {
  // 监听输入属性变更
}

ngAfterViewInit() {
  // 组件视图初始化后执行
}

ngOnDestroy() {
  // 组件销毁前执行，常用于清理订阅等
}

```

| 生命周期钩子                        | 触发时机                                | 典型用途            | 接口名                   |
| ----------------------------- | ----------------------------------- | --------------- | --------------------- |
| ​**​ngOnChanges​**​           | 在输入属性(@Input)发生变化时调用，首次在ngOnInit前调用 | 响应输入属性的变化       | `OnChanges`           |
| ​**​ngOnInit​**​              | 在组件初始化时调用（第一轮变更检测后），只调用一次           | 初始化组件，获取初始数据    | `OnInit`              |
| ​**​ngDoCheck​**​             | 每次变更检测周期中调用                         | 自定义变更检测逻辑       | `DoCheck`             |
| ​**​ngAfterContentInit​**​    | 在组件内容投影(ng-content)初始化后调用，只调用一次     | 访问投影内容          | `AfterContentInit`    |
| ​**​ngAfterContentChecked​**​ | 每次完成组件内容投影的变更检测后调用                  | 响应投影内容的变化       | `AfterContentChecked` |
| ​**​ngAfterViewInit​**​       | 在组件视图和子视图初始化后调用                     | 访问DOM元素，初始化第三方库 | `AfterViewInit`       |
| ​**​ngAfterViewChecked​**​    | 每次完成组件视图和子视图的变更检测后调用                | 响应视图变化          | `AfterViewChecked`    |
| ​**​ngOnDestroy​**​           | 在组件销毁前调用                            | 清理资源（订阅、定时器等）   | `OnDestroy`           |

#### 执行顺序:

```json
Constructor → ngOnChanges → ngOnInit → ngDoCheck
→ ngAfterContentInit → ngAfterContentChecked
→ ngAfterViewInit → ngAfterViewChecked
→ (重复变更检测周期: ngDoCheck → ngAfterContentChecked → ngAfterViewChecked)
→ ngOnDestroy
```

### 1. 属性绑定（Property Binding）

```html
<div [id]="'home-app'"></div>
<p [style.fontSize.px]="25">{{ title }}</p>

```

使用 `[]` 将模板中的 HTML 属性绑定到组件的属性值

### 2.类和样式绑定（Class & Style Binding）

```html
<div [class]="{'line': true}"></div>
<div [class]="'line'"></div>
<div [style]="{'margin': '20px'}"></div>

```

* `[class]` 支持对象语法或字符串语法，动态控制类名

* `[style]` 支持内联样式绑定

### 3.条件渲染（*ngIf）

需要导入 import { CommonModule } from '@angular/common';

```html
<span *ngIf="isVisible">true</span>
<span *ngIf="!isVisible">false</span>

<span *ngIf="isVisible; else otherContent">true</span>
<ng-template #otherContent>
  <span>false</span>
</ng-template>

```

### 4.新语法结构指令（Angular 18+）

```html
@if (isVisible) {
  <span>true</span>
} @else {
  <span>false</span>
}

```

* Angular 18 新增语法糖：`@if...@else` 结构控制，替代 `*ngIf` + `<ng-template>` 写法

* 更接近原生控制流的结构语法

### 5.列表渲染（*ngFor 与 @for）

```html
<!-- 传统 *ngFor -->
<td *ngFor="let col of columns">
  {{ rowData[col.field] }}
</td>

<!-- Angular 18 新语法 -->
@for (col of columns; track col.field) {
  <th>{{ col.header }}</th>
}

```

* `*ngFor` 用于循环数组内容

* `@for` 是 Angular 18 的增强语法，更简洁、支持 `track by`
  
  

### 6.双向数据绑定（ngModel）

```html
<input [(ngModel)]="inputValue" />

```

* `[(ngModel)]` 用于将数据与输入控件双向绑定

* 需引入 `FormsModule
  
  

### 7.事件绑定（Event Binding）

```html
<p-button (click)="share()">btn</p-button>
<input (input)="onInput($event)" />

```

### 8.Input / Output 数据传递

#### 1.输入属性 (@Input)

**适用场景​**​：父组件向子组件传递数据

```ts
// 子组件
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `{{ message }}`
})
export class ChildComponent {
  @Input() message: string = '';
}

// 父组件
@Component({
  template: `<app-child [message]="parentMessage"></app-child>`
})
export class ParentComponent {
  parentMessage = 'Hello from parent';
}
```

##### 特点​​：

* 单向数据流（父→子）
* 支持属性绑定语法 `[prop]="value"`
* 可以添加setter监听变化： 

```ts

#### 子传父组件（@Output）

```ts
@Output() clicked = new EventEmitter<string>();

onClick() {
  this.clicked.emit('child clicked');
}

```

#### 2. 输出属性 (@Output)

子组件向父组件传递事件/数据

```ts
// 子组件
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `<button (click)="sendMessage()">发送</button>`
})
export class ChildComponent {
  @Output() messageEvent = new EventEmitter<string>();

  sendMessage() {
    this.messageEvent.emit('Hello from child');
  }
}

// 父组件
@Component({
  template: `<app-child (messageEvent)="receiveMessage($event)"></app-child>`
})
export class ParentComponent {
  receiveMessage(msg: string) {
    console.log(msg); // 输出: Hello from child
  }
}
```

##### ​特点​​：

* 使用 `EventEmitter` 触发事件
* 父组件通过 `(event)="handler($event)"` 监听
* 事件冒泡机制

#### 3.服务共享 (Service)

任意组件间共享数据（特别是非父子关系的组件）

```ts
// 共享服务
@Injectable({ providedIn: 'root' })
export class DataService {
  private dataSubject = new BehaviorSubject<string>('初始值');
  currentData = this.dataSubject.asObservable();

  updateData(data: string) {
    this.dataSubject.next(data);
  }
}

// 组件A (发送数据)
constructor(private dataService: DataService) {}

sendData() {
  this.dataService.updateData('新数据');
}

// 组件B (接收数据)
currentData: string = '';

constructor(private dataService: DataService) {
  this.dataService.currentData.subscribe(data => {
    this.currentData = data;
  });
}
```

 **特点​**​：

* 使用 RxJS 的 `Subject` 或 `BehaviorSubject`
* 需要取消订阅避免内存泄漏
* 适合复杂应用状态管理
  
  

#### 4.本地变量引用 (#ref)

​父组件直接访问子组件的属性和方法

```ts
// 父组件
@Component({
  template: `
    <app-child #childRef></app-child>
    <button (click)="childRef.childMethod()">调用子组件方法</button>
  `
})
export class ParentComponent {}

// 子组件
export class ChildComponent {
  public childMethod() {
    console.log('子组件方法被调用');
  }
  private doSomething() {
    // 私有方法，外部无法直接调用
  }
}
```

```ts

```

##### 特点​​：

* 模板中直接通过 `#ref` 访问
* 不需要类中的显式声明
* 仅限于模板中使用
  
  
  
  

### 9.📦 管道（Pipe）

用于模板数据转换的强大工具，它们主要用于在显示数据前对其进行格式化或转换。以下是管道的主要用途和实际应用场景

```html
<!-- 日期格式化 -->
<p>{{ today | date:'yyyy-MM-dd' }}</p>

<!-- 自定义管道 -->
<p>{{ value | customPipe }}</p>

```

```ts
//自定义管道：


@Pipe({ name: 'customPipe' })
export class CustomPipe implements PipeTransform {
  transform(value: string): string {
    return value.toUpperCase();
  }
}

```

### 10.双向绑定表单(Reactive Forms)

#### 10.1 基本模块导入

需导入 `ReactiveFormsModule`

```ts
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    ReactiveFormsModule
  ]
})
export class AppModule { }
```

#### 10.2 单个表单控件

```ts
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-name-editor',
  template: `
    <label>姓名: </label>
    <input type="text" [formControl]="name">
  `
})
export class NameEditorComponent {
  name = new FormControl('初始值');
}
```

#### 10.3 表单组(FormGroup)

```ts
import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-profile-editor',
  template: `
    <form [formGroup]="profileForm">
      <label>姓名: <input type="text" formControlName="firstName"></label>
      <label>姓氏: <input type="text" formControlName="lastName"></label>
    </form>
  `
})
export class ProfileEditorComponent {
  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl('')
  });
}
```

### 11.📥 模板引用变量

```html
<input #inputEl />
<button (click)="log(inputEl.value)">Log</button>

```

```ts
log(val: string) {
  console.log(val);
}

```

### 12.ngSwitch（条件多分支）

```html
<div [ngSwitch]="status">
  <p *ngSwitchCase="'success'">Success</p>
  <p *ngSwitchCase="'error'">Error</p>
  <p *ngSwitchDefault>Unknown</p>
</div>

```

### 13.异步数据与 async 管道

```ts
data$: Observable<User[]> = this.userService.getUsers();

```

```html
<ul>
  <li *ngFor="let user of data$ | async">{{ user.name }}</li>
</ul>

```



### 14.常用指令与功能导入指南

#### 14.1.结构指令 (Structural Directives)

| 指令               | 导入方式                                                                        | 使用示例                                                  |
| ---------------- | --------------------------------------------------------------------------- | ----------------------------------------------------- |
| *ngIf            | `import { NgIf } from '@angular/common'`                                    | `<div *ngIf="condition">`                             |
| *ngFor           | `import { NgFor } from '@angular/common'`                                   | `<div *ngFor="let item of items">`                    |
| *ngSwitchCase    | `import { NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common'` | `<div [ngSwitch]="value"><div *ngSwitchCase="case1">` |
| *ngSwitchDefault | 同上                                                                          | `<div *ngSwitchDefault>`                              |

#### 14.2.属性指令 (Attribute Directives)

| 指令      | 导入方式                                           | 使用示例                                     |
| ------- | ---------------------------------------------- | ---------------------------------------- |
| ngClass | `import { NgClass } from '@angular/common'`    | `<div [ngClass]="{'active': isActive}">` |
| ngStyle | `import { NgStyle } from '@angular/common'`    | `<div [ngStyle]="{'color': textColor}">` |
| ngModel | `import { FormsModule } from '@angular/forms'` | `<input [(ngModel)]="name">`             |

#### 14.3.表单

| 功能            | 导入方式                                                      | 使用示例                               |
| ------------- | --------------------------------------------------------- | ---------------------------------- |
| ReactiveForms | `import { ReactiveFormsModule } from '@angular/forms'`    | `this.form = new FormGroup({...})` |
| FormControl   | `import { FormControl, FormGroup } from '@angular/forms'` | `name = new FormControl('')`       |
| FormsModule   | `import { FormsModule } from '@angular/forms'`            | 模板驱动表单所需                           |

#### 14.4.路由

| 功能               | 导入方式                                                 | 使用示例                                               |
| ---------------- | ---------------------------------------------------- | -------------------------------------------------- |
| RouterLink       | `import { RouterLink } from '@angular/router'`       | `<a routerLink="/path">`                           |
| RouterLinkActive | `import { RouterLinkActive } from '@angular/router'` | `<a routerLink="/path" routerLinkActive="active">` |
| RouterOutlet     | `import { RouterOutlet } from '@angular/router'`     | `<router-outlet></router-outlet>`                  |

#### 14.5.管道

| 管道            | 导入方式                                              | 使用示例                       |
| ------------- | ------------------------------------------------- | -------------------------- |
| DatePipe      | `import { DatePipe } from '@angular/common'`      | `{{ dateValue \| date }}`  |
| UpperCasePipe | `import { UpperCasePipe } from '@angular/common'` | `{{ text \| uppercase }}`  |
| LowerCasePipe | `import { LowerCasePipe } from '@angular/common'` | `{{ text \| lowercase }}`  |
| DecimalPipe   | `import { DecimalPipe } from '@angular/common'`   | `{{ number \| number }}`   |
| CurrencyPipe  | `import { CurrencyPipe } from '@angular/common'`  | `{{ amount \| currency }}` |
| PercentPipe   | `import { PercentPipe } from '@angular/common'`   | `{{ ratio \| percent }}`   |

#### 14.6.HTTP 客户端

```ts
import { HttpClientModule } from '@angular/common/http';

// 在独立组件中改为：
import { provideHttpClient } from '@angular/common/http';
// 在app.config.ts中提供 
```

#### 14.7.创建共享导入组

```ts
// 对于大型项目，可以创建共享的导入数组
import { 
  NgIf, NgFor, NgClass, NgStyle,
  DatePipe, UpperCasePipe, DecimalPipe
} from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';

export const SHARED_IMPORTS = [
  NgIf, NgFor, NgClass, NgStyle,
  DatePipe, UpperCasePipe, DecimalPipe,
  RouterLink, RouterOutlet
];
```

```ts
// 在组件中使用
import { SHARED_IMPORTS } from './shared-imports';

@Component({
  standalone: true,
  imports: [SHARED_IMPORTS, /* 其他特有导入 */]
})
export 
```

#### 备注：

```ts
import { CommonModule } from '@angular/common'; //所有内置结构指令​​、所有内置属性指令、所有内置管道​​
import { FormsModule} from '@angular/forms';//ngModel 双向绑定、模板驱动表单的基础功能
import { ReactiveFormsModule } from '@angular/forms';//响应式表单
import { RouterModule } from '@angular/router';//所有路由指令
```

## Angular 组件装饰器配置

### 核心配置项

```ts
@Component({
  // 必须项
  selector: 'app-component',  // 组件标签名，格式：app-xxx
  templateUrl: './path.html', // 模板路径（或使用template内联）
  styleUrl: './path.scss',     // 单样式文件（或styleUrls多文件）

  // 重要选项
  standalone: true,          // 是否独立组件（Angular14+）
  imports: [CommonModule],    // 独立组件需声明的依赖模块
  changeDetection: ChangeDetectionStrategy.OnPush, // 性能优化策略

  // 高级选项
  providers: [MyService],     // 组件级服务
  animations: [myAnimation],  // 动画配置
  encapsulation: ViewEncapsulation.ShadowDom // 样式封装方式
})
```

### 完整配置示例

| 配置项                     | 示例值                                             | 说明                                                   |
| ----------------------- | ----------------------------------------------- | ---------------------------------------------------- |
| ​**​selector​**​        | `'app-advanced'`                                | 组件选择器标签名，使用短横线命名法（kebab-case）                        |
| ​**​standalone​**​      | `true`                                          | 是否为独立组件（Angular 14+特性），`true`时需手动管理依赖                |
| ​**​imports​**​         | `[CommonModule, FormsModule]`                   | 独立组件必须显式声明的依赖模块                                      |
| ​**​templateUrl​**​     | `'./advanced.component.html'`                   | 外部模板文件路径（推荐复杂组件使用）                                   |
| ​**​styleUrls​**​       | `['./advanced.component.scss', './theme.scss']` | 多个样式文件路径数组（单文件用`styleUrl`）                           |
| ​**​changeDetection​**​ | `ChangeDetectionStrategy.OnPush`                | 变更检测策略，可选`Default`（默认）或`OnPush`（性能优化）                |
| ​**​encapsulation​**​   | `ViewEncapsulation.ShadowDom`                   | 样式封装模式：`Emulated`（默认模拟）/`None`（全局）/`ShadowDom`（原生隔离） |
| ​**​providers​**​       | `[MyService]`                                   | 组件级服务提供者（仅对当前组件及其子组件可见）                              |
| ​**​animations​**​      | `[myAnimation]`                                 | 动画配置（需配合`BrowserAnimationsModule`使用）                 |

## Angular Router

### 路由模块设置

```ts

import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TestComponent } from './test/test.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'test/:id', component: TestComponent },
];t },
];
```

### 路由出口

```html
<!-- 在app.component.html中 -->
<router-outlet></router-outlet>
```

### 模板导航

```html
<a routerLink="/home">首页</a>
```

### 编程式导航

```ts
import { Router } from '@angular/router';

constructor(private router: Router) {}

navigateToHome(id: number) {
  this.router.navigate(['/test', id]);
}

  // 带查询参数
 goToHome() {
    this.router.navigate(['/home'], { 
      fragment: 'test'
    });
  }
}
```

### 路径参数

```ts
import { ActivatedRoute } from '@angular/router';

constructor(private route: ActivatedRoute) {}

ngOnInit() {
  // 快照方式
  const id = this.route.snapshot.paramMap.get('id');

  // 观察方式
  this.route.paramMap.subscribe(params => {
    this.productId = params.get('id');
  });
}
```

```ts
//查询参数

this.route.queryParamMap.subscribe(params => {
  this.page = params.get('page');
});
```

### 惰性加载

```ts
const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  }
];
```

### 路由守卫

```ts
// 认证守卫
@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(): boolean {
    return this.authService.isLoggedIn();
  }
}

// 在路由中使用
{ path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] }
```

### 路由数据传递

```ts
{ 
  path: 'settings', 
  component: SettingsComponent,
  data: { title: '系统设置' } 
}
```

### 辅助路由(命名路由)

```ts
<!-- 主路由出口 -->
<router-outlet></router-outlet>

<!-- 辅助路由出口 -->
<router-outlet name="sidebar"></router-outlet>
```

```ts
const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    children: [
      { 
        path: 'sidebar', 
        component: SidebarComponent,
        outlet: 'sidebar' 
      }
    ]
  }
];
```


