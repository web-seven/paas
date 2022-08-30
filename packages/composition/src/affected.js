const fs = require('fs');
const affectedPath = process.argv[2];
const workspacePath = process.argv[3];
const affected = JSON.parse(fs.readFileSync(affectedPath));
const workspace = JSON.parse(fs.readFileSync(workspacePath));
let paths = [];
affected.projects.forEach((project) => {
    const appPath = workspace.projects[project];
    let isOCI = fs.existsSync( appPath + '/Dockerfile');
    let isChart = fs.existsSync( appPath + '/charts/' + project);
    fs.existsSync( appPath + '/package.json') ? buildContext = `${appPath}` : buildContext = ``
    fs.existsSync( appPath + '/workflow.yaml') ? isworkflowConfig = 'true' : isworkflowConfig = 'false'
    buildContext === "" ? dockerfile = `${appPath}/Dockerfile` : dockerfile = `Dockerfile`

    paths.push({
        "name": project,
        "path": appPath,
        "isOCI": isOCI,
        "isChart": isChart,
        buildContext,
        dockerfile,
        isworkflowConfig
    })
});
console.log(JSON.stringify(paths));