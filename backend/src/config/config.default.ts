import { MidwayConfig } from '@midwayjs/core';
import { InterestCircle } from '../entity/circle.entity';
import { User } from '../entity/user.entity';
import { Post } from '../entity/post.entity';
import { Comment } from '../entity/comment.entity';

export default {
  // use for cookie sign key, should change to your own and keep security
  keys: '1723043061115_2419',
  koa: {
    port: 7001,
  },
  cors:{
    origin:'*',
  },
  typeorm:{
    dataSource:{
      default:{
        type:'mysql',
        host:'localhost',
        port:3306,
        username:'root',
        password:'945832331485Lyy',
        database:'mydatabase',
        synchronize:true,
        logging:false,
        entities:[InterestCircle,User,Post,Comment]
      }
    }
  }
} as MidwayConfig;
