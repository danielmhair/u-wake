import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { CommentsModule } from './comments/comments.module'
import { LabelsModule } from './labels/labels.module'
import { LabelsTasksModule } from './labels_tasks/labels-tasks.module'
import { OwnersTasksModule } from './owners_tasks/owners-tasks.module'
import { PrioritiesModule } from './priorities/priorities.module'
import { ProjectsModule } from './projects/projects.module'
import { TasksModule } from './tasks/tasks.module'
import { UsersModule } from './users/users.module'
import { UsersFiltersModule } from './user_filters/user-filters.module'
import { UsersProjectsModule } from './users_projects/users-projects.module'
import { UsersSettingsModule } from './users_settings/users_settings.module'
import { ActivitiesModule } from './activities/activities.module'

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'uwake',
      // migrations: [PopulateDataExample1674432771960],
      autoLoadEntities: true,
      synchronize: true,
    }),
    CommentsModule,
    LabelsModule,
    LabelsTasksModule,
    OwnersTasksModule,
    PrioritiesModule,
    ProjectsModule,
    TasksModule,
    UsersModule,
    UsersFiltersModule,
    UsersProjectsModule,
    UsersSettingsModule,
    ActivitiesModule,
  ],
})
export class AppModule {}
