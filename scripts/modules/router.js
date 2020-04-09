const basicPage = (res, view, title, revManifest) => {
        res.render(view, {
            title,
            revManifest
        })
    },

    pageWithData = (res, view, title, data, revManifest) => {
        return res.render(view, {
            title,
            data,
            revManifest
        });
    };

module.exports = { basicPage, pageWithData };