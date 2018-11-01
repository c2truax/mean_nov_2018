// Export functions for our routes.js file to use. This is where the logic of
// your server will go.
module.exports = {

  cats: function(req, res){
    res.render('cats')
  },

  cat_data1: function(req, res){
    var dogs= {name: 'Archer', food: 'runny eggs', age: '4', sleep: ['under the chair', 'on the dishwasher', 'in the tent']};
    res.render('cat_data', {dogs: dogs})
  },
  cat_data2: function(req, res){
    var dogs= {name: 'Bubba', food: 'shoes', age: '5', sleep: ['at your feet', 'in the bed']};
    res.render('cat_data', {dogs: dogs});
  },
  cat_data3: function(req, res){
    var dogs= {name: 'Maverick', food: 'cheese', age: '11', sleep: ['front door']};
    res.render('cat_data', {dogs: dogs});
  }

}
