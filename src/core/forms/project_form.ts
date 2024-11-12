export const projectForm = 
'<div> \
    <div> \
        <label style="margin-inline: 12px">Enter the name of the Project :</label> \
        <input type="text" id="project-name" autofocus style="margin-bottom: 12px"> \
    </div> \
    <div> \
        <label style="margin-inline: 12px">Select the Mode type :</label> \
        <select id="mode-tag" style="margin-bottom: 12px"> \
            <option>#planning/business</option> \
            <option>#planning/personal</option> \
            <option>#planning/domestic</option> \
        </select> \
    </div> \
    <div> \
        <label style="margin-inline: 12px">Target Date</label> \
        <input type="date" id="target-date" style="margin-bottom: 12px""> \
    </div> \
    <div> \
        <button id="createProject" type="button">Create Project</button> \
        <button id="cancelCreate" type="button">Cancel</button> \
    </div> \
</div>'
