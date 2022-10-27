import Alert from './Alert'
import Meta from './Meta'

const Layout = ({ preview, children }) => {
    return (
        <>
            <Meta />
            {preview && <Alert preview={preview} />}
            <main> {children}</main>
        </>
    )
}

export default Layout
