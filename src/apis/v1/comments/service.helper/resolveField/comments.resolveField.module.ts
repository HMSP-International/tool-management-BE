import { forwardRef, Module } from '@nestjs/common';
// modules
import { UsersModule } from 'apis/v1/users/users.module';
import { TasksModule } from 'apis/v1/tasks/tasks.module';
// services
import { CommentsResolverFieldService } from './comments.resolveField.service';

@Module({
	imports: [ forwardRef(() => UsersModule), forwardRef(() => TasksModule) ],
	providers: [ CommentsResolverFieldService ],
	exports: [ CommentsResolverFieldService ],
})
export class CollaboratorsResolverFieldModule {}
