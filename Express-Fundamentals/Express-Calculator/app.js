const express = require('express');
const ExpressError = require('./expressError.js');
const app = express();

const {convertNumsAry, findMean, findMedian, findMode} = require('./calc')
app.get('/mean', (req, res, next) => {
    if(!req.query.nums) {
        throw new ExpressError('Must pass a query key', 400)
    }
    let str = req.query.nums.split(',');
    let nums = convertNumsAry(str);
    if(nums instanceof Error){
        return next(new ExpressError(nums.message, 400))
    }
    let result = {
        operation: 'mean',
        result:findMean(nums)
    };
    res.json(result);
})

app.get('/median', (req, res, next) => {
    if(!req.query.nums){
        throw new ExpressError('Must pass a query key', 400)
    }
    let numsAsStr = req.query.nums.split(',');
    let nums = convertNumsAry(numsAsStr);
    if(nums instanceof Error) {
        return next(new ExpressError(nums.message));
    }
    let result = {
        operation: 'median',
        result: findMedian(nums)
    }
    res.json(result)
})


app.get('/mode', function(req, res, next) {
    if (!req.query.nums) {
      throw new ExpressError('Must pass a query key', 400)
    }
    let numsAsStr = req.query.nums.split(',');
    let nums = convertNumsAry(numsAsStr);
    if (nums instanceof Error) {
      throw new ExpressError(nums.message);
    }
  
    let result = {
      operation: "mode",
      result: findMode(nums)
    }
  
    return res.send(result);
});

app.listen(3000, function(){
    console.log('App on port 3000')
    })