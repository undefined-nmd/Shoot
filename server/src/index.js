import 'dotenv/config';
import cors from 'cors';
import bodyParser from 'body-parser';
import express from 'express';

import models, { connectDb } from './models';
import routes from './routes';

const app = express();

// Application-Level Middleware

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(async (req, res, next) => {
  req.context = {
    models,
    me: await models.User.findByLogin('Lukas'),
  };
  next();
});

// Routes

app.use('/session', routes.session);
app.use('/users', routes.user);
app.use('/requests', routes.request);

// Start

const eraseDatabaseOnSync = true;

connectDb().then(async () => {
  if (eraseDatabaseOnSync) {
    await Promise.all([
      models.User.deleteMany({}),
      models.Request.deleteMany({}),
    ]);

    createUsersWithRequests();
  }

  app.listen(process.env.PORT, () =>
    console.log(`Example app listening on port ${process.env.PORT}!`),
  );
});

//seed
const createUsersWithRequests = async () => {
  const user1 = new models.User({
    username: 'Lukas',
  });

  const user2 = new models.User({
    username: 'Wowter',
  });

  const request1 = new models.Request({
    text: 'Wat is een Pythagoras eigenlijk?',
    user: user1.id,
  });

  const request2 = new models.Request({
    text: 'Waarom compiled mijn code niet?',
    user: user2.id,
  });

  const request3 = new models.Request({
    text: 'HELP',
    user: user2.id,
  });

  await request1.save();
  await request2.save();
  await request3.save();

  await user1.save();
  await user2.save();
};
