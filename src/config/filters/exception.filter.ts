import {
  ArgumentsHost,
  BadRequestException,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
  NotFoundException,
} from "@nestjs/common";
import { classToPlain } from "class-transformer";
import { isArray, isObject } from "class-validator";
import { Request, Response } from "express";
import { QueryFailedError, TypeORMError } from "typeorm";
import { BaseResponse } from "../../shared/kernel/dto/base.response";
import { AppException } from "src/shared/exceptions/app-exception";

@Catch()
export class CustomExceptionFilter implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    const context = host.switchToHttp();
    const request = context.getRequest<Request>();
    const response = context.getResponse<Response>();

    let status = HttpStatus.INTERNAL_SERVER_ERROR;
    let message = "Internal Server Error!";

    console.log(exception);

    switch (exception.constructor) {
      case AppException:
        message = (exception as AppException).getResponse().toString();
        status = (exception as AppException).getStatus();

        break;

      case NotFoundException:
        const response = (exception as NotFoundException).getResponse();

        if (isObject(response)) {
          message = (response as any).message;
          status = (response as any).statusCode;
        } else {
          message = response.toString();
          status = (exception as NotFoundException).getStatus();
        }

        break;

      case BadRequestException:
        status = (exception as BadRequestException).getStatus();
        const exceptionResponse = (
          exception as BadRequestException
        ).getResponse();
        if (isObject(exceptionResponse)) {
          const rawMessage = (exceptionResponse as any).message;
          if (isArray(rawMessage)) {
            message = (rawMessage as string[]).join("\n");
          } else {
            message = rawMessage;
          }
        } else {
          message = exceptionResponse;
        }
        break;
      case HttpException:
        status = (exception as HttpException).getStatus();
        message = exception.message;
        break;
      case TypeORMError:
        status = HttpStatus.BAD_REQUEST;
        message = (exception as TypeORMError).message;
        break;
      case QueryFailedError:
        message = (exception as QueryFailedError).message;
        status = HttpStatus.BAD_REQUEST;
        break;
      case String:
        status = HttpStatus.INTERNAL_SERVER_ERROR;
        message = exception;
        break;
      default:
        message = exception.toString();
        break;
    }

    const body = BaseResponse.error(message);
    response.status(status).json(body);
  }

  private getExceptionMessage(exception: HttpException): string {
    const exceptionResponse = exception.getResponse();

    if (exceptionResponse) {
      if (isObject(exceptionResponse)) {
        return classToPlain(exceptionResponse).message;
      }
      return exceptionResponse as string;
    }
    return exception.message;
  }
}
