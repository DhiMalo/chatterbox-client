
var app = {};
  
app.server = 'https://api.parse.com/1/classes/chatterbox'

app.clearMessages = function(){
  $('#chats').empty();
}; 

app.fetch = function(room){

  if (room === undefined) {var room = 'chatterbox';};
  
  $.ajax({
    url: 'https://api.parse.com/1/classes/'+room,
    type: 'GET',
    // data: '',
    contentType: 'application/json',
    success: function (data) { 

      app.clearMessages();

      for( var i = 0; i < data.results.length; i++){
        var message = data.results[i];
        var $message = $('<button></button><br>');
        var singleMessage = $message.text(message.username + ' says: ' + message.text);
        
        $message.prependTo('#chats');
      
      console.log('data: ', data);
    }
      //   $(dataResults[i]).appendTo('$('.chatform'))
      // }
      // console.log('data is:', data);
    },
    error: function (data) {
      // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
      console.error('chatterbox: Failed to get message');
    }
  });
};

app.init = function(){
  window.selections = {};
  window.selections.selectedUsername = prompt('please provide username here:');
  if(window.selections.selectedUsername === null) {
    window.selections.selectedUsername = 'anonymousMcPansyPants';
  };
  window.selections.selectedRoom = prompt('Meeting friends in a special room? Type it, or leave blank for the General Chat Room)');

  if(window.selections.selectedRoom.length < 1 ) {
    window.selections.selectedRoom = 'chatterbox';
  }

  app.fetch(window.selections.selectedRoom);

  for( var key in window.selections ){
    var confirmation = window.selections[key];
    var $confirmation = $('<button></button>');

    var loginConfirm = $confirmation.text('You are logged in as'+window.selections.selectedUsername+'and have entered room'+ window.selections.selectedRoom+'! ')
          
    $confirmation.appendTo('#main');
  }
  // for (var i = 0; i <= window.selections.length; i++) {

  // var autoGeneratedMessage = {};
  // autoGeneratedMessage.username = selectedUsername;
  // autoGeneratedMessage.text = '';
  // autoGeneratedMessage.friends = [];

  // if (window.selections.length<1) {
  //   window.selections.length.push(autoGeneratedMessage)};
    
  // setInterval(app.fetch, 10000);
  };

app.init();

app.send = function(message){

  $.ajax({
    url: app.sever,
    type: 'POST',
    data: JSON.stringify(message),
    contentType: 'application/json',
    success: function (data) {
      console.log('chatterbox: Message sent');
      console.log('an awesome message you just sent: ' ,data)
    },
    error: function (data) {
      console.error('chatterbox: Failed to send message');
    }
  });
};



var messageSample = {
  username: 'Mel Brooks',
  text: 'I didn\'t get a harumph outa that guy.!',
  roomname: 'lobby'
};


app.addMessage = function(message){
  _.extend(window.selections, message);
  console.log('it appears that' + window.selections.username+'has made a comment')
  //window.selections.friends.push(SOMETHING HERE)
 
  $('#chats').html('<div>message.text</div>');

};

app.addRoom = function(roomname){
  $('#roomSelect').html('<option>roomname</option>');
};

app.addFriend = function(){

  $('#main').html('<button class ="username"> </button>');
  $('.username').click(function() {
    alert('Let\'s be friends!');
    window.selections[0].friends.push('username')
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
