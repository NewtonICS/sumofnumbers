function sumFor(nums){
  let sum = 0;
  for (const num of nums){
    sum+=num;
  }
  return sum;
}

function sumWhile(nums){
  let sum = 0;
  let i = 0;
  while (i < nums.length){
    sum+=nums[i];
    i++;
  }
  return sum;
}

function sumRecursion(nums){
  if (nums.length === 0){
    return 0;
  }
  return sumRecursion(nums.slice(1, nums.length)) + nums[0];
}

function sumTheSimpleWay(nums){
  return _.reduce(nums, function (memo, num){ return memo + num}, 0);
}

let sampleList = [1, 1, 2, 2, 3]; //Will be 9 added up.
console.log(sumFor(sampleList));
console.log(sumWhile(sampleList));
console.log(sumRecursion(sampleList));
console.log(sumTheSimpleWay(sampleList));
//All of the console logs above print 9.