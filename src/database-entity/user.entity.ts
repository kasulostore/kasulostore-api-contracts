import {  Entity } from "./base.entity";

export type UserEntity = Entity & {
  email: string;
  name: string;
};
