import React from 'react';
import {Form, InputNumber, Select, Radio, Button} from 'antd';
const { Option } = Select;

const generateQuiz = (values: any) => {
    console.log(values);
}

function EditSettings() {

    return (
        <Form onFinish={generateQuiz}>
            <Form.Item label="Number of questions" name="amount">
                <InputNumber size="large" min={1} defaultValue={10} style={{width: "100%"}}/>
            </Form.Item>

            <Form.Item label="Categories" name="categories">
                <Select mode="multiple" allowClear placeholder="Select one or more categories to test yourself on" size="large">
                    <Option value="gk">General Knowledge</Option>
                    <Option value="celebrities">Celebrities</Option>
                    <Option value="animals">Animals</Option>
                    <Option value="art">Art</Option>
                    <Option value="politics">Politics</Option>
                    <Option value="history">History</Option>
                    <Option value="geo">Geography</Option>
                    <Option value="sports">Sports</Option>
                    <Option value="myth">Mythology</Option>
                </Select>
            </Form.Item>

            <Form.Item label="Difficulty Level" name="difficulty">
            <Radio.Group defaultValue="easy" buttonStyle="solid" size="large">
            <Radio.Button value="easy">Easy</Radio.Button>
            <Radio.Button value="med">Medium</Radio.Button>
            <Radio.Button value="diff">Difficult</Radio.Button>
            </Radio.Group>
            </Form.Item>

            <Form.Item label="Type of questions" name="type">
            <Radio.Group name="types" size="large" defaultValue="mcq">
                <Radio value="mcq">Multiple Choice</Radio>
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
