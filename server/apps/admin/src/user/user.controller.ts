import { Controller } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { User } from '@libs/db/models/user.model';
import { Crud } from 'nestjs-mongoose-crud';
import { ApiTags } from '@nestjs/swagger';

@Crud({
  model: User,
})
@Controller('user')
@ApiTags('User')
export class UserController {
  constructor(@InjectModel(User) private readonly model) {}
}
