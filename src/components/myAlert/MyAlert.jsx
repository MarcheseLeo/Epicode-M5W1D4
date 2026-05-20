
import { Alert } from "react-bootstrap"

export const MyAlert = ({ variant, message }) => {


    return (
        <Alert variant={variant} className="my-4">
            <Alert.Heading>{message}</Alert.Heading>
        </Alert>
    )

}
