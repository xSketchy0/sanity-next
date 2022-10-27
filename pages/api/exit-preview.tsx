const exit = async (_, res) => {
    res.clearPreviewData()

    res.writehead(307, {
        Location: '/',
    })

    res.end()
}

export default exit
