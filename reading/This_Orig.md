# The 'this' keyword 
  Many languages have a 'this' like construct.
  In Ruby it's kind of like 'self'
  Java has a 'this' construct.

* Using 'this' in an object literal  

```
var johnDoe = {
				name: 'John Doe',
				greet: function() {
				   // 'this' is a pointer/reference to the object
				   return "My name is " + this.name;
				 }
			   };
johnDoe.greet(); // My name is John Doe
// The this pointer in the greet function points to the
// johnDoe object. So 'this.name' will be 'John Doe'
```

* Reusing a global method with 'this'  

```
var name = 'Jane Doe',
globalGreet = function(){
  return "My name is " + this.name;
};

globalGreet(); // My name is Jane Doe
// 'this' is a pointer/reference to the Global  object

var johnDoe = {
				 name: 'John Doe',
				 greet: globalGreet
			  }

johnDoe.greet(); // My name is John Doe
// The this pointer in the globalGreet function points to the
// johnDoe object. So 'this.name' will be 'John Doe'

// Notice that the this pointer changes depending
// on the context that function is INVOKED in.
// NOT the context that the function is DEFINED IN!!

// Beware, changing 'this' pointer when function is INVOKED is not
// like many other languages. This behavior Will become
// important later when using event callbacks.
```

* Using a function's bind method to change 'this'  
 Simple example.  
 
```
// we're using window which is the default global object
// when running in a Browser.
window.name = 'Jane Doe', // same as name = 'Jane Doe' when run in a Browser
globalGreet = function(){
  return "My name is " + this.name;
};

globalGreet(); // My name is Jane Doe
// 'this' is a pointer/reference to the Global, window, object

var johnDoe = {
				 name: 'John Doe',
				 // Here we bind 'this' to the global window object!
				 greet: globalGreet.bind(window)
			  }

johnDoe.greet(); // My name is Jane Doe
// This is because we have using 'bind' to explicitly set the
// 'this' pointer in the globalGreet function.
```

* More complex example.

```
// simulate remote request
var makeRequest = function(url, callback){

  // data would typically be the result of the remote request, like json.
  var data = 10;

  // 'this' would point to the global object, window!
  // so when running this callback function 'this' would typically
  // be the global object.
  // But we change it below using bind
  callback(data);

};

var obj = {
  someValue: 20,

  // callback
  loadData: function(data){
	var sum = this.someValue + data;
	alert(sum);
  },

  // function that wil call the func to make the remote request
  prepareRequest: function(){
	var url = "http://numberservice.com";

	// this will NOT work as callback, loadData, function
	// will run in the global scope where this is the global object
	// and there is no someValue in the global scope!!
	// makeRequest(url, this.loadData);

	// this will change the scope of the callback to be obj instance
	// which has a someValue property
	makeRequest(url, this.loadData.bind(this));

  }

}

// invoke the remote request to numberservice.com
obj.prepareRequest()

```

* bind descriptions/overviews.  
   http://www.robertsosinski.com/2009/04/28/binding-scope-in-javascript/  
   
* bind method does NOT exists in IE8 or below!
	* can be shimmed in to these browsers

