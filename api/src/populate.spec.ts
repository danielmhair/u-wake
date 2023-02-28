import { Test, TestingModule } from "@nestjs/testing"
import { AppModule } from "./app.module"
import { ProjectsService } from "./projects/projects.service"
import { UsersService } from "./users/users.service"
import { UsersProjectsService } from "./users_projects/users-projects.service"

describe('Postgres DB', () => {
  let usersService: UsersService
  let projectsService: ProjectsService
  let usersProjectsService: UsersProjectsService
  let app: TestingModule

  beforeEach(async () => {
    app = await Test.createTestingModule({
      imports: [AppModule],
    }).compile()
    usersService = app.get<UsersService>(UsersService)
    projectsService = app.get<ProjectsService>(ProjectsService)
    usersProjectsService = app.get<UsersProjectsService>(UsersProjectsService)
  })

  afterEach(async () => {
    await app.close()
  })

  it('should populate users', async () => {
    const result = await usersService.repo.query('delete from users')
    const result2 = await projectsService.repo.query('delete from projects')
    const result3 = await projectsService.repo.query('delete from users_projects')

    const dan = await usersService.create({ firstName: 'Dan', lastName: 'Hair', email: 'danielmhair@gmail.com' })
    const mark = await usersService.create({ firstName: 'Mark', lastName: 'Mena', email: 'marktavius@gmail.com' })

    const project1 = await projectsService.create({ name: 'Project 1' })
    const project2 = await projectsService.create({ name: 'Project 2'})
    const project3 = await projectsService.create({ name: 'Project 3'})

    await usersProjectsService.create({ user_id: dan.id, project_id: project1.id })
    await usersProjectsService.create({ user_id: dan.id, project_id: project2.id })
    await usersProjectsService.create({ user_id: mark.id, project_id: project3.id })

    // TODO: Add the rest of the models so that we know that they are all working as expected
  })
})
