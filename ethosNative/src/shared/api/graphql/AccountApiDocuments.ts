import { gql, type TypedDocumentNode } from '@apollo/client';

import type { IStringFilterArgs, IGetTasksRequest, IResponseGetTasks, IResponseUpdateTaskResponse, IUpdateTaskRequest } from '@/shared/model';

export interface SignInUserInput {
  idTg: string;
}

export interface UserProfileDto {
  accessToken: string;
  createdAt: string;
  currentStreak: number;
  id: number;
  idTg: number;
  updatedAt: string;
  countAuth: number;
}

export interface NewUserInput {
  idTg: string;
}

export interface UpdateUser {
  id: number;
  input: UpdateUserInput;
}

export interface UpdateUserInput {
  idTg: string;
}

export interface UserDto {
  id: number;
  createdAt: string;
  updatedAt: string;
  idTg: string;
  countAuth: number;
}

export interface IGetUserByIdReq {
  Id: number;
}

export interface ILvlDto {
  id: number;
  value: number;
  tokens: number;
}

export interface IUserById {
  id: number;
  maxStreak: number;
  level: ILvlDto;
  currentStreak: number;
}

export interface IGetUserByIdResp {
  getUserById: IUserById;
}

export interface IMeaningDto {
  id: number;
  createdAt: string;
  userId: number;
  valueId: number;
  value?: IValuesDto;
  parentId: number;
  isSynthesize: boolean;
  children?: IMeaningDto[];
  meaning: string;
}

export interface NewValueInput {
  value: string;
}

export interface ICreateValuesInput {
  userId: number;
  values: NewValueInput[];
}

export interface ISelectValuesEmotionalResponse {
  selectEmotionalValues: IValuesDto[];
}

export interface ISelectValuesEmotionalInput {
  values: number[];
}

export interface IValuesDto {
  createdAt: string;
  id: number;
  userId: number;
  value: string;
  isEmotional: boolean;
  parentId: number | null;
  children: IValuesDto[] | null;
  meanings?: IMeaningDto[];
}

export interface IValues {
  createdAt: string;
  id: number;
  userId: number;
  value: string;
  meanings?: IMeaningDto[];
}

export interface IResponseCreateValues {
  createdValues: IValuesDto[];
}

export interface IDateFilterArgs {
  gt?: Date;
  lt?: Date;
}

export interface IGetValuesWhere {
  createdAt?: IDateFilterArgs;
  userId?: number;
  parentId?: number | null;
  value?: IStringFilterArgs;
}

export interface IGetValuesRequest {
  where?: IGetValuesWhere;
}

export interface IGetValuesByDayRequest {
  where?: IGetValuesWhere;
}

export interface IGetValueStatistics {
  valueId: number;
}

export interface IGetValueRequest {
  valueId: number;
}

export interface IGetMeaningByIdRequest {
  meaningId: number;
}

export interface IGetMeaningRequest {
  valueId: number;
}

export interface IResponseGetValues {
  getValues: IValuesDto[];
}

export interface IOrigValuesDto {
  value: IValuesDto;
  percent: number;
}

export interface IOrigValues {
  value: IValues;
  percent: number;
}

export interface IResponseGetUniqueCreatedAtValues {
  getUniqueCreatedAtValues: IValuesDto[];
}

export interface IResponseGetValuesInDay {
  getUniqueCreatedAtValues: IValuesDto[];
}

export interface IStatisticValueDto {
  numberOfMeanings: number;
  numberOfSynthesizeMeanings: number;
  valueFrequency: number;
  lastDateMeaning: string | null;
}

export interface IResponseGetValueStatistics {
  getValueStatistics: IStatisticValueDto;
}

export interface IResponseGetValue {
  getValueById: IValuesDto;
}

export interface IResponseGetMeaningById {
  getMeaningById: IMeaningDto;
}

export interface IResponseGetMeanings {
  getMeanings: IMeaningDto[];
}

export interface IResponseGetSynthesizeMeanings {
  getSynthesizeMeanings: IMeaningDto[];
}

export interface INewMeaningInput {
  meaning: string;
}

export interface ICreateMeaningInput {
  userId: number;
  valueId: number;
  meaning: INewMeaningInput;
}

export interface ICreateSynthesizeMeaningInput {
  userId: number;
  valueId: number;
  meaning: INewMeaningInput;
  meanings: number[];
}

export interface IResponseCreateMeaning {
  createdMeaning: IMeaningDto;
}

