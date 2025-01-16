import { Post, Res, HttpStatus } from '@nestjs/common';
import { Response } from 'express';
export class ResponseService {
    default({ statusCode, message = 'Request Completed', data, success }: { statusCode: number, message?: string, data?: any, success?: boolean }) {
        const res = {
            data: data,
            message: message,
            success: success || true, // Default success to true if not provided
            statusCode
        }
        return res;
    }

    error({ statusCode = 400, message = 'Request Failed', data, error }: { statusCode?: number, message?: string, data?: any, error?: any }) {
        const res = {
            data: data,
            message: message,
            success: false,
            statusCode,
            error
        }
        return res;
    }

    success({ statusCode = 200, message = 'Request Successful', data }: { statusCode?: number, message?: string, data?: any }) {
        const res = {
            data: data,
            message: message,
            success: true,
            statusCode
        }
        return res;
    }


}
