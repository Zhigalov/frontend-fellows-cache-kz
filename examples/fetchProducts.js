module.exports = function () {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(['Арабика', 'Робуста', 'Либерика', 'Эксцельза']), 1500);
    });
}
