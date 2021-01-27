const express = require('express');

require('./utils/secret');

const app = express();
app.use(express.json({limit: '20mb'} ));
app.use(express.urlencoded({ extended: false, limit: '20mb' }));
const port = process.env.PORT;

const verifyToken = require('./middlewares/verifyToken')
const can = require('./middlewares/permission')

const mediaRouter = require('./routes/media');
const usersRouter = require('./routes/users');
const refreshTokensRouter = require('./routes/refreshTokens');
const mentorsRouter = require('./routes/mentors');
const coursesRouter = require('./routes/courses');
const chaptersRouter = require('./routes/chapters');
const lessonsRouter = require('./routes/lessons');
const imageCoursesRouter = require('./routes/imageCourses');
const myCoursesRouter = require('./routes/myCourses');
const reviewsRouter = require('./routes/reviews');
const webhookRouter = require('./routes/webhook');
const orderRouter = require('./routes/orders');

app.use('/media', verifyToken, can('superadmin', 'admin'), mediaRouter);
app.use('/users', usersRouter);
app.use('/refresh_tokens', refreshTokensRouter);
app.use('/mentors', verifyToken, can('superadmin'), mentorsRouter);
app.use('/courses', coursesRouter);
app.use('/chapters', verifyToken, can('superadmin'), chaptersRouter);
app.use('/lessons', verifyToken, can('superadmin'), lessonsRouter);
app.use('/imagecourses', verifyToken, can('superadmin'), imageCoursesRouter);
app.use('/mycourses', verifyToken, can('superadmin', 'admin'), myCoursesRouter);
app.use('/reviews', verifyToken, can('superadmin', 'admin'), reviewsRouter);
app.use('/webhook', webhookRouter);
app.use('/orders', verifyToken, can('superadmin', 'admin'), orderRouter);

app.listen(port, () => { 
    console.log(`Server is Running on port : ${port}`);
});