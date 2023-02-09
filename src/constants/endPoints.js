const baseUrl = 'https://task-manager-xx1a.onrender.com/api/v1/tasks'

export const getAllAndCreate = `${baseUrl}/`

export const getPatchDeleteOne = (id) => {
    return `${baseUrl}/${id}`
}