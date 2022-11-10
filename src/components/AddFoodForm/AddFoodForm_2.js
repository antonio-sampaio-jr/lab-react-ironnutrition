import { Button, Form } from "react-bootstrap"

function AddFoodForm() {
    return (
        <Form>
            <Form.Group className="mb-3">
                <Form.Label>Nome do prato</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter email"
                    name="name"
                />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Imagem do prato</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter email"
                    name="image"
                />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Calorias do prato</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter email"
                    name="calories"
                />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Quantidade de porções</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter email"
                    name="servings"
                />
            </Form.Group>
            <Button className="mb-3" variant="primary" type="submit">
                Cadastrar
            </Button>
        </Form>
    )
}

export default AddFoodForm