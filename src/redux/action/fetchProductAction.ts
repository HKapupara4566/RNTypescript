

import { createAsyncThunk } from '@reduxjs/toolkit'
import axiosInstance from '../../service/api'

interface IHair{
    color: string,
    type: string
}
interface IUser {
    id: number,
    firstName: string,
    lastName: string,
    maidenName: string,
    age: number,
    gender: string,
    email: string,
    phone: string,
    username: string,
    password: string,
    birthDate: string,
    image: string,
    bloodGroup: string,
    height: number,
    weight: number,
    eyeColor: string,
    hair: IHair,
    ip: string,
}
export interface IUserDataResponse {
    users: IUser[],
    total: number,
    skip: number,
    limit: number
}

export const fetchProductsAction = createAsyncThunk<
    IUserDataResponse
>(
    'fetchProductsAction',
    async (_, { rejectWithValue, fulfillWithValue }) => {
        try {
            const response = await axiosInstance.get('https://dummyjson.com/users')
            const responseData: IUserDataResponse = response.data
            return fulfillWithValue(responseData)
        } catch (e) {
            return rejectWithValue(e || 'Unable to fetch data')
        }
    }
)