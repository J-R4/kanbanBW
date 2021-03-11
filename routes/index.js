const router = require('express').Router();
const UserController = require('../controllers/UserController.js');
const TaskController = require('../controllers/TaskController.js');

const { authenticate, authorize } = require('../middlewares/auth.js');

router.get('/', (req, res) => {
    res.send('welcome to KanbanBW good people !');
});

//User Controller
router.post('/login', UserController.login);
router.post('/oAuth', UserController.loginGoogle);

router.post('/register', UserController.register);

router.use(authenticate);

//TaskController
router.get('/tasks', TaskController.tasks);
router.post('/tasks', TaskController.postTask);

router.use(authorize);

router.get('/tasks/:id', TaskController.getOne);
router.put('/tasks/:id', TaskController.put);
router.patch('/tasks/:id', TaskController.patch);
router.delete('/tasks/:id', TaskController.delete);

module.exports = router;
