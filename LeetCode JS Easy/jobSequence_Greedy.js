class JobSequencing {
  constructor() {
    this.list = [];
  }

  createJobList(JobId, profit, deadline) {
    this.list.push({ Job: JobId, profit: profit, deadline: deadline });
    return this.list;
  }

  Greedy() {
    let result = [];
    let sortedArray = [];
    const maxDeadline = this.list.map((item) => item.deadline);
    const maxLength = Math.max(...maxDeadline);
    sortedArray = this.list.sort((a, b) => b.profit - a.profit);
    result.length = maxLength;
    let i = 0;
    while (i < sortedArray.length) {
      for (let j = sortedArray[i].deadline - 1; j >= 0; j--) {
        if (!result[j]) {
          result[j] = sortedArray[i].Job;
          break;
        }
      }
      i++;
    }
    return result;
  }
}

let job = new JobSequencing();
job.createJobList(1, 35, 3);
job.createJobList(2, 30, 4);
job.createJobList(3, 25, 4);
job.createJobList(4, 20, 2);
job.createJobList(5, 15, 3);
job.createJobList(6, 12, 1);
job.createJobList(7, 5, 2);

job.Greedy();
