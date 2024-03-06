const mongoose = require('mongoose');
const schema=mongoose.Schema;
const bcrypt=require('bcrypt');

var userSchema = new schema({
    firstname:{
        type:String,
        required:true,
        unique:true,
        index:true,
    },
    lastname:{
        type:String,
        required:true,
        unique:true,
        index:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    mobile:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    }
});

//encrypting psw before saving to database
userSchema.pre('save', async function (next) {
    try {
      if (this.isModified('password')) {
        const hashedPassword = await bcrypt.hash(this.password, 10);
        this.password = hashedPassword;
      }
      next();
    } catch (error) {
      next(error);
    }
  });


//decrypting psw (used during login)
userSchema.methods.comparePassword = async function (enteredPassword) {
    try {
      const passwordMatch = await bcrypt.compare(enteredPassword, this.password);
      return passwordMatch;
    } catch (error) {
      throw error;
    }
  };
  const User = mongoose.model('User', userSchema);

module.exports = User