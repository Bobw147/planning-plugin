export const projectDataview = 
" \
```IndexCard\n \
Project\n \
```\n \
\n \
\n \
\
#### Project View\n \
\n \
\n \
```dataviewjs\n \
const DAY = 0;\n \
const MONTH = 1;\n \
const YEAR = 2;\n \
\n\
/* See which of the two date links represents the most recent in time */\n \
function getMostRecentDate(dateLink1, dateLink2){\n \
	let mostRecentDate = dateLink1;\n \
\n\
	if (dateLink1 === null || dateLink1 === undefined) return dateLink2;\n \
	if (dateLink2 === null || dateLink2 === undefined) return dateLink1;\n \
\n \
	let task1WorkedOn = dv.page(dateLink1).file.name.split('-');\n \
	let task2WorkedOn = dv.page(dateLink2).file.name.split('-');\n \
\n \
	if (task2WorkedOn[YEAR] > task1WorkedOn[YEAR]){\n \
		mostRecentDate = dateLink2;\n \
	}\n \
	else if (task2WorkedOn[YEAR] == task1WorkedOn[YEAR]){\n \
		if (task2WorkedOn[MONTH] > task1WorkedOn[MONTH]){\n \
			mostRecentDate = dateLink2;\n \
		}\n \
		else if (task2WorkedOn[MONTH] == task1WorkedOn[MONTH]){\n \
			if (task2WorkedOn[DAY] > task1WorkedOn[DAY]){\n \
				mostRecentDate = dateLink2;\n \
			}\n \
		}\n \
	}\n \
	return mostRecentDate;\n \
}\n \
\n\
/* See which of the two date links represents the most distant in time */\n \
function getMostDistantDate(dateLink1, dateLink2){\n \
	let mostDistantDate = dateLink1;\n \
\n\
	if (dateLink1 === null || dateLink1 === undefined) return dateLink2;\n \
	if (dateLink2 === null || dateLink2 === undefined) return dateLink1;\n \
\n\
	let task1WorkedOn = dv.page(dateLink1).file.name.split('-');\n \
	let task2WorkedOn = dv.page(dateLink2).file.name.split('-');\n \
\n\
	if (task2WorkedOn[YEAR] < task1WorkedOn[YEAR]){\n \
		mostDistantDate = dateLink1;\n \
	}\n \
	else if (task2WorkedOn[YEAR] == task1WorkedOn[YEAR]){\n \
		if (task2WorkedOn[MONTH] < task1WorkedOn[MONTH]){\n \
			mostDistantDate = dateLink1;\n \
		}\n \
		else if (task2WorkedOn[MONTH] == task1WorkedOn[MONTH]){\n \
			if (task2WorkedOn[DAY] < task1WorkedOn[DAY]){\n \
				mostDistantDate = dateLink1;\n \
			}\n \
		}\n \
	}\n \
	return mostDistantDate;\n \
}\n \
\n\
/* Execution starts here */\n \
/* ===================== */\n \
var projectInfo = [];\n \
\n\
/* Loop through each project */\n \
const projects = dv.pages('\"3. Planning/2. Projects\" and #planning/project')\n \
	.filter(project => project.Goal.toString().includes(dv.current().file.name))\n \
\n\
/* Loop through each project asociated with the current goal */\n \
projects.forEach(project => {\n \
	const tasks = dv.pages('\"3. Planning/3. Tasks\" and #planning/task')\n \
	.filter(task => task.Project.toString().includes(project.file.name))\n \
	console.log('Project = ' + project.file.name)\n \
\n\
	/* Loop through each task associated with the current project */\n \
	var lastWorkedOn = null\n \
	tasks.forEach(task => {\n \
		project.LastWorkedOn = getMostRecentDate(project.LastWorkedOn, task.LastWorkedOn);\n \
		project.AnticipatedDate = getMostDistantDate(project.AnticipatedDate, task.AnticipatedDate);\n \
	});\n \
	projectInfo.push(project);\n \
});\n \
\n\
dv.table(['Project', 'Due Date', 'Expected Date', 'Last Worked On'],\n \
	projectInfo.map(project => [project.file.link, project.TargetDate, project.AnticipatedDate, project.LastWorkedOn])\n \
)\n \
```"

export function projectPageContent() : string {
	return projectDataview;
}