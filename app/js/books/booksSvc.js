(function () {

  angular
      .module('LoginApp')
      .factory('booksSvc',  ['$firebaseArray',
          function($firebaseArray) {

            // Checker
            var works = 'appCtrl is here, Yatta!';


            // Initialize Firebase Data
            var booksRef = new Firebase("https://fiery-torch-4029.firebaseio.com/books");
                books = $firebaseArray(booksRef);


            // Add to Data
            var addBook = function(book) {
                console.log('add a book!')
                console.log(book);
                debugger;
                books.$add(book);
            };

            var removeBook = function(idx) {
                console.log(books[idx]);
                debugger;
                books.$remove(idx).then(function(ref) {
                    // data has been deleted locally and in the database
                    console.log('deletion')
                    debugger;
                }, function(error) {
                    console.log("Error:", error);
                });
            }

            return {
                works: works,
                books: books,
                addBook: addBook,
                removeBook: removeBook

            }
          }
      ])

})()
