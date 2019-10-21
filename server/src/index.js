import 'dotenv/config';
import cors from 'cors';
import bodyParser from 'body-parser';
import express from 'express';

// import models, { connectDb } from './models';
import models, { connectDb } from './api/models'
import apiV1Router from './api/routes';

const app = express();

// Application-Level Middleware

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.use(async (req, res, next) => {
//   req.context = {
//     models,
//     // me: await models.User.findByLogin('Lukas'),
//   };
//   // next();
// });

// Routes
app.use('/api', apiV1Router)

// Start

const eraseDatabaseOnSync = true;

connectDb().then(async () => {
  if (eraseDatabaseOnSync) {
    await Promise.all([
      // models.User.deleteMany({}),
      models.Request.deleteMany({}),
    ]);

    //seed the db
    // createUsersWithRequests();
  }

  app.listen(process.env.PORT, () =>
    console.log(`Example app listening on port ${process.env.PORT}!`),
  );
});




//seed
const createUsersWithRequests = async () => {
  const student1 = new models.User({
    username: 'Lukas',
    role: 'student'
  });

  const student2 = new models.User({
    username: 'Wowter',
    role: 'student'
  });

  const teacher1 = new models.User({
    username: 'Philippe',
    role: 'teacher'
  });

  const teacher2 = new models.User({
    username: 'Dieter',
    role: 'teacher'
  });

  const request1 = new models.Request({
    message: 'Wat is een Pythagoras eigenlijk?',
    student_id: student1.id,
    subject_id: 12,
    upvote_count: 3,
    request_type: 0,
    location: {}
  });

  const request2 = new models.Request({
    message: 'Waarom compiled mijn code niet?',
    student_id: student2.id,
    subject_id: 12,
    upvote_count: 3,
    request_type: 0,
    location: {}
  });

  const request3 = new models.Request({
    message: 'HELP',
    student_id: student2.id,
    subject_id: 12,
    upvote_count: 3,
    request_type: 0,
    location: {}
  });

  await request1.save();
  await request2.save();
  await request3.save();

  await student1.save();
  await student2.save();
  await teacher1.save();
  await teacher2.save();
};
