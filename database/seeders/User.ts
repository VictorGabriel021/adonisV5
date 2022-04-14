import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'

export default class UserSeeder extends BaseSeeder {
  public async run() {
    const uniqueKey = 'eMail'

    await User.updateOrCreateMany(uniqueKey, [
      {
        eMail: 'virking@adonisjs.com',
        password: 'newsenha',
      },
      {
        eMail: 'romainai@adonisjs.com',
        password: 'aoba',
      },
      {
        eMail: 'novoas@adonisjs.com',
        password: 'sejaja',
      },
    ])
  }
}
