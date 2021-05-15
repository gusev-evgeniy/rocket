const Router = require('express')
const { check } = require('express-validator')

const router = new Router()

const authController = require('./controller')

router.post('/signup', [
  check('firstName', 'Имя не должно быть пустым').trim().notEmpty(),
  check('lastName', 'Фамилия не должна быть пустым').trim().notEmpty(),
  check('email', 'Требуется email').isEmail(),
  check('password', 'Минимальная длина 4 символа').isLength({ min: 4 }),
  check('role', 'Нет такой роли').isIn(['user', 'admin'])
], authController.signup)
router.post('/login', authController.login)

module.exports = router