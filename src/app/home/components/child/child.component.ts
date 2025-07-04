import { Component,Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})
export class ChildComponent {
  @Input() message: string = '';//接受父组件传递的消息
  @Output() messageEvent = new EventEmitter<string>();
  sendMessage() {
    this.messageEvent.emit('Hello from child');
  }
}
