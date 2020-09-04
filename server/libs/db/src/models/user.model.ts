import { prop, modelOptions } from '@typegoose/typegoose';
import { ApiProperty } from '@nestjs/swagger';

@modelOptions({
  schemaOptions: {
    timestamps: true,
  },
})
export class User {
  @ApiProperty({ description: '用戶名', example: 'username' })
  @prop()
  username: string;

  @ApiProperty({ description: '密码', example: 'password' })
  @prop()
  password: string;
}
