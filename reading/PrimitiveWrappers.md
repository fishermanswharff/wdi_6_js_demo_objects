## Primtive Wrappers
   number, string and boolean primitives all have primative wrappers
   Number(), String() and Boolean.

* Calling a method on a primitive may create an instance of it's primitive wrapper.

	```
    "hello".length
    ```

    This will create a String object, call length then it can be GC'd

    ```
    new String('hello').length
    ```

	```
	typeof "hello;" // "string"
	typeof new String("hello");  // "object"
	typeof new String("hello").valueOf();  // "string"
	typeof String("hello"); // "string"
	```

* Coeersion is done automatically

	```
   	var num = new Number(10);
   	typeof num; // "object"
   	typeof 33;  // "number"
   	var sum = num + 33;
   	typeof sum; // "number"
   	```

* Cannot assign a property or method to a primitive.

	```
   	// No error, it'll just be undefined
   	var num = 10;
   	num.my_property = "foo"
   	num.my_property // undefined
   ```

* Stay away from wrapper objects.

	```
   	// NOT GOOD, shd use the primitive
   	var myString = new String("hello");
   	// GOOD
   	var myString = "hello";
   	```

