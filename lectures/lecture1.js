/*var obj = {};
var obj1 = new Object;

console.log(obj);
console.log(obj1);*/

var book = {
   name: 'Functional JavaScript',
   author: 'Michael Fogus',
   publisher: 'o\'Reilly',
   page: 250,

   print: function() {
      console.log(this.name, this.author);
   }
}

/*console.log(book);
book.print();*/

/*console.log('Book Name: ' + book.name);
console.log('Author Name: ' + book['author']);*/

//console.log('Publisher Year: ' + book.publishedYear);

book.publishedYear = 2010;
//console.log('Publisher Year: ' + book.publishedYear);

book['price'] = 30;
//console.log('Price: ' + book.price);

for (var props in book) {
   //console.log(props);
   console.log(props + ' = ' + book[props]);
}