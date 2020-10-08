import * as R from 'ramda'


export const getActiveCategoryId = ownProps => R.path(['match', 'params', 'id'], ownProps)

export const getPhoneById = (state, id) => {
    return R.prop(id, state.phones)
}

export const getPhones = (state, ownProps) => {

    const activeCategoryId = getActiveCategoryId(ownProps)
    const phones = state.phonesPage.ids
        .map(id => getPhoneById(state, id))
        .filter(item => item.name.includes(state.phonesPage.search))
        .filter(item => activeCategoryId? item.categoryId === activeCategoryId : true)

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

export const getCategories = state => R.values(state.categories)

export const getBasketPhonesWithCount = state => {
    const phoneCount = id => R.compose(
        R.length,
        R.filter(basketId => R.equals(id, basketId))
    )(state.basket)
    const phoneWithCount = phone => R.assoc('count', phoneCount(phone.id), phone)
    const uniqueIds = R.uniq(state.basket)
    const phones = R.compose(
        R.map(phoneWithCount),
        R.map(id => getPhoneById(state, id))
    )(uniqueIds)

    return phones;
}
