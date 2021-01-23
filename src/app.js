const express = require('express');

require('./utils/secret');

const app = express();
app.use(express.json({limit: '20mb'} ));
app.use(express.urlencoded({ extended: false, limit: '20mb' }));
const port = process.env.PORT;

const verifyToken = require('./middlewares/verifyToken')

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

app.use('/media', mediaRouter);
app.use('/users', usersRouter);
app.use('/refresh_tokens', refreshTokensRouter);
app.use('/mentors', verifyToken, mentorsRouter);
app.use('/courses', coursesRouter);
app.use('/chapters', verifyToken, chaptersRouter);
app.use('/lessons', verifyToken, lessonsRouter);
app.use('/imagecourses', verifyToken, imageCoursesRouter);
app.use('/mycourses', verifyToken, myCoursesRouter);
app.use('/reviews', verifyToken, reviewsRouter);

app.listen(port, () => { 
    console.log(`Server is Running on port : ${port}`);
});