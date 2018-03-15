import connectPut from 'react-put'

export default (reactComp) => {
    const options = { mapPropToDictionary: (props) => global.reactI18n }
    return connectPut(options)(reactComp)
}