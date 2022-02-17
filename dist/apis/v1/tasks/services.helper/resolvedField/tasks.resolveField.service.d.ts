/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose" />
import { UsersService } from 'apis/v1/users/users.service';
import { ProjectsService } from 'apis/v1/projects/projects.service';
import { CommentsService } from 'apis/v1/comments/comments.service';
export declare class TasksResolverFieldService {
    private readonly projectsService;
    private readonly usersService;
    private readonly commentsService;
    constructor(projectsService: ProjectsService, usersService: UsersService, commentsService: CommentsService);
    getProject(_id: string): Promise<import("../../../projects/classes/project.model").ProjectDocument>;
    getUser(_id: string): Promise<import("../../../users/classes/user.model").UserDocument>;
    getComments(ids: string[]): Promise<(import("../../../comments/classes/comment.model").CommentModel & import("mongoose").Document<any, any, any> & {
        _id: any;
    })[]>;
}
