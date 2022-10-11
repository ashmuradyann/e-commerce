import { CATEGORIES_ACTION_TYPES } from './category.types'
import { createAction } from '../../utils/reducer/reducer.utils';

import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils'

export const fetchCategoriesStart = () => createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START)

export const fetchCategoriesSuccess = (categoriesArray) => createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS, categoriesArray)

export const fetchCategoriesFail = (error) => createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAIL, error)

export const fetchCategoriesAsync = () => async (dispatch) => {
    dispatch(fetchCategoriesStart())

    try {
        const categoriesArray = await getCategoriesAndDocuments('categories')
        dispatch(fetchCategoriesSuccess(categoriesArray))
    } catch (error) {
        dispatch(fetchCategoriesFail(error))
    }
}