import { NextFunction, Request, Response } from "express";
import { IUser } from "./IUser";

export interface IRequest extends Request {
    user: IUser
};


export interface IResponse extends Response {}

export interface INextfunction extends NextFunction {}