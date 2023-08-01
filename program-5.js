const activities = new Map();
activities.set('Day1 note learning', 'Completed');
activities.set('Day1 assignments', 'Inprogress');
activities.set('Day1 mcq', 'Todo');

activities.set('Day2 note learning', 'Completed');
activities.set('Day2 assignments', 'Inprogress');
activities.set('Day2 mcq', 'Todo');

activities.set('Day3 note learning', 'Completed');
activities.set('Day3 assignments', 'Completed');
activities.set('Day3 mcq', 'Todo');


function countActivity() {
    let completedCount = 0;
    let inProgressCount = 0;
    let toDoCount = 0;

    activities.forEach((status) => {
        if (status === 'Completed') {
            completedCount++;
        } else if (status === 'Todo') {
            toDoCount++;
        } else if (status === 'Inprogress') {
            inProgressCount++;
        }
    });
    console.log('Completed Activities:', completedCount);
    console.log('Todo Activities:', toDoCount);
    console.log('In Progress Activities:', inProgressCount);

}
countActivity();