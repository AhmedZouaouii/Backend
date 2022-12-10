const clubRouter=require('./routes/clubRoutes.js')
const db=require('./models');
db.sequelize.sync().then();


const livreRouter=require('./routes/livreRoutes.js')
const db=require('./models');
db.sequelize.sync().then();


const usersRouter=require('./routes/clubRoutes.js')
const db=require('./models');
db.sequelize.sync().then();