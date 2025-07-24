import { test, expect } from '@playwright/test'
import dotenv from 'dotenv'
dotenv.config()

const baseApi = process.env.BASE_API
const apiKey = process.env.REQRES_API_KEY

const headers = {
  'Content-Type': 'application/json',
  'x-api-key': apiKey,
}

let createdUser

test.describe('Testes de API', () => {
  test.beforeEach(async ({ request }) => {
    const response = await request.post(`${baseApi}/api/users`, {
      headers,
      data: {
        name: 'Felipe',
        job: 'QA Engineer',
      },
    })

    expect(response.status()).toBe(201)
    const body = await response.json()

    createdUser = {
      id: body.id,
      name: body.name,
      job: body.job,
      createdAt: body.createdAt,
    }

    expect(body).toMatchObject({
      name: 'Felipe',
      job: 'QA Engineer',
    })
    expect(body.id).toBeTruthy()
    expect(body.createdAt).toMatch(/^\d{4}-\d{2}-\d{2}T/)
  })

  test('GET - deve listar usuários com sucesso', async ({ request }) => {
    const response = await request.get(`${baseApi}/api/users?page=2`, { headers })
    expect(response.status()).toBe(200)

    const body = await response.json()
    expect(body).toHaveProperty('data')
    expect(Array.isArray(body.data)).toBeTruthy()
    expect(body.data.length).toBeGreaterThan(0)

    // Valida a estrutura
    const user = body.data[0]

    expect(user).toHaveProperty('id')
    expect(user).toHaveProperty('email')
    expect(user).toHaveProperty('first_name')
    expect(user).toHaveProperty('last_name')
  })

  test('PUT - deve atualizar um usuário com sucesso', async ({ request }) => {
    const response = await request.put(`${baseApi}/api/users/${createdUser.id}`, {
      headers,
      data: {
        name: 'Felipe QA',
        job: 'Senior QA Engineer',
      },
    })

    expect(response.status()).toBe(200)
    const body = await response.json()

    expect(body).toMatchObject({
      name: 'Felipe QA',
      job: 'Senior QA Engineer',
    })
    expect(body.updatedAt).toMatch(/^\d{4}-\d{2}-\d{2}T/)
  })

  test('DELETE - deve excluir um usuário com sucesso', async ({ request }) => {
    const response = await request.delete(`${baseApi}/api/users/${createdUser.id}`, {
      headers,
    })

    expect(response.status()).toBe(204)
  })
})
