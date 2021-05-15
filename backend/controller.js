const { validationResult } = require('express-validator')
const bcrypt = require('bcrypt')

const User = require('./User')

const authController = {
  async signup(req, res) {
    try {
      const errors = validationResult(req)
      if (!errors.isEmpty()) {
        return res.status(400).send(errors)
      }

      const { firstName, lastName, password, email, role } = req.body
      const user = await User.findOne({ email })

      if (user) {
        res.status(400).json({ errors: [{ msg: 'Пользователь с таким адресом уже зарегистрирован' }] })
      }

      const hashPassword = await bcrypt.hash(password, 12)
      const newUser = await new User({ firstName, lastName, password: hashPassword, email, role })
      await newUser.save()

      res.json({ message: 'Пользователь создан' })

    } catch (error) {
      res.status(400).json({ errors: [{ msg: 'Возникла какая-то ошибка' }] })
    }
  },

  async login(req, res) {
    try {
      const { email, password } = req.body
      const user = await User.findOne({ email })

      if (!user) {
        return res.status(401).json({ msg: 'Неверный email' })
      }

      const doMatch = await bcrypt.compare(password, user.password)

      if (!doMatch) {
        return res.status(401).json({ msg: 'Неверный пароль' })
      }

      res.json(user)

    } catch (error) {
      res.status(400).json({ msg: 'Возникла какая-то ошибка' })
    }
  }
}

module.exports = authController;