export interface IResponseCreateSynthesizeMeaning {
  synthesizeMeaning: IMeaningDto;
}

export interface IMeaningsSynthesizeDto {
  id: number;
  createdAt: string;
  synthesizeText: string;
  userId: number;
  valueId: number;
}

export interface IResponseGetMeaningsSynthesize {
  getMeaningsSynthesize: IMeaningsSynthesizeDto[];
}

export interface ObjectId {
  id: number;
}

export interface IConnectID {
  connect: ObjectId[];
}

export interface ICreatedMeaningsInput {
  meaning: IConnectID;
  meanings: number[];
  userId: number;
  valueId: number;
}

export interface ICreatedMeaningSynthesizeInput {
  input: ICreatedMeaningsInput;
}

export interface IResponseCreatedMeaningSynthesize {
  createdMeaningSynthesize: IMeaningsSynthesizeDto;
}

export interface IGetLvlRequest {
  userId: number;
}

export interface IResponseGetLvl {
  getLvl: ILvlDto;
}

export interface IShareMeaning {
  id: number;
  createdAt: string;
  name: string | null;
  value: string;
  meaning: string;
}

export interface IGetShareMeaningRequest {
  value: string;
}

export interface IResponseShareMeaning {
  getShareMeanings: IShareMeaning[];
}

export interface NewSharedMeaning {
  name?: string;
  value: string;
  meaning: string;
}

export interface IResponseCreateShareMeaning {
  createdShareMeaning: IShareMeaning;
}

export interface ICreateShareMeaningRequest {
  sharedMeaningsInput: NewSharedMeaning;
}

export const LOGIN_USER: TypedDocumentNode<{ loginUser: UserProfileDto }, { input: SignInUserInput }> = gql`
  mutation loginUser($input: SignInUserInput!) {
    loginUser(input: $input) {
      id
      createdAt
      accessToken
      currentStreak
      idTg
      updatedAt
      countAuth
    }
  }
`;

export const IS_HAVE_USER: TypedDocumentNode<{ isHaveUser: boolean }, { idTg: string }> = gql`
  query isHaveUser($idTg: String!) {
    isHaveUser(idTg: $idTg)
  }
`;

export const GET_USER_BY_ID: TypedDocumentNode<IGetUserByIdResp, IGetUserByIdReq> = gql`
  query getUserById($Id: Int!) {
    getUserById(Id: $Id) {
      id
      maxStreak
      currentStreak
      countAuth
      level {
        id
        value
        tokens
      }
    }
  }
`;

export const CREATE_USER: TypedDocumentNode<{ createdUser: UserProfileDto }, { input: NewUserInput }> = gql`
  mutation createdUser($input: NewUserInput!) {
    createdUser(input: $input) {
      id
      createdAt
      accessToken
      idTg
      updatedAt
      countAuth
    }
  }
`;

export const UPDATE_USER: TypedDocumentNode<{ updateUser: UserDto }, { id: number; input: UpdateUserInput }> = gql`
  mutation updateUser($id: Int!, $input: UpdateUserInput!) {
    updateUser(Id: $id, input: $input) {
      id
      createdAt
      updatedAt
      idTg
      countAuth
    }
  }
`;

export const GET_VALUES: TypedDocumentNode<IResponseGetValues, IGetValuesRequest> = gql`
  query getValues($where: GetValuesInput!) {
    getValues(where: $where) {
      createdAt
      id
      userId
      parentId
      isEmotional
      value
      meanings {
        id
        createdAt
        userId
        valueId
        meaning
      }
    }
  }
`;

export const GET_STATISTIC_VALUE: TypedDocumentNode<IResponseGetValueStatistics, IGetValueStatistics> = gql`
  query getValueStatistics($valueId: Int!) {
    getValueStatistics(valueId: $valueId) {
      numberOfMeanings
      numberOfSynthesizeMeanings
      valueFrequency
      lastDateMeaning
    }
  }
`;

export const GET_UNIQUE_CREATED_AT_VALUES: TypedDocumentNode<IResponseGetValuesInDay, IGetValuesByDayRequest> = gql`
  query getUniqueCreatedAtValues($where: GetValuesInput) {
    getUniqueCreatedAtValues(where: $where) {
      createdAt
      id
      userId
      value
    }
  }
`;

export const GET_VALUE: TypedDocumentNode<IResponseGetValue, IGetValueRequest> = gql`
  query getValueById($valueId: Int!) {
    getValueById(valueId: $valueId) {
      createdAt
      id
      userId
      value
      meanings {
        id
        createdAt
        userId
        valueId
        meaning
      }
    }
  }
`;

