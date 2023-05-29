<template>
    <div>
        <div class="gantt-no" ref="ganttRef" style="width: 100%; height: 400px" ></div>
    </div>
</template>

<script setup lang="ts">
import * as Dayjs from 'dayjs'
 import { gantt } from 'dhtmlx-gantt'; // 核心模块
    import 'dhtmlx-gantt/codebase/dhtmlxgantt.css'; // 样式模块
    const tasks = {
        data: [
				{ id: 11, text: "a项目名称", start_date: "2023-04-01",end_date: "2023-05-01", duration: 17, progress: 0.5, open: true },
				{ id: 2, text: "Task #1", start_date: "2023-04-02",end_date: "2023-4-15", duration: 8, progress: 0.6, parent: 11 },
				{ id: 3, text: "Task #2", start_date: "2023-04-11", end_date: "2023-04-28", duration: 8, progress: 0.6, parent: 11 }
			],
			links: [
				{id: 122, source: '11', target: '2', type: "1"},
				{id: 2222, source: 2, target: 3, type: "2"},
				{id: 2221, source: 11, target: 3, type: "2"}
			]
      


    }
    const ganttRef = ref();
// 初始化构建gant
onMounted(()=> {
    if (ganttRef.value) {
        // 
        gantt.config.columns = [
        {
        name: 'text',
        label: '任务名称',
        tree: true,
        width: 150,
        align: 'left',
        template: function (obj: any) {
          return obj.text;
        }
      },
      {
        name: 'start_date',
        label: '开始时间',
        width: 150,
        align: 'center',
        template: function (obj: any) {
          return obj.start_date;
        }
      },
      {
        name: 'end_date',
        label: '结束时间',
        width: 150,
        align: 'center',
        template: function (obj: any) {
          return obj.end_date;
        }
      },
      {
        name: 'progress',
        label: '进度',
        width: 50,
        align: 'center',
        template: function (obj: any) {
          return `${obj.progress * 100}%`;
        }
      }



		// {name: "text", tree: true, width: 150, resize: true},
		// {name: "start_date", align: "center", width: 150, resize: false},
		// {name: "duration", align: "center", width: 70, resize: true},
		// {name: "add", width: 44, resize: true, hide: true}
	];
    gantt.config.xml_date = '%Y-%m-%d'
    gantt.config.scale_height = 90; // 日期栏的高度 
    const weekScaleTemplate = function (date: any) {
        const mouthMap: { [key: string]: string } = {
            Jan: '一月',
            Feb: '二月',
            Mar: '三月',
            Apr: '四月',
            May: '五月',
            Jun: '六月',
            Jul: '七月',
            Aug: '八月',
            Sept: '九月',
            Oct: '十月',
            Nov: '十一月',
            Dec: '十二月'
        };
        // 可以时使用dayjs 处理返回
        const dateToStr = gantt.date.date_to_str('%d');
        const mToStr = gantt.date.date_to_str('%M');
        const endDate = gantt.date.add(gantt.date.add(date, 1, 'week'), -1, 'day');
          // 处理一下月份
         return `${dateToStr(date)} 号 - ${dateToStr(endDate)} 号 (${
            mouthMap[mToStr(date) as string]
        })`;
    };
    const dayFormat = function (date: any) {
        const weeks = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
        return weeks[Dayjs(date).day()];
    };
    gantt.config.scales = [
        { unit: 'year', step: 1, format: '%Y' },
        { unit: 'week', step: 1, format: weekScaleTemplate },
        { unit: 'day', step: 1, format: dayFormat }
    ];



    gantt.plugins({
    marker: true
});
gantt.addMarker({
    start_date: new Date(),
    text: '今日'
});
        gantt.init(ganttRef.value); // 初始化 DOM
        gantt.parse(tasks); // 传入 tasks


    }
})





</script>

<style lang="less" scoped>

</style>