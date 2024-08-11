import { MidwayConfig } from '@midwayjs/core';
import { InterestCircle } from '../entity/circle.entity';
import { User } from '../entity/user.entity';
import { Post } from '../entity/post.entity';
import { Comment } from '../entity/comment.entity';
import { uploadWhiteList } from '@midwayjs/upload';
import { join } from 'path';
import { tmpdir } from 'os';


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
  },
  upload: {
    // mode: UploadMode, 默认为file，即上传到服务器临时目录，可以配置为 stream
    mode: 'file',
    // fileSize: string, 最大上传文件大小，默认为 10mb
    fileSize: '10mb',
    // whitelist: string[]，文件扩展名白名单
    whitelist: uploadWhiteList.filter(ext => ext !== '.pdf'),
    // tmpdir: string，上传的文件临时存储路径
    tmpdir: join(tmpdir(), 'midway-upload-files'),
    // cleanTimeout: number，上传的文件在临时目录中多久之后自动删除，默认为 5 分钟
    cleanTimeout: 5 * 60 * 1000,
    // base64: boolean，设置原始body是否是base64格式，默认为false，一般用于腾讯云的兼容
    base64: false,
    // 仅在匹配路径到 /api/upload 的时候去解析 body 中的文件信息
    match: /\/api\/circle\/\d+\/post/,
  },
} as MidwayConfig;
