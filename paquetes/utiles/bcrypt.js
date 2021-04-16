const bcrypt = require('bcrypt')

const password = '1234Segura!'


//para contrase;as
bcrypt.hash(password , 5, function(err, hash)  {
    console.log(hash)
   
   //para comprobar que el hash comprimio esta cotnrase;a
    bcrypt.compare(password, hash, function(err, res) {
        console.error(err)
        console.log(res)
    })

})