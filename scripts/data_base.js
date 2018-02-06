function registerNameForm(user_name, first_name, last_name) {
  var new_user = {
    user_name: user_name,
    first_name: first_name,
    last_name: last_name,
  };

  if (localStorage.users == undefined) {
    localStorage.users = this.toJSON({1: new_user});
    return true;
  } else {
    if (this.isUniqueName(user_name)) {
      var db = this.fromJSON(localStorage.users);
      var db_last_key_number = Object.keys(db).length;
      db[db_last_key_number + 1] = new_user;
      localStorage.users = this.toJSON(db);
      return true;
    }
  };
};

function registerPasswordForm(email, password) {
  var additional_user_information = {
    email: email,
    password: password,
  };

  if (this.isUniqueEmail(email)) {
    var db = this.fromJSON(localStorage.users);
    var db_last_key_number = Object.keys(db).length;
    db[db_last_key_number] = $.extend({}, db[db_last_key_number], additional_user_information);
    localStorage.users = this.toJSON(db);
    return true;
  }
};

function isUniqueName(user_name) {
  var db = this.fromJSON(localStorage.users);
  for (key in db) {
    if (db[key].user_name == user_name) {
      return false;
    };
  };
  return true;
};

function isUniqueEmail(email) {
  var db = this.fromJSON(localStorage.users);
  for (key in db) {
    if (db[key].email == email) {
      return false;
    };
  };
  return true;
};

function toJSON(obj) {
  return JSON.stringify(obj);
};

function fromJSON(obj) {
  return JSON.parse(obj);
};
