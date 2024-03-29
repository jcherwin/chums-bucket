module.exports = {
    ifEquals: (arg1, arg2, options) => {
        return (arg1 === arg2) ? options.fn(this) : options.inverse(this);
    },
    toIndex: (num) => {
        return num - 1;
    },
};
