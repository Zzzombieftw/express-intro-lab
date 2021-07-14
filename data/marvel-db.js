export { 
	find
}

const marvel = [
    {text: 'Is Deadpool strong?', done: true, _id: 125223},
    {text: 'Is Spider Man strong?', done: false, _id: 127904},
    {text: 'Is Hulk strong?', done: true, _id: 139608},
    {text: 'Is Thanos?', done: false, _id: 139608},

  ]
  
  const find = (conditions, callback) => {
    try {
      if (!(conditions instanceof Object)){
        throw new TypeError('Please pass in an object')
      }
      if (Object.keys(conditions).length === 0) return callback(null, marvel)
    } catch (error) {
      console.log(error)
      callback(error, [])
    }
  }