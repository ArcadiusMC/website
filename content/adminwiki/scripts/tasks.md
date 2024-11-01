---
title: "Task Scheduling"
type: "wiki"
description: >
  Everything related to task scheduling.
---

ArcadiusMC's scripting abstractions allow for the scheduling of delayed and 
repeating tasks. All tasks that can be scheduled will be executed on the main 
thread.

## Examples
All intervals passed to the scheduler are measured in ticks.

### Scheduling a delayed task
```js
scheduler.runLater(10 /* Delay in ticks */, task => {
  // Perform some action
});
```
### Scheduling a repeating task
```js
scheduler.runTimer(10 /* Initial Delay */, 10 /* Repeating delay*/, task => {
  
});
```
### Scheduling a task that only runs n number of times
```js
const MAX_RUNS = 20;
var runCount = 0;

scheduler.runTimer(10, 10, task => {
  // Increment run count tracker
  ++runCount;
  
  // If run count surpasses max runs, stop execution
  if (runCount >= MAX_RUNS) {
    task.cancel();
  }
});
```
  
## TypeScript documentation
```ts
declare const scheduler: Scheduler

type TaskCallback = (task: ScheduledTask) => void;

interface Scheduler {

  /**
   * Executes a task
   * @param callbackfn Task callback
   */
  run(callbackfn: TaskCallback): ScheduledTask

  /**
   * Schedules a delayed task
   * @param delayTicks Execution delay, in ticks
   * @param callbackfn Task callback
   */
  runLater(delayTicks: number, callbackfn: TaskCallback): ScheduledTask

  /**
   * Schedules a task to be executed at a regular interval
   * @param delayTicks Initial execution delay, in ticks
   * @param intervalTicks Exectution interval delay, in ticks
   * @param callbackfn Task callback
   */
  runTimer(delayTicks: number, intervalTicks: number, callbackfn: TaskCallback): ScheduledTask
}

interface ScheduledTask {
  readonly cancelled: boolean;

  /** Executes the task */
  run(): void;
  
  /** Stops the task from being executed */
  cancel(): void;
}
```