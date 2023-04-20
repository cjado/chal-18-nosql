const { Schema, model } = require('mongoose');

// Schema to create User model
const userSchema = new Schema(
  {
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    
    thoughts: [ {
        type: Schema.Types.ObjectId,
        ref: 'Thought',
    }
    ],
    friends: [ {
        type: Schema.Types.ObjectId,
        ref: 'User',
    }]
    },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

// userSchema
//   .virtual('fullName')
//   // Getter
//   .get(function () {
//     return `${this.first} ${this.last}`;
//   })
//   // Setter to set the first and last name
//   .set(function (v) {
//     const first = v.split(' ')[0];
//     const last = v.split(' ')[1];
//     this.set({ first, last });
//   });

// Initialize our User model
const User = model('User', userSchema);

module.exports = User;