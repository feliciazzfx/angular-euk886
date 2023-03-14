import { Component, ViewChild } from '@angular/core';
import { TreeComponent, TreeNode } from 'ng-devui/tree';

@Component({
  selector: 'd-basic',
  templateUrl: './app.component.html',
})
export class BasicComponent {
  @ViewChild('basicTree', { static: true }) basicTree: TreeComponent;
  data = [
    {
      title: '工艺优化',
      open: true,
      items: [
        {
          title: '电除尘工艺优化模型',
        },
        {
          title: '湿电除尘工艺优化模型',
        },
      ],
    },
    {
      title: '滤料单元寿命预测',
      open: true,
      items: [
        {
          title: '滤袋',
        },
        {
          title: '滤料',
        },
        {
          title: '滤筒',
        },
      ],
    },
  ];

  onNodeSelected(treeNode: TreeNode) {
    console.log('selected', treeNode);
  }

  onNodeToggled(treeNode: TreeNode) {
    console.log('Toggled', treeNode);
  }
}
