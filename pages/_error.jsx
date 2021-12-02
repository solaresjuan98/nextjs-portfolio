import Layout from "../components/Layout"

const Error = ({ statusCode }) => {
    return (
        <Layout>
            {
                statusCode ? (
                    <p className="text-center">
                        Your page could not be loaded | error {statusCode}
                    </p>
                ) : (
                    <p className="text-center">
                        Your page could not be loaded
                    </p>
                )
            }

        </Layout>
    )
}

export default Error
