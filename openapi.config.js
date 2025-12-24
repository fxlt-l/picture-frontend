import { generateService } from '@umijs/openapi';
generateService({
  requestLibPath: "import { request } from '@/request'",
  schemaPath: 'http://localhost:8123/api/v2/api-docs', // Swagger 2.0 或 OpenAPI 3.0 的地址
  serversPath: './src', // 生成的文件夹的路径
});

