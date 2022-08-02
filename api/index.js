import Records from './records'

export default (context, inject) => {
    const factories = {
        records: Records(context.$axios),
    }

    inject('api', factories)
}
