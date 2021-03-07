import React, {useState, useEffect} from 'react';
import {Form, InputNumber, Select, Radio, Button} from 'antd';
import {getCategories, generateQuiz} from '../../utils';
import {useHistory} from "react-router-dom";
import {Category, Question} from '../../interfaces/templates';
const { Option } = Select;

interface Props {
    setQuestions: (newQuestions: Question[]) => void 
}

const startQuiz = async (values: any, categories: Category[], setQuestions: (val: Question[]) => void) => {
    const response  = await generateQuiz(values, categories);
    setQuestions(response.data.results);
}

const defaultValues = {
    amount: 10,
    category: "any",
    difficulty: "easy",
    type: "any"
}


function EditSettings({setQuestions}: Props) {
    const history = useHistory();
    const [categories, setCategories]: [Category[], (newCategories: Category[]) => void] = useState([{id: -1, name: ""}]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function populateCategories() {
            const response = await getCategories();
            setCategories(response.data.trivia_categories);
            setLoading(false);
        }

        populateCategories();
    });

    return (
        <Form onFinish={(values) => {
            startQuiz(values, categories, setQuestions);
            history.push('/quiz');
        }
        } initialValues={defaultValues}>
            <Form.Item label="Number of questions" name="amount">
                <InputNumber size="large" min={1} max={50} style={{width: "100%"}}/>
            </Form.Item>

            <Form.Item label="Categories" name="category">
                <Select placeholder="Select a category to test yourself on" size="large" loading={loading}>
                    <Option value="any">Any category</Option>
                    {categories.map((category: {id:number, name: string}) => {
                        return(
                            <Option key={category.id} value={category.name}>{category.name}</Option>
                        )
                    })}
                </Select>
            </Form.Item>

            <Form.Item label="Difficulty Level" name="difficulty">
            <Radio.Group defaultValue="easy" buttonStyle="solid" size="large">
            <Radio.Button value="easy">Easy</Radio.Button>
            <Radio.Button value="medium">Medium</Radio.Button>
            <Radio.Button value="hard">Hard</Radio.Button>
            </Radio.Group>
            </Form.Item>

            <Form.Item label="Type of questions" name="type">
            <Radio.Group name="types" size="large">
                <Radio value="any">Any Type</Radio>
                <Radio value="multiple">Multiple Choice</Radio>
                <Radio value="boolean">True or False</Radio>
            </Radio.Group>
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit" size="large" style={{width: "100%", height: 50, marginTop: 50}}>
                    <p className="btnText" style={{marginTop: 0}}>Generate Quiz</p>
                </Button>
        </Form.Item>
        </Form>
    )
}

export default EditSettings
