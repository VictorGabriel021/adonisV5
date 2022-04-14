import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'

export default class UserSeeder extends BaseSeeder {
  public async run() {
    const uniqueKey = 'email'

    await User.updateOrCreateMany(uniqueKey, [
      {
        email: 'jao@adonisjs.com',
        password: 'admin',
      },
      {
        email: 'mario@adonisjs.com',
        password: 'admin',
      },
      {
        email: 'vitor@adonisjs.com',
        password: 'admin',
      },
    ])
  }
}
