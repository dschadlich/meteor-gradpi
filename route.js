Router.configure({
  // the default layout
  layoutTemplate: 'layout'
});

Router.route('/', function () {
  this.render('login');
  this.layout('logRegHeader');
});


Router.route('/register', function () {
  this.render('register');
  this.layout('logRegHeader');
});