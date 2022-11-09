import { Divider, Form, Button, Input } from 'antd';
import { useState } from "react";

function AddFoodForm(props) {
  
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [calories, setCalories] = useState("");
  const [servings, setServings] = useState("");

  // monitoramento dos inputs a cada mudança
  const handleNameInput = (e) => {
      setName(e.target.value)
  }

  const handleImageInput = (e) => {
      setImage(e.target.value)
  }

  const handleCaloriesInput = (e) => {
      setCalories(e.target.value)
  }

  const handleServingsInput = (e) => {
      setServings(e.target.value)
  }

  //lidar com o evento de enviar e transformar ele em um novo objeto
  const handleSubmit = (e) => {
      // prevenir que a página será carregada
      e.preventDefault()

      // cria um novo objeto
      const newFood = {
          name,
          image,
          calories,
          servings
      }

      // chama o addBook que está sendo passado por props com o parâmetro
      props.addBook(newFood);

      // limpa os inputs no final do processo
      setName("");
      setImage("");
      setCalories("");
      setServings("");
  }
return (
    <Form onSubmit={ handleSubmit }>
        <Divider>Add Food Entry</Divider>
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Input
                    type="text"
                    placeholder="Name"
                    value={ name }
                    onChange={ handleNameInput }
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicImage">
                <Form.Label>Image</Form.Label>
                <Input
                    type="text"
                    placeholder="Image"
                    value={ image }
                    onChange={ handleImageInput }
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCalories">
                <Form.Label>Calories</Form.Label>
                <Input
                    type="text"
                    placeholder="Calories"
                    value={ calories }
                    onChange={ handleCaloriesInput }
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicServings">
                <Form.Label>Servings</Form.Label>
                <Input
                    type="text"
                    placeholder="Servings"
                    value={ servings }   
                    onChange={ handleServingsInput } 
                />
            </Form.Group>
            <Button variant="primary" type="submit">
                Create
            </Button>
        </Form>
  );
}

export default AddFoodForm;
