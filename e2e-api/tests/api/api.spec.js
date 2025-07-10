import { test, expect } from '@playwright/test'
import dotenv from 'dotenv'
dotenv.config()

const baseApi = process.env.BASE_API
const apiKey = process.env.REQRES_API_KEY

const headers = {
  'Content-Type': 'application/json',
  'x-api-key': apiKey,
}

test('POST - deve criar um usuário com sucesso', async ({ request }) => {
  const response = await request.post(`${baseApi}/api/users`, {
    headers,
    data: {
      name: 'Felipe',
      job: 'QA',
    },
  })

  expect(response.status()).toBe(201)

  const body = await response.json()
  expect(body).toHaveProperty('id')
  expect(body).toHaveProperty('createdAt')
})

test('GET - deve listar usuários com sucesso', async ({ request }) => {
  const response = await request.get(`${baseApi}/api/users?page=2`, { headers })

  expect(response.status()).toBe(200)

  const body = await response.json()
  expect(body).toHaveProperty('data')
  expect(Array.isArray(body.data)).toBeTruthy()
})

test('PUT - deve atualizar um usuário com sucesso', async ({ request }) => {
  const response = await request.put(`${baseApi}/api/users/2`, {
    headers,
    data: {
      name: 'Felipe QA',
      job: 'Senior QA',
    },
  })

  expect(response.status()).toBe(200)
  
  const body = await response.json()
  expect(body).toHaveProperty('updatedAt')
})

test('DELETE - deve excluir um usuário com sucesso', async ({ request }) => {
  const response = await request.delete(`${baseApi}/api/users/2`, { headers })

  expect(response.status()).toBe(204)
})
