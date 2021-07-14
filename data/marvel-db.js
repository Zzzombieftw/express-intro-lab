export { 
	find
}

const marvel = [
    {text: 'DeadPool is strong', done: true, _id: 125223},
    {text: 'Spider Man is strong', done: false, _id: 127904},
    {text: 'Hulk is strong', done: false, _id: 139608},
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