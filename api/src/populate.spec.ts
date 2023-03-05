import { Test, TestingModule } from "@nestjs/testing"
import { AppModule } from "./app.module"
import { CommentsService } from "./comments/comments.service"
import { LabelsService } from "./labels/labels.service"
import { LabelsTasksService } from "./labels_tasks/labels-tasks.service"
import { OwnersTasksService } from "./owners_tasks/owners-tasks.service"
import { PrioritiesService } from "./priorities/priorities.service"
import { ProjectsService } from "./projects/projects.service"
import { RemindersService } from "./reminders/reminders.service"
import { TasksService } from "./tasks/tasks.service"
import { ActivitiesService } from "./activities/activities.service"
import { UsersService } from "./users/users.service"
import { UsersProjectsService } from "./users_projects/users-projects.service"
import { UsersSettingsService } from "./users_settings/users_settings.service"
import { UserFiltersService } from "./user_filters/user-filters.service"

describe('Postgres DB', () => {
  let usersService: UsersService
  let projectsService: ProjectsService
  let usersProjectsService: UsersProjectsService
  let commentsService: CommentsService
  let labelsService: LabelsService
  let labelsTasksService: LabelsTasksService
  let ownersTasksService: OwnersTasksService
  let prioritiesService: PrioritiesService
  let remindersService: RemindersService
  let tasksService: TasksService
  let activitiesService: ActivitiesService
  let userFiltersService: UserFiltersService
  let usersSettingsService: UsersSettingsService
  let app: TestingModule

  beforeEach(async () => {
    app = await Test.createTestingModule({
      imports: [AppModule],
    }).compile()
    usersService = app.get<UsersService>(UsersService)
    projectsService = app.get<ProjectsService>(ProjectsService)
    usersProjectsService = app.get<UsersProjectsService>(UsersProjectsService)
    commentsService = app.get<CommentsService>(CommentsService)
    labelsService = app.get<LabelsService>(LabelsService)
    labelsTasksService = app.get<LabelsTasksService>(LabelsTasksService)
    ownersTasksService = app.get<OwnersTasksService>(OwnersTasksService)
    prioritiesService = app.get<PrioritiesService>(PrioritiesService)
    remindersService = app.get<RemindersService>(RemindersService)
    tasksService = app.get<TasksService>(TasksService)
    activitiesService = app.get<ActivitiesService>(ActivitiesService)
    userFiltersService = app.get<UserFiltersService>(UserFiltersService)
    usersSettingsService = app.get<UsersSettingsService>(UsersSettingsService)
  })

  afterEach(async () => {
    await app.close()
  })

  it('should populate users', async () => {
    await Promise.all([
      usersService.repo.query('delete from users'),
      projectsService.repo.query('delete from projects'),
      projectsService.repo.query('delete from users_projects'),
      commentsService.repo.query('delete from comments'),
      labelsService.repo.query('delete from labels'),
      labelsTasksService.repo.query('delete from labels_tasks'),
      ownersTasksService.repo.query('delete from owners_tasks'),
      prioritiesService.repo.query('delete from priorities'),
      remindersService.repo.query('delete from reminders'),
      tasksService.repo.query('delete from tasks'),
      activitiesService.repo.query('delete from tasks_activity'),
      userFiltersService.repo.query('delete from user_filters'),
      usersSettingsService.repo.query('delete from users_settings'),
    ])

    const dan = await usersService.create({ firstName: 'Dan', lastName: 'Hair', email: 'danielmhair@gmail.com' })
    const mark = await usersService.create({ firstName: 'Mark', lastName: 'Mena', email: 'marktavius@gmail.com' })

    const danProject = await projectsService.create({ name: 'Dan Project' })
    const sharedProject = await projectsService.create({ name: 'Shared Project'})
    const markProject = await projectsService.create({ name: 'Mark Project'})

    await usersProjectsService.create({ user_id: dan.id, project_id: danProject.id })
    await usersProjectsService.create({ user_id: dan.id, project_id: sharedProject.id })
    await usersProjectsService.create({ user_id: mark.id, project_id: sharedProject.id })
    await usersProjectsService.create({ user_id: mark.id, project_id: markProject.id })

    await usersSettingsService.create({ user_id: dan.id, reset_subtasks: true })
    await usersSettingsService.create({ user_id: mark.id, reset_subtasks: true })

    await userFiltersService.create({ color: 'blue', filter_query: 'today', name: 'Today', user_id: dan.id })
    await userFiltersService.create({ color: 'blue', filter_query: 'today', name: 'Today', user_id: mark.id })

    const priority1 = await prioritiesService.create({ name: '1', user_id: dan.id })
    const priority2 = await prioritiesService.create({ name: '2', user_id: dan.id })
    const priority3 = await prioritiesService.create({ name: '3', user_id: mark.id })

    const task1 = await tasksService.create({ name: 'Task 1', description: 'new desc', due_date: new Date(), order: 1, parent_id: null, project_id: sharedProject.id, priority_id: priority1.id })
    const task2 = await tasksService.create({ name: 'Task 2', description: 'new desc', due_date: new Date(), order: 2, parent_id: null, project_id: sharedProject.id, priority_id: priority2.id })
    const subTask2_1 = await tasksService.create({ name: 'Task 3', description: 'new desc', due_date: new Date(), order: 1, parent_id: task2.id, project_id: sharedProject.id, priority_id: null })
    const subTask2_2 = await tasksService.create({ name: 'Task 3', description: 'new desc', due_date: new Date(), order: 2, parent_id: task2.id, project_id: sharedProject.id, priority_id: priority3.id })

    await ownersTasksService.create({ task_id: task1.id, owner_id: dan.id })
    await ownersTasksService.create({ task_id: task2.id, owner_id: dan.id })
    await ownersTasksService.create({ task_id: subTask2_1.id, owner_id: dan.id })
    await ownersTasksService.create({ task_id: subTask2_2.id, owner_id: mark.id })

    await commentsService.create({ message: 'New Comment', task_id: task1.id })
    await commentsService.create({ message: 'New Comment 2', task_id: task2.id })
    await commentsService.create({ message: 'New Comment 3', task_id: task2.id })
    await commentsService.create({ message: 'New Comment 4', task_id: subTask2_1.id })
    await commentsService.create({ message: 'New Comment 5', task_id: subTask2_2.id })

    const label = await labelsService.create({ name: 'Label 1', user_id: dan.id })
    const label2 = await labelsService.create({ name: 'Label 2', user_id: dan.id })
    const label3 = await labelsService.create({ name: 'Label 3', user_id: mark.id })

    await labelsTasksService.create({ label_id: label.id, task_id: task1.id })
    await labelsTasksService.create({ label_id: label2.id, task_id: task1.id })
    await labelsTasksService.create({ label_id: label3.id, task_id: task1.id })

    await remindersService.create({ task_id: task1.id, remind_at: new Date() })

    await activitiesService.create({ action: 'task_created', date: new Date(), owner_id: dan.id, action_id: task1.id })
    await activitiesService.create({ action: 'comment_created', date: new Date(), owner_id: dan.id, action_id: task1.id })
  })
})
