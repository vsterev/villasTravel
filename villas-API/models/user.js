const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter your Name"],
        match: [/^[a-zA-Z ]{5,}$/, 'Name should contains minimum 5 english letters']
    },
    email: {
        type: String,
        required: [true, 'Please enter an email !'],
        unique: [true, 'User/email already exists !'],
        validate: [
            {
                validator: (v) => {
                    // return /^[a-zA-Z0-9@.]{5,}$/.test(v);
                    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(v);
                    return 	
                },
                message: props => `${props.value} is not a valid email`
            }
        ]
    },
    password: {
        type: String,
        required: [true, 'Please enter password!'],
        match: [/^[a-zA-Z0-9]{5,}$/, 'Password should contains minimum 5 digits from numbers or letters']
    },
    likes: [{ type: mongoose.Types.ObjectId, ref: 'Villa' }],
    villas: [{ type: mongoose.Types.ObjectId, ref: 'Villa' }],
    reservations: [{ type: mongoose.Types.ObjectId, ref: 'Reservation' }]
})
userSchema.methods = {
    matchPassword: function (password) {
        return bcrypt.compare(password, this.password) //password verification in model
    }
}
userSchema.pre('save', function (next) { //hash when saving password
    if (this.isModified('password')) {
        const saltGenerate = bcrypt.genSalt(9)
        saltGenerate
            .then(salt => {
                const hash = bcrypt.hash(this.password, salt)
                Promise.all([salt, hash])
                    .then(([salt, hash]) => {
                        this.password = hash;
                        next();
                    })
                    .catch(err => next(err))
            })
            .catch(err => next(err))
        return;
    }
    next();
})
userSchema.pre('findOneAndUpdate', function (next) {
    if (this._update['password']) {
        // this.runValidators = true
        const saltGenerate = bcrypt.genSalt(9)
        saltGenerate
            .then(salt => {
                if (!/^[a-zA-Z0-9]{5,}$/.test(this._update['password'])) {
                    return Promise.reject('Password should contains minimum 5 digits from numbers or letters')
                }
                const hash = bcrypt.hash(this._update['password'], salt)
                return Promise.all([salt, hash])

                // .catch(err => console.log(err))
            })
            .then(([salt, hash]) => {
                this._update['password'] = hash;
                next();
            })
            .catch(err => next(err))
        return;
    }
    // return;
    next();
})
module.exports = mongoose.model('User', userSchema);