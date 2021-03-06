const mongoose   = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema(
    {
    username: {type:String,unique:true},
    password: {type:String},
    firstname:String,
    lastname:String,
    address:String,
    zipcode:String,
    city:String,
    country:String,
    phone:String,
    birthday: Date,
    birthplace:String,
    email: String,
    providerId: {type:String,default:''},
    provider:{type:String,default:''},        
    nationality:String,
    photo: {
        type:String,
        default:'https://res.cloudinary.com/ddycn57vj/image/upload/v1590523929/architecture-office-management-app/default-profile_qdsrui.png'
    },
    role: {type:String,enum:['admin','employee'],default:'employee'},
    status:{type:String,enum:['active','inactive'],default:'active'},
    projects: [{type:Schema.Types.ObjectId,ref:'Project'}],
    events: [{type:Schema.Types.ObjectId,ref:'Event'}],
    resetPasswordToken:String,
    resetPasswordExpires:Date,
    },
    {timestamps:true}
)

const User = mongoose.model('User',UserSchema);

module.exports = User;

