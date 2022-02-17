import { UsersService } from 'apis/v1/users/users.service';
import { TasksService } from 'apis/v1/tasks/tasks.service';
import { UserDocument } from 'apis/v1/users/classes/user.model';
import { TaskDocument } from 'apis/v1/tasks/classes/task.model';
export declare class CommentsResolverFieldService {
    private usersService;
    private tasksService;
    constructor(usersService: UsersService, tasksService: TasksService);
    getTask(_taskId: string): Promise<TaskDocument>;
    getUser(_id: string): Promise<UserDocument>;
}
