function sprintReview(input) {
    const listOfTasks = input.shift();
    const tickets = input.slice(0, listOfTasks);
    const sprints = tickets.reduce((acc, curr) => {
        const [assignee, taskId, title, status, points]
            = curr.split(":");

        if (!acc.hasOwnProperty(assignee)) {
            acc[assignee] = [];
        }

        acc[assignee].push({ taskId, title, status, points: Number(points) });
        return acc;
    }, {})

    const commands = input.splice(listOfTasks, input.length - listOfTasks);

    for (const command of commands) {
        const tokens = command.split(":");
        const action = tokens[0];
        let assignee = tokens[1];

        if (action === "Add New") {
            let taskId = tokens[2];
            let title = tokens[3];
            let status = tokens[4];
            let points = tokens[5];
            if (!sprints.hasOwnProperty(assignee)) {
                console.log(`Assignee ${assignee} does not exist on the board!`);
            }

            sprints[assignee].push({ taskId, title, status, points: Number(points) });
        }else if(action === "Change Status"){
            let taskId = tokens[2];
            let newStatus = tokens[3];
            if(!sprints.hasOwnProperty(assignee)){
                console.log(`Assignee ${assignee} does not exist on the board!`);
            }else{
                const task = sprints[assignee].find((t) => t.taskId === taskId);
                if(task){
                    task.status = newStatus;
                }else{
                    console.log(`Task with ID ${taskId} does not exist for ${assignee}!`);
                }
            }
        } else if(action === "Remove Task"){
            let index = tokens[2];
            if(!sprints.hasOwnProperty(assignee)){
                console.log(`Assignee ${assignee} does not exist on the board!`);
            }else{
                if(index < 0 || index >+ sprints[assignee].length){
                    console.log("Index is out of range!");
                }else{
                    sprints[assignee].splice(index, 1);
                }
            }
        }
    }

    const toDoPoints = calculatePointsForStatus("ToDo");
    const inProgressPoints = calculatePointsForStatus("In Progress");
    const reviewPoints = calculatePointsForStatus("Code Review");
    const donePoints = calculatePointsForStatus("Done");

    console.log(`ToDo: ${toDoPoints}pts`);
    console.log(`In Progress: ${inProgressPoints}pts`);
    console.log(`Code Review: ${reviewPoints}pts`);
    console.log(`Done Points: ${donePoints}pts`);

    if(donePoints >= toDoPoints + inProgressPoints + reviewPoints){
        console.log("Sprint was successful!");
    }else{
        console.log("Sprint was unsuccessful...");
    }


    function calculatePointsForStatus(status){
        return Object.values(sprints).reduce((acc, curr) => {
            const total = curr.filter(t => t.status === status)
                .reduce((taskTotal, task) => taskTotal + task.points, 0);
            return acc += total;
        }, 0)
    }
}

sprintReview(
    [
        '5',
        'Kiril:BOP-1209:Fix Minor Bug:ToDo:3',
        'Mariya:BOP-1210:Fix Major Bug:In Progress:3',
        'Peter:BOP-1211:POC:Code Review:5',
        'Georgi:BOP-1212:Investigation Task:Done:2',
        'Mariya:BOP-1213:New Account Page:In Progress:13',
        'Add New:Kiril:BOP-1217:Add Info Page:In Progress:5',
        'Change Status:Peter:BOP-1290:ToDo',
        'Remove Task:Mariya:1',
        'Remove Task:Joro:1',
    ]
)