const basicPage = (res, view, title, revManifest) => {
        res.render(view, {
            title,
            revManifest
        })
    },

    pageWithData = (res, view, title, day, month, year, revManifest) => {
        return res.render(view, {
            title,
            day,
            month,
            year,
            revManifest
        });
    };

module.exports = { basicPage, pageWithData };