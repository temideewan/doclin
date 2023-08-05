import { Project } from "../entities/Project";
const { ILike } = require('typeorm');

export const getExistingProjects = async (req: any, res: any) => {
    const githubUrl: string = req.query.githubUrl;

    let projects = await Project.find({
        where: {
            userId: req.userId,
            url: ILike(`%${githubUrl}%`)
        }
    });

    return res.send({projects});
}

export const getCurrentProject = async (req:any, res: any) => {
    const currentProjectId = req.session.currentProjectId; // Get session variable
    console.log('Session variable value: ' + currentProjectId);

    let project;
    
    if (currentProjectId) {
        project = await Project.findOne(currentProjectId);
    }
    
    if (!project) {
        res.send({ project : null });
        return;
    }

    return res.send(project);
};

export const createProject = async (req:any, res:any) => {
    const project = await Project.create({
        name: req.body.name,
        url: req.body.url,
        userId: req.userId,
    }).save();

    req.session.currentProjectId = project.id;
    req.session.save();

    return res.send({project});
}