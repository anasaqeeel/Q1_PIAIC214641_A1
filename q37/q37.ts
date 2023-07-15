const make_shirt = (size = 'large', message = 'I love movies') => {
    console.log(`The T-shirt size is ${size} and it says "${message}" on it.`);
  };  
  // Large shirt with the default message
  make_shirt();make_shirt('medium');make_shirt('small', 'I love programming');
  