BUG #1: Its says to npm run seed but it does nothing but create error messages.

BUG #2: authUser() decodes token instead of verifying

BUG #3: in routes/auth there was mo validation for database inpute

Bug #4: In routes/auth /login does not check that username and password are both submitted

Bug #5: In routes/auth /login does not await User.authenticate

BUG $6: Delete users/username does not await results