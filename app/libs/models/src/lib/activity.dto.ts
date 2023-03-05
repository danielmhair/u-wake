type ActivityType = 'task_created' | 'task_completed' | 'task_modified' | 'comment_created' | 'label_created' | 'label_modified' | 'project_created' | 'project_modified' | ''
export class ActivityDto {
  /**
   * This action id is tied to either a task, comment, label or project, depending on the action name
   */
  public action_id: number = null
  public owner_id: number = null
  public date: Date = null
  /**
   * Task creation: When a user creates a new task, a log entry is created in the activity feed with the task name and creation date.
   * Task completion: When a user completes a task, a log entry is created in the activity feed with the task name and completion date.
   * Task modification: When a user modifies a task, a log entry is created in the activity feed with the task name, the old and new task details, and the modification date.
   * Comment creation: When a user adds a comment to a task or project, a log entry is created in the activity feed with the comment content and creation date.
   * Label creation: When a user creates a new label, a log entry is created in the activity feed with the label name and creation date.
   * Label modification: When a user modifies a label, a log entry is created in the activity feed with the label name, the old and new label details, and the modification date.
   * Project creation: When a user creates a new project, a log entry is created in the activity feed with the project name and creation date.
   * Project modification: When a user modifies a project, a log entry is created in the activity feed with the project name, the old and new project details, and the modification date.
   */
  public action: ActivityType = ''
}
