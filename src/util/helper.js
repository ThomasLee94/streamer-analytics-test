//
// ─── A COLLECTION OF HELPER FUNCTIONS TO RANDOMISE OBJECTS FOR TESTING ──────────
//

const randomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const randomId = () => {
  const output = [];
  for (let i = 0; i <= 3; i += 1) {
    output.push(Math.randomInt(0,9));
  }
  return output;
};

const randomChar = (length) => {
  let text = '';
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (let i = 0; i < length; i += 1) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
};

const randomBoolean = () => {
  const randomBoolArr = [true, false];
  const randomIndex = randomInt(0,1); 
  return randomBoolArr[randomIndex]; 
};

const randomTier = () => {
  const tier = [1000, 2000, 3000]
  const randomIndex = randomInt(0,2);
  return tier[randomIndex];  
};

const createDummyDataJSON = () => {
  const randomNum = randInt(0,20);
  const output = [];
  for (let i = 0; i < randomNum; i += 1){
    output.push(
      {
      "broadcaster_id": randomId(),
      "broadcaster_name": randomChar(),
      "is_gift": randomBoolean(),
      "tier": randomTier(),
      "plan_name": randomChar(),
      "user_id": randomId(),
      "user_name": randomChar(),
      "user_id": randomId(),
      "user_name": randomChar()
    }
    )
  }
};

const createDummyObj = (obj) => {
  const output = {
    "data": [obj],
    "pagination": {
      "token": randomId
    }
  }

}


export randomInt;
export randomId;
export randomChar;
export randomBoolean;
export randomTier;
export createDummyDataJSON;
export createDummyObj; 

