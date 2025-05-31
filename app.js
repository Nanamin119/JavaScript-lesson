let nickname = 'ななみん';
let age = '25';
console.log('私のニックネームは' + nickname + 'です。' + '年齢は' + age + '歳です。');

let languages = ['JavaScript', 'PHP', 'Rudy', 'Python', 'Go'];
let favorite_language = languages[0]
let next_language = languages[3]
console.log(`私の好きな言語は${favorite_language}です。次は${next_language}を勉強してみたいです。`);

let user = {
    name: 'John',
    age: 26,
    bloodType: 'A',
    favorite: 'card',
  };
  console.log(user.age);

  let newUser = Object.assign({},user, {
    birthday: '2000-09-27',
    sayHello: function() {
        console.log('Hello!');
    }
  })
  newUser.sayHello();

  let playerList = [
    {
      name: 'John',
      age: 26,
      favorites: ['Card Game', 'Basket Ball', 'Programming'],
    },
    {
      name: 'Bob',
      age: 33,
      favorites: ['Tinder', 'The Legend of Zelda'],
    },
    {
      name: 'Michael',
      age: 22,
      favorites: ['Football', 'Smash Bros.'],
    },
  ];
  console.log(playerList[1].favorites[1]);

  let totalAge = playerList[0].age + playerList[1].age + playerList[2].age;
  let averageAge = totalAge / playerList.length;
  console.log(averageAge);

  function sayHello() {
    console.log('Hello');
  }
  sayHello();

  let sayWorld = function() {
    console.log('Wold');
  }
  sayWorld();

  let calc = {};

  calc.add = function(x, y) {
    console.log(x + y);
  };

  calc.subtract = function(x, y) {
    console.log(x - y);
  };

  calc.multiply = function(x, y) {
    console.log(x * y);
  };

  calc.divide = function(x, y) {
    console.log(x / y);
  };

  calc.add(3, 4);
  calc.subtract(15, 5);
  calc.multiply(7, 7);
  calc.divide(25, 5);

  function remainder(x, y) {
    return x % y;
  }

  const result = remainder(5, 3);

  console.log('5を3で割った余りは ' + result + ' です。');

  // ここで変数 x が関数 foo のスコープ内で定義されています。
  
  // ここで x を参照しようとしていますが、foo 関数のスコープ外であるため、変数 x は参照できません。

  let randomNumber = Math.random();

  let scaledNumber = randomNumber * 10;

  let randomInteger = Math.floor(scaledNumber);

  console.log(randomInteger);

  setTimeout(function() {
    console.log('Hello World!');
  }, 3000);  

  let num = 5;
  if (num > 0) {
    console.log('num is greater than 0');
  } else if (num < 0) {
    console.log('num is less than 0');
  } else {
    console.log('num is 0')
  }

  let mixed = [4, '2', 5, '8', '9', 0, 1];
  for (let i = 0; i < mixed.length; i++) {
    const element = mixed[i];
  
    if (typeof element === 'number') {
      if (element % 2 === 0) {
        console.log(element + ': even');
      } else {
        console.log(element + ': odd');
      }
    } else {
      console.log(element + ': not number');
    }
  }
  