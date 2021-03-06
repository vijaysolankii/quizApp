const exam = [
    
    {
        "exam_Id":"1",
        "exam_name":"math",
        "exam_time":45,
        "exam_total_question":"5",
        
        "exam_maths": {
            "q1": {
                "question": "5 + 7 = ?",
                "options": [
                    "10",
                    "11",
                    "12",
                    "13"
                ],
                "answer": "12"
            },
            "q2": {
                "question": "12 - 8 = ?",
                "options": [
                    "1",
                    "2",
                    "3",
                    "4"
                ],
                "answer": "4"
            },
            "q3": {
                "question": "5 - 7 = ?",
                "options": [
                    "10",
                    "-2",
                    "12",
                    "13"
                ],
                "answer": "-2"
            },
            "q4": {
                "question": "12 + 8 = ?",
                "options": [
                    "1",
                    "20",
                    "3",
                    "4"
                ],
                "answer": "20"
            },
            "q5": {
                "question": "8 + 7 = ?",
                "options": [
                    "10",
                    "11",
                    "12",
                    "15"
                ],
                "answer": "15"
            }
        }
        
    }, 
    {
        "exam_Id":"2",
        "exam_name":"science",
        "exam_time":40,
        "exam_total_question":"3",
        "exam_science": {
            "q1": {
                "question": "formula of h2so4",
                "options": [
                    "air",
                    "water",
                    "heat",
                    "salt"
                ],
                "answer": "salt"
            },
            "q2": {
                "question": "? = mc^2",
                "options": [
                    "e",
                    "a",
                    "b",
                    "c"
                ],
                "answer": "e"
            }
        }
    }, 
    {
        "exam_Id":"3",
        "exam_name":"painting",
        "exam_time":30,
        "exam_total_question":"1",
        "exam_paint": {
            "q1": {
                "question": "how to draw",
                "options": [
                    "air",
                    "water",
                    "rubber",
                    "brush"
                ],
                "answer": "brush"
            }
        }
    }

]
export default exam;