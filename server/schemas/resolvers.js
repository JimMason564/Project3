const { Set, User } = require('../models')

const resolvers = {
  Query: {
    me: async (parents, args, context) => {
      console.log(context.user)
      if (context.user) {
        const user = await User.findOne({ _id: context.user_id})
        console.log(user)
        return user

      }
      throw new AuthenticationError('You need to be logged in!')
    },
    set: async (parent, {Item_Number, Name, Year, Theme}, context) => {
      if(context.set) {
        // Unsure what to say to search for either one of these categories
        const set = await Set.findOne({Item_Number, Name, Year, Theme})
        console.log(set)
        return set
      }
      throw console.error('Lego cannot be found!');
    }
  },
  Mutation: {
    addUser: async (parent, {username, email, password }) => {
      const user = await User.create({username, password, email})
      const token = signToken(user)
      return {token, user}
    },

    login: async(parent, {email, password}) => {
      const user = await User.findOne({email})
      console.log(email, password)
      if(!user) {
        throw new AuthenticationError('No user found with this email address!')
      }
      const correctPw = await user.isCorrectPassword(password)
      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials')
      }
      const token = signToken(user)
      return { token, user }
    },

    saveSet: async (parent, { Item_Number, Name, Year, Theme, Pieces, Image_URL }, context) => {
      if(context.user) {
        const user = await User.findOneAndUpdate(
          { _id: context.user._id},
          {
            $addToSet: {
              savedSets: {
                Item_Number, Name: Name ? Name: "No name", Year, Theme, Pieces, Image_URL
              }
            }
          }
        )
        return user
        }
      throw new AuthenticationError('You need to be logged in!')
    },

    removeSet: async(parent, {Item_Number}, context) => {
      if(context.user) {
        const user = await User.findOneAndUpdate(
          {_id: context.user._id},
          {$pull: {savedSets: {Item_Number}}},
          { new: true}
        )
        return user;
      }
      throw new AuthenticationError('You need to be logged in!')
    }
  }
}
module.exports = resolvers;