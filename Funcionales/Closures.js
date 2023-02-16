const auditProps = {
    createdAt: { default: new Date() },
    updatedAt: { default: new Date() },
    createdBy: { type: Schema.Types.ObjectId, ref: 'user' },
    updatedBy: { type: Schema.Types.ObjectId, ref: 'user' },
}

const Model = defaultProps => {
    return (name, props) => {
        const schema =  moongose.schema({
            ...defaultProps,
            ...props
        });

        return mongoose.model(name, schema);
    }
}

export const withAudit = Model(auditProps);