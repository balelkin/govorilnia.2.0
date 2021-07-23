import {
    ArgumentsHost,
    BadRequestException,
    Catch,
    ExceptionFilter,
    ForbiddenException,
    NotFoundException,
    UnauthorizedException,
  } from '@nestjs/common';
  import { Response } from 'express';
  
  @Catch()
  export default class AllExceptionsFilter implements ExceptionFilter {
    catch(exception: any, host: ArgumentsHost) {
      const ctx = host.switchToHttp();
      const response = ctx.getResponse<Response>();
      if (exception.code === 11000) {
        return response.status(400).json({
          statusCode: 400,
          message: 'email or password already exists',
        });
      }
      if (
        exception instanceof NotFoundException ||
        exception instanceof ForbiddenException ||
        exception instanceof UnauthorizedException ||
        exception instanceof BadRequestException ||
        exception.code === 'ValidationException'
      ) {
        return response.status(exception.getStatus()).json(exception.response);
      }
      return response.status(500).json({
        statusCode: 500,
        message: 'Error server....',
      });
    }
  }
  