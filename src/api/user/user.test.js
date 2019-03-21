const mocha = require('mocha');
const chai = require('chai');
const server = require('../../index');

const expect = chai.expect;
const { assert } = require('chai');

let dataObj = {
  "broadcaster_id": "123",
  "broadcaster_name": "test_user",
  "is_gift": true,
  "tier": "1000",
  "plan_name": "The Ninjas",
  "user_id": "123",
  "user_name": "lyrrad",
  "user_id": "456",
  "user_name": "snoirfni"
}

dummyDataSingle = {
  "data": [dataObj],
  "pagination": {
      "token": "xxxx"
  }
}

