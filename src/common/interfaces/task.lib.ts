export interface Task {
    userId: string
    id: string
    taskName: string
    taskDescription: string
    category: TaskCategory
    keywords: string[]
    deadline: Date
    completed: boolean
    createdAt: Date
}

export interface TaskCategory {
    name: string
    description: string
}