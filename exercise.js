class User {
  constructor(username, name, email) {
    this.username = username
    this.name = name
    this.email = email
  }
}


class UserDatabase {
    constructor() {
      this.users = []
    }

  insert(user) {
    for(let i = 0; i < this.users.length; i++) {
      if (this.users[i].username === user.username) {
        return console.log(`Пользователь с таким ${this.users[i].username} именнем уже существует`)
      }
    }

    this.users.push(user)
  }
  find(username) {
    for (let i = 0; i <= this.users.length; i++) {
      if(this.users[i].username === username) {
        return this.users[i]
      }
    }
    console.log(`Такого пользователя не существует!`)
    return null
  }
  update(username, name, email) {
    const user = this.find(username)
    if(user === null) {
      return console.log('Такого пользователя не существует!')
    }

    user.username = username
    user.name = name || user.name
    user.email = email || user.email

    return console.log('Данные успешна обновлены!')
  }
  list_all() {
    this.bubbleSort()
    
     if (!this.users) {
      return console.log('В хранилище данных пусто!')
     }

     return console.log(this.users)
  }

  bubbleSort() {
    for(let i = 0; i < this.users.length; i++) {
      for(let j = 0; j < this.users.length - i - 1; j++) {
        if(this.users[j].username > this.users[j + 1].username) {
          let temp = this.users[j].username
          this.users[j].username = this.users[j + 1].username
          this.users[j + 1].username = temp
        }
      }
    }
    return this.users
  }
}
const userDatabase = new UserDatabase();
const newUser = new User('b_rustam19', 'рустам', 'rustam.radzabov8410@gmail.com');
const oldUser = new User('a_nasim', 'насим', 'nasimov.nasim@gmail.com');

userDatabase.insert(newUser);
userDatabase.insert(oldUser);


// userDatabase.update('rustam19', 'РУСТАМ', 'radzabov.rustam8410@gmail.com')
console.log(userDatabase.list_all())