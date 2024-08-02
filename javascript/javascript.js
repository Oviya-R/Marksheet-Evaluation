


document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.theory, .practical').forEach(input => {
        input.addEventListener('input', calculateResults);
    });
});

function calculateResults() {
    let totalMarks = 0;
    let subjectCount = 0;
    document.querySelectorAll('.table2 tr').forEach((row, index) => {
        if (index >= 2 && index <= 8) { 
            const theoryInput = row.querySelector('.theory');
            const practicalInput = row.querySelector('.practical');
            const totalInput = row.querySelector('.total');

            if (theoryInput && practicalInput && totalInput) {
                const theoryMarks = parseFloat(theoryInput.value) || 0;
                const practicalMarks = parseFloat(practicalInput.value) || 0;
                const totalMarksForSubject = theoryMarks + practicalMarks;

                totalInput.value = totalMarksForSubject;

                totalMarks += totalMarksForSubject;
                subjectCount++;
            }
        }
    });
    const grandTotalInput = document.getElementById('grand-total');
    if (grandTotalInput) {
        grandTotalInput.value = totalMarks;
    }
    const average = subjectCount > 0 ? totalMarks / subjectCount : 0;
    const averageInput = document.getElementById('percentage');
    if (averageInput) {
        averageInput.value = average.toFixed(2);
    }
    const gradeInput = document.getElementById('grade');
    if (gradeInput) {
        const percentage = average;
        let grade = '';

        if (percentage >= 90) {
            grade = 'A+';
        } else if (percentage >= 80) {
            grade = 'A';
        } else if (percentage >= 70) {
            grade = 'B+';
        } else if (percentage >= 60) {
            grade = 'B';
        } else if (percentage >= 50) {
            grade = 'C+';
        } else if (percentage >= 40) {
            grade = 'C';
        } else {
            grade = 'F';
        }

        gradeInput.value = grade;
    }
    const resultInput = document.getElementById('result');
    if (resultInput) {
        resultInput.value = totalMarks >= 400 ? 'Pass' : 'Fail';
    }
}

   

