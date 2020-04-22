const basicPage = (res, view, title) => {
        res.render(view, {
            title
        })
    },

    pageWithData = (res, view, title, day, month, year) => {
        return res.render(view, {
            title,
            day,
            month,
            year
        });
    };

module.exports = { basicPage, pageWithData };