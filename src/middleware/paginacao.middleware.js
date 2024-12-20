module.exports = (req, res, next) => {
    let { q = "", limit = 10, offset = 0 } = req.query;

    limit = Number(limit)
    offset = Number(offset)
    q = String(q)

    req.query.q = q
    req.query.limit = limit
    req.query.offset = offset

    return next()
}