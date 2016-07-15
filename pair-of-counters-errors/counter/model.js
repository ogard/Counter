import t from 'tcomb';
import TagsComponent from './slider'

const Model = t.struct({
    count: t.Number,
    increment: t.Number,
    decrement: t.union([t.Number, t.String])
});

const opcije = {
    fields: {
        count: {
            label: 'Vrednost brojača je: ',
            disabled: true
        },
        increment: {
            factory: TagsComponent
        },
        decrement: {
            label: 'Dekrementiraj za: '
        }
    }
}

export {Model, opcije};