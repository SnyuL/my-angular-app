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

//自动打开浏览器访问 http://localhost:4200

//适用于前端页面开发调试

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

📚 模板语法用法总结
-----------

### 0.📌 生命周期钩子（Lifecycle Hooks

```js
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

##### 父传子组件（@Input）

```ts
@Input() title: string = '';
```

```cshtml
<app-child [title]="'Hello from parent'"></app-child>

```

##### 子传父组件（@Output）

```ts
@Output() clicked = new EventEmitter<string>();

onClick() {
  this.clicked.emit('child clicked');
}

```

```html
<app-child (clicked)="handleClick($event)"></app-child>
```

### 9.📦 管道（Pipe）

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

### 10.双向绑定表单（Reactive Forms

```ts
form: FormGroup;

constructor(private fb: FormBuilder) {
  this.form = this.fb.group({
    name: [''],
    age: [null],
  });
}

```

```html
<form [formGroup]="form">
  <input formControlName="name" />
  <input formControlName="age" type="number" />
</form>

```

需导入 `ReactiveFormsModule`

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

### 14.路由跳转与参数传递

```ts
constructor(private router: Router) {}

goDetail(id: number) {
  this.router.navigate(['/detail', id]);
}

```

```ts

// detail.component.ts
constructor(private route: ActivatedRoute) {
  this.route.params.subscribe(params => {
    console.log(params['id']);
  });
}

```

### 15.路由守卫（CanActivate）

```ts
@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(): boolean {
    return isLoggedIn();
  }
}

```

```ts
{
  path: 'admin',
  component: AdminComponent,
  canActivate: [AuthGuard]
}

```


