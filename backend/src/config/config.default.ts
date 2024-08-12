import { MidwayConfig } from '@midwayjs/core';
import { InterestCircle } from '../entity/circle.entity';
import { User } from '../entity/user.entity';
import { Post } from '../entity/post.entity';
import { Comment } from '../entity/comment.entity';
import { uploadWhiteList } from '@midwayjs/upload';
import { join } from 'path';
import { tmpdir } from 'os';
import { config } from 'dotenv';

config();

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
        host:process.env.DB_HOST,
        port:Number(process.env.DB_PORT),
        username:process.env.DB_USERNAME,
        password:process.env.DB_PASSWORD,
        database:process.env.DB_DATABASE,
        synchronize:true,
        logging:false,
        entities:[InterestCircle,User,Post,Comment]
      }
    }
  },
  upload: {
    mode: 'file',
    fileSize: '10mb',
    whitelist: uploadWhiteList.filter(ext => ext !== '.pdf'),
    tmpdir: join(tmpdir(), 'midway-upload-files'),
    cleanTimeout: 5 * 60 * 1000,
    base64: false,
    match: /\/api\/circle\/\d+\/post/,
  },
} as MidwayConfig;
