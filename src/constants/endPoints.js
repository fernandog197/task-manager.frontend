const baseUrl = 'http://localhost:3000/api/v1/tasks'

export const getAllAndCreate = `${baseUrl}/`

export const getPatchDeleteOne = (id) => {
    return `${baseUrl}/${id}`
}