import { api } from "@/apis/configs/axios-config"
import { defineCancelApiObject } from "@/apis/configs/axios-utils"

export const userApi = {
  get: async function (id, cancel = false) {
    const response = await api.request({
      url: `/users/:id`,
      method: "GET",
      // retrieving the signal value by using the property name
      signal: cancel ? cancelApiObject[this.get.name].handleRequestCancellation().signal : undefined,
    })

    // returning the product returned by the API
    return response.data.product
  },
  getAll: async function (cancel = false) {
    const response = await api.request({
      url: "/users",
      method: "GET",
      signal: cancel ? cancelApiObject[this.getAll.name].handleRequestCancellation().signal : undefined,
    })

    return response.data.users
  },
  search: async function (name, cancel = false) {
    const response = await api.request({
      url: "/users/search",
      method: "GET",
      params: {
        name: name,
      },
      signal: cancel ? cancelApiObject[this.search.name].handleRequestCancellation().signal : undefined,
    })

    return response.data.users
  },
  create: async function (product, cancel = false) {
    await api.request({
      url: `/users`,
      method: "POST",
      data: product,
      signal: cancel ? cancelApiObject[this.create.name].handleRequestCancellation().signal : undefined,
    })
  },
}

// defining the cancel API object for userApi
const cancelApiObject = defineCancelApiObject(userApi)