import Layout from "../components/Layout"
import Link from 'next/link'

const Custom404 = () => {
    return (
        <Layout>
            <div>
                <h1>404</h1>
                <p>
                    Page not found. Please go to {" "}
                    <Link href="/">
                        <a>/home</a>
                    </Link>
                </p>
            </div>

        </Layout>
    )
}

export default Custom404
