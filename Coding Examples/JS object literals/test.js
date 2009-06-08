MyStuff = {
	'foo':function(a, b)
	{
		return a+b;
	},

	bar:3,
	
	
	/* defines an array */
	quux:
	{
		'3':'b',
		'var':undefined
	}
};

/* returns property value */
alert(MyStuff.bar);

/* returns function */
alert(typeof MyStuff.foo);

/* calls function */
alert(MyStuff.foo(1,2));

/* uses value to address array */
alert(MyStuff.quux[MyStuff.bar]);