export const CREATE_VALUES: TypedDocumentNode<IResponseCreateValues, ICreateValuesInput> = gql`
  mutation createdValues($userId: Int!, $values: [NewValueInput!]!) {
    createdValues(userId: $userId, values: $values) {
      createdAt
      id
      userId
      value
      isEmotional
    }
  }
`;

export const SELECT_VALUES_EMOTIONAL: TypedDocumentNode<ISelectValuesEmotionalResponse, ISelectValuesEmotionalInput> = gql`
  mutation selectEmotionalValues($values: [Int!]!) {
    selectEmotionalValues(values: $values) {
      createdAt
      id
      userId
      value
      isEmotional
    }
  }
`;

export const CREATE_MEANING: TypedDocumentNode<IResponseCreateMeaning, ICreateMeaningInput> = gql`
  mutation createdMeaning($userId: Int!, $valueId: Int!, $meaning: NewMeaningInput!) {
    createdMeaning(userId: $userId, valueId: $valueId, meaning: $meaning) {
      id
      createdAt
      userId
      valueId
      meaning
    }
  }
`;

export const GET_MEANING_BY_ID: TypedDocumentNode<IResponseGetMeaningById, IGetMeaningByIdRequest> = gql`
  query getMeaningById($meaningId: Int!) {
    getMeaningById(meaningId: $meaningId) {
      id
      createdAt
      userId
      isSynthesize
      meaning
      value {
        id
        createdAt
        value
      }
    }
  }
`;

export const SYNTHESIZE_MEANING: TypedDocumentNode<IResponseCreateMeaning, ICreateSynthesizeMeaningInput> = gql`
  mutation synthesizeMeaning($userId: Int!, $valueId: Int!, $meaning: NewMeaningInput!, $meanings: [Int!]!) {
    synthesizeMeaning(userId: $userId, valueId: $valueId, meaning: $meaning, meanings: $meanings) {
      id
      createdAt
      userId
      isSynthesize
      valueId
      meaning
    }
  }
`;

export const GET_MEANINGS: TypedDocumentNode<IResponseGetMeanings, IGetMeaningRequest> = gql`
  query getMeanings($valueId: Int!) {
    getMeanings(valueId: $valueId) {
      id
      createdAt
      userId
      valueId
      isSynthesize
      meaning
      children {
        id
        meaning
        isSynthesize
      }
    }
  }
`;

export const GET_SYNTHESIZE_MEANINGS: TypedDocumentNode<IResponseGetSynthesizeMeanings, IGetMeaningRequest> = gql`
  query getSynthesizeMeanings($valueId: Int!) {
    getSynthesizeMeanings(valueId: $valueId) {
      id
      createdAt
      userId
      valueId
      isSynthesize
      meaning
      children {
        id
        meaning
        isSynthesize
      }
    }
  }
`;

export const GET_LVL_USER: TypedDocumentNode<IResponseGetLvl, IGetLvlRequest> = gql`
  query getLvl($userId: Int!) {
    getLvl(userId: $userId) {
      id
      userId
      tokens
      value
    }
  }
`;

export const GET_SHARE_MEANING: TypedDocumentNode<IResponseShareMeaning, IGetShareMeaningRequest> = gql`
  query getShareMeanings($value: String!) {
    getShareMeanings(value: $value) {
      id
      createdAt
      name
      value
      meaning
    }
  }
`;

export const CREATE_SHARE_MEANING: TypedDocumentNode<IResponseCreateShareMeaning, ICreateShareMeaningRequest> = gql`
  mutation createdShareMeaning($sharedMeaningsInput: NewSharedMeaningsInput!) {
    createdShareMeaning(sharedMeaningsInput: $sharedMeaningsInput) {
      id
      createdAt
      name
      value
      meaning
    }
  }
`;

export const GET_TASKS: TypedDocumentNode<IResponseGetTasks, IGetTasksRequest> = gql`
  query getTasks($where: GetTasksInput!) {
    getTasks(where: $where) {
      createdAt
      id
      userId
      code
      isSuccess
    }
  }
`;

export const UPDATE_TASK: TypedDocumentNode<IResponseUpdateTaskResponse, IUpdateTaskRequest> = gql`
  mutation updateTask($userId: Int!, $code: String!) {
    updateTask(userId: $userId, code: $code) {
      id
      createdAt
      isSuccess
      code
    }
  }
`;
