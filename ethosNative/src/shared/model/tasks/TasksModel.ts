import type React from 'react';

export interface ITask {
  code: string;
  label: React.ReactNode | string;
  description: React.ReactNode | string;
  taskDto: ITasksDto | null;
}

export interface ITasksDto {
  id: number;
  createdAt: string;
  code: string;
  userId: number;
  isSuccess: boolean;
}

export interface IGetTasksInput {
  userId?: number;
}

export interface IResponseGetTasks {
  getTasks: ITasksDto[];
}

export interface IGetTasksRequest {
  where: IGetTasksInput;
}

export interface IUpdateTaskRequest {
  userId: number;
  code: string;
}

export interface IResponseUpdateTaskResponse {
  updateTask: ITasksDto;
}
