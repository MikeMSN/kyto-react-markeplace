import * as R from 'ramda'


export const getPhoneById = (state, id) => {
   return  R.prop(id, state.phones)
}

export const getPhones = state => {
    return R.map(id => getPhoneById(state, id), state.phonesPage.ids);
}