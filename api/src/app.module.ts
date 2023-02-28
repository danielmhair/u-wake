import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { CommentsModule } from './comments/comments.module'
import { PrioritiesModule } from './priorities/priorities.module'
import { ProjectsModule } from './projects/projects.module'
import { TasksModule } from './tasks/tasks.module'
import { UsersModule } from './users/users.module'
import { UsersFiltersModule } from './users_filters/user-filters.module'
import { UsersProjectsModule } from './users_projects/users-projects.module'
import { UsersSettingsModule } from './users_settings/users_settings.module'

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'postgres',
      // migrations: [PopulateDataExample1674432771960],
      autoLoadEntities: true,
      synchronize: true,
    }),
    UsersModule,
    ProjectsModule,
    UsersProjectsModule,
    UsersSettingsModule,
    UsersFiltersModule,
    PrioritiesModule,
    TasksModule,
    CommentsModule,
  ],
})
export class AppModule {}
