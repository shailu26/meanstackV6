export function init(app) {
    // Insert routes belo
    app.use('/api/user', require('./api/user'));
};
