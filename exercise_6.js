console.clear();

function sayHello(name) {
  console.log('Hello, ' + name);
}

var animals = ['dog', 'cat', 'hen', 'cat', 'cow'];

for (var i = 0; i < animals.length; i++) {
  sayHello(animals[i]);
}