export interface Category {
    id: number;
    name: string;
}

export interface Question {
    category: string;
    type: string;
    difficulty: string;
    correct_answer: string;
    incorrect_answers: string[];
    question: string
}