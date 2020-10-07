import * as R from 'ramda'


export const getPhoneById = (state, id) => {
    return R.prop(id, state.phones)
}

export const getPhones = state => {
    const phones = state.phonesPage.ids
        .map(id => getPhoneById(state, id))
        .filter(item => item.name.includes(state.phonesPage.search) )

    return phones;
}

export const getRenderedPhonesLength = state => R.length(state.phonesPage.ids)

export const getTotalBasketCount = state => state.basket.length

export const getTotalBasketPrice = state => {
    const totalPrice = R.compose(
        R.sum,
        R.pluck('price'),
        R.map(id => getPhoneById(state, id)),
    )(state.basket);

    return totalPrice;
}