const { User } = require("../Model/User.model");

const GitHubStrategy = require("passport-github2").Strategy;
exports.GithubPassword = (passport) => {
  passport.serializeUser(function (user, done) {
    done(null, user);
  });

  passport.deserializeUser(function (obj, done) {
    done(null, obj);
  });
  passport.use(
    new GitHubStrategy(
      {
        clientID: process.env.ClientID,
        clientSecret: process.env.Clientsecrets,
        callbackURL: "/api/auth/github/callback",
      },
      async function (accessToken, refreshToken, profile, done) {
        const user = await User.findOne({ username: profile.username });
        if (!user) {
          const newUser = new User({
            name: profile.displayName,
            username: profile.username,
            profileUrl: profile.profileUrl,
            avatarUrl:profile.photos[0].value,
            likedProfiles:[],
            likedBy:[]
          });
          await newUser.save();
          done(null,newUser);
        }
        else{
            done(null,user)
        }
      }
    )
  );
};
