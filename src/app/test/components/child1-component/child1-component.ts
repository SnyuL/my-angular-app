import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SelectButtonModule } from 'primeng/selectbutton';
import { RadioButtonModule } from 'primeng/radiobutton';
import { MegaMenuModule } from 'primeng/megamenu';

@Component({
  selector: 'app-child1-component',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    SelectButtonModule,
    RadioButtonModule,
    MegaMenuModule
  ],
  templateUrl: './child1-component.html',
  styleUrl: './child1-component.scss'
})
export class Child1ComponentComponent {
  // MegaMenu 配置
  menuItems = [
    {
      label: '文件',
      icon: 'pi pi-file',
      items: [
        [
          {
            label: '新建',
            items: [
              { label: '文档', icon: 'pi pi-file-edit' },
              { label: '表格', icon: 'pi pi-table' }
            ]
          }
        ],
        [
          {
            label: '操作',
            items: [
              { label: '保存', icon: 'pi pi-save' },
              { label: '导出', icon: 'pi pi-download' }
            ]
          }
        ]
      ]
    },
    {
      label: '编辑',
      icon: 'pi pi-pencil',
      items: [
        [
          {
            label: '格式',
            items: [
              { label: '加粗', icon: 'pi pi-bold' },
              { label: '斜体', icon: 'pi pi-italic' }
            ]
          }
        ]
      ]
    }
  ];

  // 选择按钮配置
  viewOptions = [
    { label: '列表', value: 'list', icon: 'pi pi-list' },
    { label: '网格', value: 'grid', icon: 'pi pi-th-large' },
    { label: '详情', value: 'detail', icon: 'pi pi-info-circle' }
  ];
  selectedView: string = 'list';

  // 单选按钮配置
  sortOptions = [
    { name: '按名称排序', value: 'name' },
    { name: '按日期排序', value: 'date' },
    { name: '按大小排序', value: 'size' }
  ];
  selectedSort: string = 'name';

  // 组件方法
  onViewChange() {
    console.log('视图模式变更:', this.selectedView);
  }

  onSortChange() {
    console.log('排序方式变更:', this.selectedSort);
  }
}