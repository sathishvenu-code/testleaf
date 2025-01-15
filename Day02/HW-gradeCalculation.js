let inputGrade = 75;

function gradeCalculation(grade) {

    switch (true) {
        case (grade>=90):
            console.log('Student cleared the exam with distinction');            
            break;

        case (grade>=80 && grade<90):
            console.log('Student cleared the exam with First Class');            
            break;

        case (grade>=70 && grade<80):
            console.log('Student cleared the exam with Second Class');            
            break;
    
        default:
            break;
    }
    
}

gradeCalculation(inputGrade);