function addToOnline(user_name) {
  var online_user = {
    user_name: user_name,
  };

  if (localStorage.online == undefined) {
    localStorage.online = this.toJSON({1: online_user});
    return true;
  } else {
    if (isOnline(user_name)) {
      var db = this.fromJSON(localStorage.online);
      var db_last_key_number = Object.keys(db).length;
      db[db_last_key_number + 1] = online_user;
      localStorage.online = this.toJSON(db);
      return true;
    }
  };
};

function isOnline(user_name) {
  var db = this.fromJSON(localStorage.online);
  for (key in db) {
    if (db[key].user_name == user_name) {
      return false;
    };
  };
  return true;
};

$(window).bind('beforeunload',function(){
  localStorage.removeItem('online');
});
