import { ArgumentsHost, ExceptionFilter } from '@nestjs/common';
export default class ErrorFilter implements ExceptionFilter {
    catch(exception: Error, host: ArgumentsHost): void;
}
