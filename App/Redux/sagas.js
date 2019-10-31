import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { REQUEST_API_DATA, requestApiData, receiveApiData } from './actions'
import { getCategories } from '../Services/categories'

function * getApiData (action) {
  try {
    const data = yield call(getCategories)
    yield put(receiveApiData(data))
  } catch (e) {
    console.log(e)
  }
}
