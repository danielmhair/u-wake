export class TaskDto {
  public id?: number = null
  public name = ''
  public description = ''
  public order: number = null
  public due_date: Date = null
  public parent_id: number = null
  public priority_id: number = null
  public project_id: number = null
}
