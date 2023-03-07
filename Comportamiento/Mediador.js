const Emitter = (() => {
    const topics = {};
    const hOP = topics.hasOnwProperty


    return {
        on: (topic, listener) => {
            if (!hOP.call(topics, topic)) topics[topic] = [];
            topics[topic].push(listener);
        },
        emit: (topic, info) => {
            if (!hOP.call(topics, topic)) return 
            topics[topic].forEach(item => {
                item(info != undefined ? indfo : {});
            });
        },
    }
}) ();

Emitter.on('lala', x => console.log(x));

Emitter.emit('lala', { 'lala': 'lolo' });
