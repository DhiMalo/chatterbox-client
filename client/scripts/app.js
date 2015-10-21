
var app = {};
  app.server = 'https://api.parse.com/1/classes/chatterbox'

app.init = function(){
  window.app.messages = {};
  
  var localUsr = prompt('please provide username here:');
  var room = prompt('what room will you like to enter?');
  window.app.messages[localUsr] = {
    username: localUsr,
    text: ' ',
    roomname: room,
    friends: []
  };
  setInterval(app.fetch, 10000);
};


app.init();


app.send = function(message){

  $.ajax({
    // This is the url you should use to communicate with the parse API server.
    url: app.sever,
    type: 'POST',
    data: JSON.stringify(message),
    contentType: 'application/json',
    success: function (data) {
      console.log('chatterbox: Message sent');
    },
    error: function (data) {
      // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
      console.error('chatterbox: Failed to send message');
    }
  });
};

app.fetch = function(){
  $.ajax({
    url: app.server,
    type: 'GET',
    data: '',
    contentType: 'application/json',
    success: function (data) {
      console.log('chatterbox: Message sent');
    },
    error: function (data) {
      // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
      console.error('chatterbox: Failed to send message');
    }
  });
};

// $('#chats').html('<blink>OMG IT\'s 1998!</blink>');

app.clearMessages = function(){
  $('#chats').empty();
}; 

var message = {
  username: 'Mel Brooks',
  text: 'I didn\'t get a harumph outa that guy.!',
  roomname: 'lobby'
};


app.addMessage = function(message){
  var chatsMessages =  window.app.messages
  chatsMessages[message.username] = message;
  chatsMessages[message.username].friends = [];
 
  $('#chats').html('<div>message.text</div>');

};

app.addRoom = function(roomname){
  $('#roomSelect').html('<option>roomname</option>');
};

app.addFriend = function(){

  $('#main').html('<button class ="username"> </button>');
  $('.username').click(function() {
    alert('Let\'s be friends!');
    window.app.messages[username].friends.push('username')
  })
};

app.addFriend();



// console.log(app.clearMessages);


// // YOUR CODE HERE:

// var message = {
//   username: 'bosaheri',
//   text: 'tralala',
//   roomname: 'Chatroom'
// }
