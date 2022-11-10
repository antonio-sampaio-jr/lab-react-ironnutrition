import { useState } from "react";
import {Row, Col, Divider, Input, Button, Form } from 'antd';

function AddFoodForm({ food, setFood }) {
    const [form, setForm] = useState({
        name: "",
        calories: "",
        image: "",
        servings: ""
    })

    const handleChange = (e) => {
        // evento que a cada mudança ele vai capturar o nome (name) do meu input
            // e através desse nome ele captura o valor (value) deste input
        
        // um novo objeto -> um novo item
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        // uma atualização da lista -> array inteiro
        setFood([...food, form])

        setForm({
            name: '',
            calories: '',
            image: '',
            servings: ''
        })
    }
    
    return (
      <Form>
      <Row>
        <Col>
          <Divider>Add Food Entry</Divider>
          <h3>Name</h3>
          <Input name="name" onChange={handleChange} value={form.name}/>
        </Col>
      </Row>
      <Row>  
        <Col>
          <h3>Image</h3>
          <Input name="image" onChange={handleChange} value={form.image} />
        </Col>
      </Row>  
      <Row>
        <Col>
          <h3>Calories</h3>
          <Input name="calories" onChange={handleChange} value={form.calories}/>
        </Col>
      </Row>
      <Row>
        <Col>
          <h3>Servings</h3>
          <Input name="servings" onChange={handleChange} value={form.servings} />
          <br />
          <Button onClick={handleSubmit}>Create</Button>
        </Col>
      </Row>
    </Form>
        
    )
}

export default AddFoodForm;